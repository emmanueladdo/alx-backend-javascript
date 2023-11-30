import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    console.error('Error:', error.message);
    return {
      photo: null,
      user: null,
    };
  }
}
