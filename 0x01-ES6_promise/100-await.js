import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo = null;
  let user = null;

  try {
    photo = await uploadPhoto();
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }

  try {
    user = await createUser();
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }

  return {
    photo,
    user,
  };
}
