var js = js || {},
  body = $('body');

// Scripts
js.main = {
  init: function () {
    this.modal();
    this.musicPlayer();
    this.microSort();
    this.resourceSort();
    this.externalLinks();
    this.externalLinkTracking();
    this.mailchimpAJAX();
    this.validateForm();
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
  mailchimpAJAX: function() {
    $('.micro-download-form').each(function(){
      var mEmail = $(this).children('.micro-download-email'),
      mSubmit = $(this).children('.form-submit'),
      mLink = mSubmit.attr("data-src"),
      mName = mSubmit.attr("data-name");

      function callbackFunction (resp) {
        var win = window.open(mLink, '_blank');
        if (resp.result === 'success') {
          // window.location.href = mLink;
          win.focus();
          $('.modal').removeClass('active');
          $('body').removeClass('modal-open');
        } else {
          // window.location.href = mLink;
          win.focus();
          $('.modal').removeClass('active');
          $('body').removeClass('modal-open');
        }
      }

      $(this).ajaxChimp({
        url: 'https://thebeatboxclub.us19.list-manage.com/subscribe/post?u=904cbe53fd98d721cd0f6af6b&amp;id=8f73f35139&amp;SIGNUPLOC=Micro',
        callback: callbackFunction,
      });
    });
  },
  musicPlayer: function() {
    howlers = {}; 
    var playlist = $('.box-tracks');
    var track = $('.box-list');
    var fixedPlayer = $('#bbxmusicplayer');
    var fpPause = fixedPlayer.find('.box-player-pause');
    var fpPlay = fixedPlayer.find('.box-player-play');
    var wrapper = $('.site-wrapper');

    playlist.find(track).each(function () {
      var e = $(this);
      var p = e.find('.box-player');
      var progress = e.find('.box-progress');

      var link = e.data("link");
      var id = e.data("id");

      // function step() {
      //   Object.keys(howlers).forEach(function(key) {
      //     var seek = howlers[id].seek() || 0;
      //     var duration = howlers[id].duration();
      //     progress.find('.box-progress-inner').css("width", (((seek / duration) * 100) || 0) + '%');
      //     if (howlers[id].playing()) {
      //       window.requestAnimationFrame(step.bind(this));
      //     } else {
            
      //     }  
      //   });
      // }

      // function seek(per) {
      //   Object.keys(howlers).forEach(function(key) {
      //     var seek = howlers[id].seek() || 0;
      //     var duration = howlers[id].duration();
      //     if (howlers[id].playing()) {
      //       howlers[id].seek(duration * per);
      //     }
      //   });
      // }

      function fpLoad() {
        if(fixedPlayer.hasClass('closed')){
          fixedPlayer.removeClass('closed');
          fixedPlayer.addClass('open');
        }
        Object.keys(howlers).forEach(function(key) {

          wrapper.addClass('player-on');
          fixedPlayer.empty();
          e.clone().appendTo(fixedPlayer);
          fixedPlayer.find('.box-player-container').hide();
          fixedPlayer.find('.box-list').css('top','0px');
        });
      }

      // Play and Pause Trigger
      p.on("click", function(){
        if (id in howlers){
          if (e.hasClass('paused')){
            Object.keys(howlers).forEach(function(key) {
              track.removeClass('playing');
              track.addClass('unloaded');
            });
            e.removeClass('unloaded paused');

            howlers[id].play();
            e.addClass('playing');
            console.log("track playing");

          } else if (e.hasClass('playing')){
            Object.keys(howlers).forEach(function(key) {
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
              track.removeClass('paused');
              track.removeClass('playing');
              track.addClass('unloaded');
            });

            e.removeClass('unloaded');

            howlers[id].play();
            e.addClass('playing');

            fpLoad();
          }
        } else {
          Object.keys(howlers).forEach(function(key) {
            howlers[key].unload();
            howlers[key].load();
            // window.cancelAnimationFrame(step);
            track.removeClass('paused');
            track.removeClass('playing');
            track.addClass('unloaded');
          });

          howlers[id] = new Howl({
            src: [link],
            loop: true,
            // onend: function() {
            //   ga('send', {
            //     hitType: 'event',
            //     eventCategory: 'micro',
            //     eventAction: 'loops',
            //     eventLabel: id
            //   });
            // }
            // onplay: function() {
            //   window.requestAnimationFrame(step.bind(this));
            // },
            // onseek: function () {
            //   window.requestAnimationFrame(step.bind(this));
            // }
          });
          
          e.removeClass('unloaded');
          howlers[id].play();
          e.addClass('playing');
          console.log("track started");

          fpLoad();
        };
      });

      

      // Progress Trigger
      // progress.on("click", function(e){
      //   var seek = howlers[id].seek() || 0;
      //   var duration = howlers[id].duration();

      //   var posX = $(this).offset().left
      //   var c = e.pageX - posX;
      //   var w = progress.width();
      //   var clickpos = c / w;
      //   var seekpos = duration * clickpos;
      //   Object.keys(howlers).forEach(function(key) {
      //     howlers[id].seek(seekpos);
      //   });
      // });
    });
  },
  microSort: function() {
    var $grid = $('.box-tracks').isotope({
      // options
      itemSelector : '.box-list',
      transitionDuration: 0,
      stamp: '.sticky',
      getSortData: {
        date: '[data-date]'
      },
      sortBy : 'date',
      sortAscending: false
    });

    $filter = $('.block-resources-sortfilter li');
    $filter.on('click', function() {
      var filterValue = $(this).attr('data-filter');
      $filter.removeClass('selected');
      $(this).addClass('selected');
      console.log (filterValue);
      $grid.isotope({ filter: filterValue });
    });
    
  },
  modal: function (e) {
    var bd = $('body');
    var modal_link = $('.modal-link');
    var modal_close = $('.modal-close');

    modal_link.on("click", function(e){
      $(this).closest('.box-col').children('.modal').addClass('active');
      bd.addClass('modal-open');
      e.preventDefault();
    });
    modal_close.on("click", function(){
      $(this).closest('.modal').removeClass('active');
      bd.removeClass('modal-open');
    });
  },
  resourceSort: function() {
    $grid = $('.block-resources-grid');
    $grid.each(function(index, el) {
      $(this).isotope({
        itemSelector : '.box-list',
        transitionDuration: 0,
        stamp: '.featured',
        getSortData: {
          date: '[data-date]',
          weight: '[data-weight]'
        },
        sortBy : ['weight', 'date'],
        sortAscending: false
      });
    });
  },
  validateForm: function() {
    var form = document.getElementById("source_submit_form");
    if(form){
      $(form).parsley().on('field:validated', function() {
        var ok = $('.parsley-error').length === 0;
        // $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', function(){
  js.main.init();
});
