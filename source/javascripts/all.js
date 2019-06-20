var js = js || {},
  body = document.getElementsByTagName('body')[0];

// Scripts
js.main = {
  init: function () {
    // this.modal();
    this.microPlayer();
    this.externalLinks();
    this.externalLinkTracking();
  },
  externalLinkTracking: function() {
    //Track Outbound Link Clicks
    (function trackOutbounds() {
      var hitCallbackHandler = function (url, win) {
        if (win) {
          window.open(url, win);
        } else {
          window.location.href = url;
        }
      };

      var addEvent = function (el, eventName, handler) {

        if (el.addEventListener) {
          el.addEventListener(eventName, handler);
        } else {
          el.attachEvent('on' + eventName, function () {
            handler.call(el);
          });
        }
      }

      if (document.getElementsByTagName) {
        var el = document.getElementsByTagName('a');
        var getDomain = document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0];

        // Look thru each a element
        for (var i = 0; i < el.length; i++) {

          // Extract it's href attribute
          var href = (typeof (el[i].getAttribute('href')) == 'string') ? el[i].getAttribute('href') : '';

          // Query the href for the top level domain (xxxxx.com)
          var myDomain = href.match(getDomain);

          // If link is outbound and is not to this domain        
          if ((href.match(/^(https?:|\/\/)/i) && !myDomain) || href.match(/^mailto\:/i)) {

            // Add an event to click
            addEvent(el[i], 'click', function (e) {
              var url = this.getAttribute('href'),
                win = (typeof (this.getAttribute('target')) == 'string') ? this.getAttribute('target') : '';

              console.log("add event", url);
              // Log even to Analytics, once done, go to the link
              ga('send', 'event', 'outbound', 'click', url, {
                'hitCallback': hitCallbackHandler(url, win)
              }, {
                'nonInteraction': 1
              });

              e.preventDefault();
            });
          }
        }
      }
    })();
  },
  externalLinks: function() {
    function externalLinks() {
      var anchors = document.querySelectorAll( 'a' );
      for( var i = 0; i < anchors.length; i++ ) {
        if ( anchors[i].hostname !== window.location.hostname ) {
            anchors[i].setAttribute( 'target', '_blank' );
        }
      }
    }
    externalLinks();
  },
  microPlayer: function() {
    howlers = {}; 
    var track = $('.box-song-player--controls');
    $('.block-micro').find(track).each(function () {
      $(this).on("click", function(){
        var e = $(this);
        var link = e.data("link");
        var id = e.data("id");
        
        if (id in howlers){
          if (e.hasClass('paused')){
            Object.keys(howlers).forEach(function(key) {
              howlers[key].unload();
              howlers[key].load();
              track.removeClass('playing');
              track.addClass('unloaded');
            });
            e.removeClass('unloaded paused');

            howlers[id].play();
            e.addClass('playing');
            
            console.log("track playing");
          } else if (e.hasClass('playing')){
            Object.keys(howlers).forEach(function(key) {
              howlers[key].unload();
              howlers[key].load();
              track.removeClass('playing');
              track.addClass('unloaded');
            });
            e.removeClass('unloaded playing');

            howlers[id].pause();
            e.addClass('paused');

            console.log("track paused");
          } else if (e.hasClass('unloaded')){
            Object.keys(howlers).forEach(function(key) {
              howlers[key].unload();
              howlers[key].load();
              track.removeClass('playing');
              track.addClass('unloaded');
            });

            e.removeClass('unloaded');

            howlers[id].play();
            e.addClass('playing');

            console.log("track started");
          }
        } else {
          Object.keys(howlers).forEach(function(key) {
            howlers[key].unload();
            howlers[key].load();
            track.removeClass('playing');
            track.addClass('unloaded');
          });

          howlers[id] = new Howl({
            src: [link],
            loop: true,
          });
          
          e.removeClass('unloaded');

          howlers[id].play();
          e.addClass('playing');
          
          console.log("track init");
        }
      });
    });
  },
  modal: function (e) {
    var bd = body;
    var modal_link = document.querySelectorAll('.modal-link');
    var modal_close = document.querySelectorAll('.modal-close');
    var modal_page = document.querySelectorAll('.modal-page');


    function modal_init(e) {
      e.preventDefault();

      for(var i = 0, l=document.links.length; i<l; i++) {
        var $href = this.modal_link.getAttribute('href');
      }

      document.body.classList.add("modal-open");
      document.getElementByID($href).classList.add("active");
    };
    function modal_remove() {
      document.body.classList.remove("modal-open");
      document.modal_page.classList.remove("active");
    };

    modal_link[0].addEventListener("click", modal_init, false);
    modal_close[0].addEventListener("click", modal_remove, false);
  }
};

document.addEventListener('DOMContentLoaded', function(){
  js.main.init();
});
