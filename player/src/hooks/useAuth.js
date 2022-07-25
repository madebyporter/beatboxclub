import { useEffect, useState } from "react";

const useAuth = (netlifyIdentity) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(netlifyIdentity.currentUser());

    netlifyIdentity.on("login", (u) => setUser(u));
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  return user;
};

export default useAuth;
