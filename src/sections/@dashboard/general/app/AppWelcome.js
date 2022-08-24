// @mui
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Card, CardContent, Box } from '@mui/material';
import Label from 'src/components/Label';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: ' #F4F6F8',
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

AppWelcome.propTypes = {
  action: PropTypes.node,
  description: PropTypes.string,
  img: PropTypes.node,
  title: PropTypes.string,
};

export default function AppWelcome({ title, description, action, img, ...other }) {
  const theme = useTheme();
  return (
    <RootStyle {...other}>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: 'grey.800',
        }}
      >
        <Typography gutterBottom variant="h4" sx={{ mt: 3, mb: 1, whiteSpace: 'pre-line' }}>
          {title}
        </Typography>
        <Box sx={{ pb: { xs: 3 }, mx: 'auto' }}>
          <Typography variant="overline" display="block" sx={{ mt: 1, mb: 0.5 }}>
            진단명
          </Typography>
          <Label sx={{ mr: 1 }}>Attention-Deficit/Hyperactivity Disorder</Label>
          <Label sx={{ mt: 0.5 }}>Provisional Tic Disorder</Label>
          <Box sx={{ mt: 2 }}>
            <Typography variant="overline" display="block" sx={{ mb: 0.5 }}>
              가족력
            </Typography>
            <Label>부 / Chronic Motor Tic Disorder</Label>
          </Box>
          <Box sx={{ mt: 2 }} display="inline-block">
            <Typography variant="overline" display="block" sx={{ mb: 0.5 }}>
              전체지능
            </Typography>
            <Label color="warning">평균 하</Label>
          </Box>
          <Box sx={{ mt: 1, ml: 3 }} display="inline-block">
            <Typography variant="overline" display="block" sx={{ mb: 0.5 }}>
              언어이해
            </Typography>
            <Label color="success">평균</Label>
          </Box>
          <Box sx={{ mt: 1, ml: 3 }} display="inline-block">
            <Typography variant="overline" display="block" sx={{ mb: 0.5 }}>
              시공간
            </Typography>
            <Label color="success">평균</Label>
          </Box>
          <Box sx={{ mt: 1, ml: 3 }} display="inline-block">
            <Typography variant="overline" display="block" sx={{ mb: 0.5 }}>
              유동추론
            </Typography>
            <Label color="primary">평균 상</Label>
          </Box>
          <Box sx={{ mt: 1, ml: 3 }} display="inline-block">
            <Typography variant="overline" display="block" sx={{ mb: 0.5 }}>
              작업기억
            </Typography>
            <Label color="error">경계선</Label>
          </Box>
          <Box sx={{ mt: 1, ml: 3 }} display="inline-block">
            <Typography variant="overline" display="block" sx={{ mb: 0.5 }}>
              처리속도
            </Typography>
            <Label color="warning">평균 하</Label>
          </Box>
        </Box>
        {action && action}
      </CardContent>

      {img && img}
    </RootStyle>
  );
}
