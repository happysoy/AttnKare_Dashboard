import Avatar from './Avatar';
import profile from '../_mock/img/profile.jpg';

export default function MyAvatar({ ...other }) {
  return <Avatar src={profile} alt="의사사진" color={'default'} {...other} />;
}
