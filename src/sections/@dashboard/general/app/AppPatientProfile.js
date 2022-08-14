import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Tab, Box, Card, Tabs, Container } from '@mui/material';

// utils
// components
import { _userAbout } from 'src/_mock';
import Iconify from 'src/components/Iconify';
//  hooks
import useTabs from 'src/hooks/useTabs';
// components
import Page from 'src/components/Page';
import GamesTab from 'src/pages/dashboard/GamesTab';
import GamesTabAttention from 'src/pages/dashboard/GamesTabAttention';
import GamesTabAnalytics from 'src/pages/dashboard/GamesTabAnalytics';
import ProfileCover from '../../user/profile/ProfileCover';
import Profile from '../../user/profile/Profile';
// import Iconify from '../../../components/Iconify';
const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));

export default function AppPatientProfile() {
  const { currentTab, onChangeTab } = useTabs('종합 점수');
  const [currentPage, setCurrentPage] = useState([]);

  const GAMES_TABS = [
    {
      value: '종합 점수',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <GamesTab />,
    },
    {
      value: '주의력 평가',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesTabAttention />,
      // component: <ProfileFollowers followers={_userFollowers} />,
    },
    {
      value: '점수 분석',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <GamesTabAnalytics />,
      // component: <ProfileFriends friends={_userFriends} findFriends={findFriends} onFindFriends={handleFindFriends} />,
    },
    {
      value: 'gallery',
      icon: <Iconify icon={'ic:round-perm-media'} width={20} height={20} />,
      // component: <ProfileGallery gallery={_userGallery} />,
    },
  ];

  const GAMES_BIZ = [
    {
      value: '종합 점수',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <GamesTab />,
    },
    {
      value: '주의력 평가',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesTabAttention />,
      // component: <ProfileFollowers followers={_userFollowers} />,
    },
    {
      value: '점수 분석',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <GamesTabAnalytics />,
      // component: <ProfileFriends friends={_userFriends} findFriends={findFriends} onFindFriends={handleFindFriends} />,
    },
    {
      value: 'gallery',
      icon: <Iconify icon={'ic:round-perm-media'} width={20} height={20} />,
      // component: <ProfileGallery gallery={_userGallery} />,
    },
  ];

  const path = window.location.pathname;
  useEffect(() => {
    if (path === '/dashboard/tab') {
      setCurrentPage(GAMES_TABS);
    } else if (path === '/dashboard/biz') {
      setCurrentPage(GAMES_BIZ);
    }
  }, [path]);

  return (
    <Page title="User: Profile">
      <Container maxWidth={'lg'}>
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative',
          }}
        >
          <ProfileCover myProfile={_userAbout} />

          <TabsWrapperStyle>
            <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={currentTab}
              onChange={onChangeTab}
            >
              {currentPage.map((tab) => (
                <Tab disableRipple key={tab.value} value={tab.value} icon={tab.icon} label={tab.value} />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>
        {currentPage.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
