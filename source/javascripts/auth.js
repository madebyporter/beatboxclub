const LOGIN_TEXT = "Log into Library";
const LOGOUT_TEXT = "Logout Library";

(handleAuth = () => {
  netlifyIdentity.init();
  const button = document.querySelector(".user-auth-button");
  if (!button) return;

  const initialUser = netlifyIdentity.currentUser();

  let userRole = initialUser ? initialUser.app_metadata.roles[0] : "";

  const buttonText = button.children[0];
  buttonText.innerText =
    initialUser && userRole === currentProducer ? LOGOUT_TEXT : LOGIN_TEXT;

  button.addEventListener("click", () => {
    const user = netlifyIdentity.currentUser();

    if (user && userRole === currentProducer) {
      netlifyIdentity.logout();
    } else {
      netlifyIdentity.open();
    }
  });

  netlifyIdentity.on("login", (u) => {
    userRole = u.app_metadata.roles[0];
    if (userRole === currentProducer) buttonText.innerText = LOGOUT_TEXT;
    netlifyIdentity.close();
  });
  netlifyIdentity.on("logout", () => {
    buttonText.innerText = LOGIN_TEXT;
  });
})();
