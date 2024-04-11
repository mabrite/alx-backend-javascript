import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      const photoProfile = photo.body;
      const userName = `${user.firstName} ${user.lastName}`;
      const combination = `${photoProfile} ${userName}`;
      console.log(combination);
    }).catch(() => console.log('Signup system offline'));
}
