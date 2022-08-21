import { noCase } from 'change-case';
// _mock
import _mock from './_mock';
import { randomNumberRange, randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _appRelated = ['Chrome', 'Drive', 'Dropbox', 'Evernote', 'Github'].map((appName, index) => ({
  id: _mock.id(index),
  name: appName,
  system: (index === 2 && 'Windows') || (index === 4 && 'Windows') || 'Mac',
  price: index === 0 || index === 2 || index === 4 ? 0 : _mock.number.price(index),
  rating: _mock.number.rating(index),
  review: randomNumberRange(999, 99999),
  shortcut: `https://minimal-assets-api-dev.vercel.app/assets/icons/ic_${noCase(appName)}.svg`,
}));

export const _appInstalled = ['de', 'en', 'fr', 'kr', 'us'].map((country, index) => ({
  id: _mock.id(index),
  name: ['Germany', 'England', 'France', 'Korean', 'USA'][index],
  android: randomNumberRange(999, 99999),
  windows: randomNumberRange(999, 99999),
  apple: randomNumberRange(999, 99999),
  flag: `/assets/icons/flags/ic_flag_${country}.svg`,
}));

export const _appAuthors = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  avatar: _mock.image.avatar(index),
  favourite: randomNumberRange(9999, 19999),
}));

export const _appInvoices = [...Array(5)].map((_, index) => ({
  id: `${Date.now() + index}`,
  price: _mock.number.price(index),
  category: randomInArray(['Android', 'Mac', 'Windows']),
  status: randomInArray(['paid', 'out_of_date', 'in_progress']),
}));

export const _appFeatured = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  title: ['아이랑 마트가서 시식코너 돌았네요', '오늘은 한강으로 피크닉 왔습니다', '오랜만에 영화관 다녀왔어요'][index],
  description: [
    '장난감 사달라고 조르지도 않았답니다. 게임의 효과인가요!',
    '아침부터 같이 도시락도 싸서 출발했습니다. 좋은 시간 보내고 왔어요',
    '조용하게 영화 관람을 하는 아이의 모습을 보니 AttnKare-T 시작하길 잘했다는 생각이 드네요^^',
  ][index],
  image: [
    'http://sports.hankooki.com/news/photo/201506/img_5656699_0.jpg',
    'https://cphoto.asiae.co.kr/listimglink/6/2014120806493088240_1.jpg',
    'https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTVfOTAg/MDAxNjEzMzI4OTk4NDQ1.M3iRdQuAlcUAH0r5CcFmqH8PwA6EnH103U5_blo-0bMg.ORCD8_tNgRYIn5VCmrJCWoe5VLYKrlj3WFk-qxWNricg.JPEG.ugdtejg/EuMdDiDXcA8MjmZ.jpeg?type=w800',
  ][index],
}));
