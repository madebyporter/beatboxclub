var js = js || {},
  body = document.getElementsByTagName('body')[0];

// Scripts
js.main = {
  init: function () {
    // this.modal();
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
