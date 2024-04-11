import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // first promise
  const signUpPromise = await signUpUser(firstName, lastName)
    .then((response) => ({
      status: 'fulfilled',
      value: response,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));
  // second promise
  const uploadPromise = await uploadPhoto(fileName)
    .then((response) => ({
      status: 'fulfilled',
      value: response,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));

  return [signUpPromise, uploadPromise];
}
