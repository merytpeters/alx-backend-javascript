export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    body: {
      firstName,
      lastName,
    },
  });
}
