// components
import Iconify from '../components/Iconify';
//
import _mock from './_mock';

// ----------------------------------------------------------------------

export const _analyticPost = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  description: _mock.text.description(index),
  image: _mock.image.cover(index),
  postedAt: _mock.time(index),
}));

export const _analyticOrderTimeline = [...Array(7)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    '게임 완료 7분 18초 ',
    '게임 중도 포기',
    '게임 완료',
    '게임 일시 정지 - 게임완료',
    '게임 중도 포기',
    '게임 중도 포기',
    '게임 중도 포기',
  ][index],
  type: `order${index + 1}`,
  time: _mock.time(index),
}));

export const _analyticTraffic = [
  {
    name: 'FaceBook',
    value: 323234,
    icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} height={32} />,
  },
  {
    name: 'Google',
    value: 341212,
    icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} height={32} />,
  },
  {
    name: 'Linkedin',
    value: 411213,
    icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} height={32} />,
  },
  {
    name: 'Twitter',
    value: 443232,
    icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} height={32} />,
  },
];
