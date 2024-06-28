import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const prom = await Promise.allSettled([uploadPhoto(), createUser()]);

  return {
    photo: prom[0].status === 'fulfilled' ? prom[0].value : null,
    user: prom[1].status === 'fulfilled' ? prom[1].value : null,
  };
}
