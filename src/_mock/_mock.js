import { sub } from 'date-fns';
//
import { fullName } from './name';

const _mock = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  time: (index) => sub(new Date(), { days: index, hours: index }),
  name: {
    fullName: (index) => fullName[index],
  },

  image: {
    cover: () =>
      `https://img.freepik.com/free-photo/beautiful-sea-and-ocean-with-cloud-on-blue-sky_74190-6828.jpg?w=996&t=st=1660235503~exp=1660236103~hmac=10e1e3b35e75f280b6d52f70ec16fe779a169a02f97e1f4d346fe5870c347f10`,
  },
};

export default _mock;
