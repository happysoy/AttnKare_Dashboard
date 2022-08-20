import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// utils
import cssStyles from '../../../../utils/cssStyles';
// hooks
// import useAuth from '../../../../hooks/useAuth';
// components
import MyAvatar from '../../../../components/MyAvatar';
import Image from '../../../../components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  '&:before': {
    ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  marginTop: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    left: theme.spacing(3),
    bottom: theme.spacing(13.5),
  },
}));

const DetailStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  display: 'none',
  color: 'white',
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    left: theme.spacing(19),
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

ProfileCover.propTypes = {
  myProfile: PropTypes.object,
};

export default function ProfileCover({ myProfile }) {
  // const { user } = useAuth();

  const { position, cover } = myProfile;

  return (
    <RootStyle>
      <InfoStyle>
        <MyAvatar
          sx={{
            mx: 'auto',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'common.white',
            width: { xs: 80, md: 100 },
            height: { xs: 80, md: 100 },
          }}
        />
        <Box
          sx={{
            ml: { md: 3 },
            mt: { xs: 1, md: -5 },
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h4">오세훈</Typography>
          <Typography sx={{ opacity: 0.8 }}>{position}</Typography>
        </Box>
      </InfoStyle>
      <DetailStyle>
        <Box sx={{ wordBreak: 'break-all' }}>
          <Typography variant="h6">지능</Typography>
          <Typography sx={{ opacity: 0.8 }}>98</Typography>
        </Box>
        <Box sx={{ marginLeft: '50px' }}>
          <Typography variant="h6">작업기억력</Typography>
          <Typography sx={{ opacity: 0.8 }}>평균 하</Typography>
        </Box>
        <Box sx={{ marginLeft: '50px' }}>
          <Typography variant="h6">공존질환 / 읽기 장애</Typography>
          <Typography sx={{ opacity: 0.8 }}>틱 장애 / 무</Typography>
        </Box>
        <Box sx={{ marginLeft: '50px' }}>
          <Typography variant="h6">ADHD</Typography>
          <Typography sx={{ opacity: 0.8 }}>충돌우세형</Typography>
        </Box>
        <Box sx={{ marginLeft: '50px' }}>
          <Typography variant="h6">Response Style</Typography>
          <Typography sx={{ opacity: 0.8 }}>liberal style</Typography>
        </Box>
      </DetailStyle>
      <Image alt="profile cover" src={cover} sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
    </RootStyle>
  );
}
