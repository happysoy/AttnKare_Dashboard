// components
import Iconify from '../components/Iconify';
//
import _mock from './_mock';

// ----------------------------------------------------------------------

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
