const ACCESS_TOKEN = "AT";

export const tokenService = {
  save(accessToken: string) {
    globalThis?.localStorage?.setItem(ACCESS_TOKEN, accessToken);
  },
  get() {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  delete() {
    globalThis?.localStorage?.removeItem(ACCESS_TOKEN);
  },
};
