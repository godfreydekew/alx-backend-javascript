import { uploadPhoto, createUser } from './utils';

export function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(result => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    })
    .catch(error => (error.log('Signup system offline')));
}
