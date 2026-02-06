export const signInMock = async (email: string, password: string) => {
  if (email === "demo@demo.com" && password === "12345") {
    return true;
  } else {
    return false;
  }
};
