// _mock
import _mock from './_mock';

// ----------------------------------------------------------------------

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
