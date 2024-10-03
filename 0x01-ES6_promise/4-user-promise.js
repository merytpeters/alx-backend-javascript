export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    status: 200,
    body: {
      firstName,
      lastName,
    },
  });
}
