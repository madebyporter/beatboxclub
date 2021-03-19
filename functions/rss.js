const https = require("https");

async function getPosts() {
  return new Promise((resolve, reject) => {
    const query = `
    query {
      sourcePostCollection {
        items {
          postTracksCollection(limit: 5) {
            items {
              name
              author
              genre
              bpm
            }
          }
          postSourcesCollection(limit: 5) {
            items {
              linkTitle
              linkUrl
              linkType
              linkOwner
              authorName
              authorWebsite
              linkFeatured
            }
          }
        }
      }
    }
    `;

    const options = {
      protocol: "https:",
      hostname: "graphql.contentful.com",
      path: "/content/v1/spaces/e1azyderdhks",
      method: "POST",
      headers: {
        Authorization: "Bearer 9TPgSbVWX8I_TQUarlwH_W7Lzq7CHaxNn9AGWKNMXXM",
        "Content-Type": "application/json",
      },
    };

    let posts = "";

    const req = https.request(options, (res) => {
      res.on("data", (data) => {
        posts += data;
      });

      res.on("end", () => {
        const parsedPosts = JSON.parse(posts);
        resolve(parsedPosts.data.sourcePostCollection.items);
      });
    });

    req.on("error", (e) => {
      console.error(e);
    });

    req.write(JSON.stringify({ query }));
    req.end();
  });
}

function buildRssItems(items) {
  const truncateLength = 44;

  return items
    .map((item) => {
      return `
        <item>
          <item>
            <name>${item.postTracksCollection.items.name}</name>
            <genre>${item.postTracksCollection.items.genre}</genre>
          </item>
          <item>
            <linktitle>${item.postSourcesCollection.linkTitle}</linktitle>
            <linkurl>${item.postSourcesCollection.linkUrl}</linkurl>
          </item>
        </item>
        `;
    })
    .join("");
}

exports.handler = async function (event, context) {
  const rssFeed = `<?xml version="1.0"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>thebeatboxclub.com</title>
    <atom:link href="https://thebeatboxclub.com/.netlify/functions/rss" rel="self" type="application/rss+xml" />
    <link>https://thebeatboxclub.com</link>
    <description>The Beatbox Club is a subscription based database of beats by producers.</description>
    ${buildRssItems(await getPosts())}
  </channel>
  </rss>`;

  return {
    statusCode: 200,
    contentType: "text/xml",
    body: rssFeed,
  };
};