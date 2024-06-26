import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      const res = [];
      result.forEach((element) => {
        res.push({
          status: element.status,
          body: element.value,
        });
        return res;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
