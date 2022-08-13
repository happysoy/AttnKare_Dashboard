import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Tab, Box, Card, Tabs, Container } from '@mui/material';
// utils
// components
import { _userAbout } from 'src/_mock';
import ProfileCover from '../../user/profile/ProfileCover';

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));

export default function AppPatientProfile({ title, subheader, ...other }) {
  return (
    <Card
      sx={{
        mb: 3,
        height: 280,
        position: 'relative',
      }}
    >
      <ProfileCover myProfile={_userAbout} />
      {/* 
      <TabsWrapperStyle>
        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
          value={currentTab}
          onChange={onChangeTab}
        ></Tabs>
      </TabsWrapperStyle> */}
    </Card>
  );
}
