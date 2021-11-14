var js = js || {},
  body = $('body');

// Scripts
js.main = {
  init: function () {
    this.externalLinks();
    this.modal();
    this.resourceSort();
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
    var options = {
      valueNames: [ 'type' ]
    };
    var resourceList = new List('block-resources-grid', options);

    $('.filter-type').on('click',function(){
      var $text = $(this).text();
      if($(this).hasClass( 'selected' )){
        resourceList.filter();
        $(this).removeClass('selected');
      } else {
        resourceList.filter(function(item) {
          return (item.values().type == $text);
        });
        $(this).addClass('selected');
      }
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
