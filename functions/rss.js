const https = require("https");

async function getPosts() {
  return new Promise((resolve, reject) => {
    const query = `
    query {
      post {
        post_tracks {
          name 
          genre
        }
        post_sources {
          link_title
          link_url
        }
        post_updates {
          content {
            content {
              content {
                content {
                  value
                }
              }
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
        resolve(parsedPosts.data.post.items);
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
      const hasText = item.text;
      const hasLink = item.link;
      const titleMaybeTruncated = hasText && item.text.length > truncateLength ? "..." : "";
      const title = hasText
        ? `${item.text.slice(0, truncateLength)}${titleMaybeTruncated}`
        : "New post";
      const maybeLink = hasLink ? ` - ${item.link}` : "";
      const description = hasText ? `${item.text}${maybeLink}` : "";

      return `
        <item>
          <name>${name}</name>
          <genre>${genre}</genre>
          <linktitle>${link_title}</linktitle>
          <linkurl>${link_url}</linkurl>
          <postupdates>${post_updates}</postupdates>
          <value>${value}</value>
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