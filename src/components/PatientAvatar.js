// hooks
// import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';
import profile from './child.png';
// ----------------------------------------------------------------------

export default function PatientAvatar({ ...other }) {
  // const { user } = useAuth();
  // https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2
  return (
    <Avatar src={profile} alt="아동사진" color={'default'} {...other}>
      {/* {createAvatar(user?.displayName).name} */}
    </Avatar>
  );
}
