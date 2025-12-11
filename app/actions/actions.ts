export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (password !== "1234") {
    return { message: "password is not correct" };
  }

  return { message: "Login Successful", data: { email, password } };
}

export async function signup(formData: FormData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const usertype = formData.get("userType");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (confirmPassword !== password) {
    return { message: "Passwords do not match" };
  }

  return { message: "Signup successful", data: { fullName, email, usertype } };
}

export async function filterGigs(formData: FormData) {
  const filter = formData.get("filter");
  return filter;
}
