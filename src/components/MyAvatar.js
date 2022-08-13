// hooks
// import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const linkSrc =
    'https://images.chosun.com/resizer/vBnSglqrK2ria7qsfPzPj_B2D3w=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/EYPCZ462L7PLLZQFDPZTHKEK34.jpg';
  // const { user } = useAuth();
  // https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2
  return (
    <Avatar src={linkSrc} alt={'환자사진'} color={'default'} {...other}>
      {/* {createAvatar(user?.displayName).name} */}
    </Avatar>
  );
}
