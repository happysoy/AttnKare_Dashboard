// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import PatientAvatar from 'src/components/PatientAvatar';
// utils
import cssStyles from 'src/utils/cssStyles';

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

export default function ProfileCover() {
  return (
    <RootStyle>
      <InfoStyle>
        <PatientAvatar
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
          <Typography variant="h4">백시안</Typography>
          <Typography sx={{ opacity: 0.8 }}>7세 남</Typography>
        </Box>
      </InfoStyle>
      <DetailStyle>
        <Box sx={{ wordBreak: 'break-all' }}>
          <Typography variant="h6">전체 지능</Typography>
          <Typography sx={{ opacity: 0.8 }}>평균 하</Typography>
        </Box>
        <Box sx={{ marginLeft: '50px' }}>
          <Typography variant="h6">작업기억</Typography>
          <Typography sx={{ opacity: 0.8 }}>경계선</Typography>
        </Box>
        <Box sx={{ marginLeft: '50px' }}>
          <Typography variant="h6">처리속도</Typography>
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
    </RootStyle>
  );
}
