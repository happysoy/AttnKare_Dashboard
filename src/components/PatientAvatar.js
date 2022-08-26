// hooks
// import useAuth from '../hooks/useAuth';
// utils
//
import Avatar from './Avatar';
import profile from '../_mock/img/child.png';
// ----------------------------------------------------------------------

export default function PatientAvatar({ ...other }) {
  return <Avatar src={profile} alt="아동사진" color={'default'} {...other} />;
}
