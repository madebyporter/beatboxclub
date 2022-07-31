var js = js || {},
  body = $('body');

// Scripts
js.main = {
  init: function () {
    this.externalLinks();
    this.mobileNavTrigger();
    this.toolsFilterSort();
    this.modal();
    this.resourceSort();
    this.externalLinkTracking();
    this.mailchimpAJAX();
    this.validateForm();
    this.handleSignUpRedirect();
    this.refreshJWTToken();
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
  mobileNavTrigger: function() {
    // Get trigger ID
    var navTrigger = document.getElementById('navTrigger');

    // Get menu ID
    var navMenu = document.getElementById('navMenu');

    // Get close ID
    var navClose = document.getElementById('navClose');

    // Group of rules when user clicks on filter trigger button
    function activateNav(){

      // If the menu is active
      if (navMenu.classList.contains('active')){

        // Remove active class from body so the page can scroll
        document.body.classList.remove("mobileMenuActive");

        // Remove active class from trigger button so text can turn white
        navTrigger.classList.remove("active");

        // Remove active class from filter menu so menu can hide
        navMenu.classList.remove("active");
      } 

      // If the menu is not active
      else {
        // Add active class to body so the page cannot scroll
        document.body.classList.add("mobileMenuActive");

        // Add active class to trigger button so text can turn yellow
        navTrigger.classList.add("active");
        
        // Add active class to filter menu so menu can become visible
        navMenu.classList.add("active");
      }
    }
    function disactivateNav(){

      // If the menu is active
      if (navMenu.classList.contains('active')){

        // Remove active class from body so the page can scroll
        document.body.classList.remove("mobileMenuActive");

        // Remove active class from trigger button so text can turn white
        navTrigger.classList.remove("active");

        // Remove active class from filter menu so menu can hide
        navMenu.classList.remove("active");
      } 
    }

    navTrigger.addEventListener("click", activateNav);
    navClose.addEventListener("click", disactivateNav);
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

    var nav = $('#resource_nav');
    var navItem = $('#resource_nav .sub-nav-item');
    var list = $('#resource_list');
    var listItem = $('#resource_list .box-list');

    navItem.on('click', function(){
      var navItemText = $(this).html();

      if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        listItem.show();
      } else {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        listItem.hide();
        if(listItem.hasClass(navItemText)){
          $('.' + navItemText).show();
        }
      }
    });

    // var options = {
    //   valueNames: [ 'type' ]
    // };
    // var resourceList = new List('block-resources-grid', options);

    // $('.filter-type').on('click',function(){
    //   var $text = $(this).text();
    //   if($(this).hasClass( 'selected' )){
    //     resourceList.filter();
    //     $(this).removeClass('selected');
    //   } else {
    //     resourceList.filter(function(item) {
    //       return (item.values().type == $text);
    //     });
    //     $(this).addClass('selected');
    //   }
    // });
  },
  toolsFilterSort: function() {
    var options = {
      valueNames: [ 'name', 'tag' ]
    };
    
    var toolsList = new List('toolsList', options);
    var filterTag = document.getElementsByClassName('filter');
    var all = document.querySelector('[data-filter="All"]');
    
    function activateToolFiltering(){
      var q = this.getAttribute('data-filter');

      function removeFilters() {
        toolsList.filter();
      }
      function removeActiveClass() {
        [].forEach.call(filterTag, function(el) {
          el.classList.remove("active");
        });
      }
      function addActiveClassAll() {
        all.classList.add("active");
      }

      if(this.classList.contains('active')){
        removeFilters();
        removeActiveClass();
        addActiveClassAll();
      } 
      else if((this.getAttribute('data-filter') === 'All') && (!this.classList.contains('active'))){
        removeFilters();
        removeActiveClass();
        addActiveClassAll();
      } 
      else {
        toolsList.filter(function(item) {
          return (item.values().tag == q);
        });
        removeActiveClass();
        this.classList.add("active");
      }
    }

    for (var i = 0; i < filterTag.length; i++) {
      filterTag[i].addEventListener("click", activateToolFiltering);
    }
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
  },
  handleSignUpRedirect: function () {
    if (
      window.location.hash &&
      window.location.hash.indexOf("#invite_token=") === 0
    ) {
      const urlOrigin = window.location.origin;
      let producerSlug = "";

      netlifyIdentity.on("login", (user) => {
        switch (user.app_metadata.roles?.[0]) {
          case "Made by Porter":
            producerSlug = "/producers/madebyporter";
            break;
          case "Shadrack Romero":
            producerSlug = "/producers/hiimrack";
            break;
          case "Jaye Neutron":
            producerSlug = "producers/jayeneutron";
            break;
          case "Luke Tyler":
            producerSlug = "/producers/luketyler";
            break;
          default:
            producerSlug = "/";
        }

        netlifyIdentity.close();
        window.location.href = urlOrigin + producerSlug;
      });
    }
  },
  refreshJWTToken: function () {
    netlifyIdentity.on("login", () => {
      netlifyIdentity.refresh().then((jwt) => {});
    });
  },
};

document.addEventListener('DOMContentLoaded', function(){
  js.main.init();
});
