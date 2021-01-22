const headerSessionKey = "woocommerce-session";
const storageSessionKey = "woo-session";

export const identifySession = (response) => {
  if (typeof window === "undefined") {
    return;
  }
  // get the session
  const session = response.headers.get(headerSessionKey);
  if (session) {
    if (window.localStorage.getItem(storageSessionKey) !== session) {
      window.localStorage.setItem(storageSessionKey, session);
    }
  }
};

export const setHeaderSession = (headers) => {
  if (typeof window !== "undefined") {
    const session = localStorage.getItem(storageSessionKey);
    headers[headerSessionKey] = `Session ${session}`;
  }
};
