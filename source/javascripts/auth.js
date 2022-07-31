const LOGIN_TEXT = "Log into Library";
const LOGOUT_TEXT = "Logout Library";

(handleAuth = () => {
  netlifyIdentity.init();
  netlifyIdentity.gotrue.setCookie = true;

  const button = document.querySelector(".user-auth-button");
  const btnReq = document.querySelector(".request-access-button");
  if (!button) return;

  const initialUser = netlifyIdentity.currentUser();

  let userRole = initialUser?.app_metadata?.roles?.[0] ?? "";

  const buttonText = button.children[0];

  if (initialUser) {
    if (userRole === currentProducer) {
      buttonText.innerText = LOGOUT_TEXT;
    }
    else {
      button.style.display = "none";
    }
  } else {
    buttonText.innerText = LOGIN_TEXT;
    button.style.display = "flex";
  }

  button.addEventListener("click", () => {
    const user = netlifyIdentity.currentUser();
    if (user && userRole === currentProducer) {
      netlifyIdentity.logout();
    } else {
      netlifyIdentity.open();
    }
  });

  netlifyIdentity.on("login", (u) => {
    userRole = u.app_metadata.roles?.[0];
    if (userRole === currentProducer) {
      buttonText.innerText = LOGOUT_TEXT;
      btnReq.style.display = "none";
    }
    else {
      button.style.display = "none";
    }
    netlifyIdentity.close();
  });
  netlifyIdentity.on("logout", () => {
    buttonText.innerText = LOGIN_TEXT;
    button.style.display = "flex";
    btnReq.style.display = "flex";
  });
})();
