const LOGIN_TEXT = "Log into Library";
const LOGOUT_TEXT = "Logout Library";

(function handleAuth () {
  netlifyIdentity.init();
  netlifyIdentity.gotrue.setCookie = true;

  const button = document.querySelector(".user-auth-button");
  if (!button) return;
  const buttonText = button.children[0];

  
  const initialUser = netlifyIdentity.currentUser();
  var userRole = initialUser.app_metadata.roles[0];


  if (initialUser) {
    if (userRole === currentProducer) buttonText.innerText = LOGOUT_TEXT;
    else button.style.display = "none";
  } else {
    buttonText.innerText = LOGIN_TEXT;
    button.style.display = "flex";
  }

  button.addEventListener("click", function() {
    const user = netlifyIdentity.currentUser();
    if (user && userRole === currentProducer) {
      netlifyIdentity.logout();
    } else {
      netlifyIdentity.open();
    }
  });

  netlifyIdentity.on("login", function(u) {
    userRole = u.app_metadata.roles[0];
    if (userRole === currentProducer) buttonText.innerText = LOGOUT_TEXT;
    else button.style.display = "none";
    netlifyIdentity.close();
  });
  netlifyIdentity.on("logout", function() {
    buttonText.innerText = LOGIN_TEXT;
    button.style.display = "flex";
  });
})();
