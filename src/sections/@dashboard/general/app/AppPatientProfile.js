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
import GamesTab from 'src/pages/dashboard/game/Tab/GamesTab';
import GamesTabDetect from 'src/pages/dashboard/game/Tab/GamesTabDetect';
import GamesTabError from 'src/pages/dashboard/game/Tab/GamesTabError';
import GamesTabRTS from 'src/pages/dashboard/game/Tab/GamesTabRTS';
import GamesBiz from 'src/pages/dashboard/game/GamesBiz';
import GamesBizAnalytics from 'src/pages/dashboard/game/GamesBizAnalytics';
import GamesBizAttention from 'src/pages/dashboard/game/GamesBizAttention';
import GamesRoom from 'src/pages/dashboard/game/GamesRoom';
import GamesRoomAttention from 'src/pages/dashboard/game/GamesRoomAttention';
import GamesRoomAnalytics from 'src/pages/dashboard/game/GamesRoomAnalytics';
import GamesCard from 'src/pages/dashboard/game/GamesCard';
import GamesCardAttention from 'src/pages/dashboard/game/GamesCardAttention';
import GamesCardImpulsivity from 'src/pages/dashboard/game/GamesCardImpulsivity';
import GamesCardAnalytics from 'src/pages/dashboard/game/GamesCardAnalytics';
import GamesRacingImpulsivity from 'src/pages/dashboard/game/GamesRacingImpulsitivity';
import GamesRacingAttention from 'src/pages/dashboard/game/GamesRacingAttention';
import GamesRacingAnalytics from 'src/pages/dashboard/game/GamesRacingAnalytics';
import GamesRacing from 'src/pages/dashboard/game/GamesRacing';

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
  const { currentTab, onChangeTab } = useTabs('종합 평가');
  const [currentPage, setCurrentPage] = useState([]);

  const GAMES_TABS = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <GamesTab />,
    },
    {
      value: 'Detectability',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesTabDetect />,
    },
    {
      value: 'Error Type',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <GamesTabError />,
    },

    {
      value: 'Reaction Time Statistics',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesTabRTS />,
    },
  ];

  const GAMES_BIZ = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <GamesBiz />,
    },

    {
      value: '점수 분석',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <GamesBizAnalytics />,
    },
    {
      value: '주의력 평가',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesBizAttention />,
      // component: <ProfileFollowers followers={_userFollowers} />,
    },
  ];

  const GAMES_ROOM = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <GamesRoom />,
    },
    {
      value: '점수 분석',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <GamesRoomAnalytics />,
      // component: <ProfileFriends friends={_userFriends} findFriends={findFriends} onFindFriends={handleFindFriends} />,
    },
    {
      value: '주의력 평가',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesRoomAttention />,
      // component: <ProfileFollowers followers={_userFollowers} />,
    },
  ];
  const GAMES_CARD = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <GamesCard />,
    },
    {
      value: '점수 분석',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <GamesCardAnalytics />,
    },
    {
      value: '주의력 평가',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesCardAttention />,
    },
    {
      value: '인지적 충동성 평가',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesCardImpulsivity />,
    },
  ];

  const GAMES_RACING = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <GamesRacing />,
    },
    {
      value: '점수 분석',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <GamesRacingAnalytics />,
    },
    {
      value: '주의력 평가',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesRacingAttention />,
    },
    {
      value: '인지적 충동성 평가',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <GamesRacingImpulsivity />,
    },
  ];
  const path = window.location.pathname;
  useEffect(() => {
    if (path === '/dashboard/tab') {
      setCurrentPage(GAMES_TABS);
    } else if (path === '/dashboard/biz') {
      setCurrentPage(GAMES_BIZ);
    } else if (path === '/dashboard/room') {
      setCurrentPage(GAMES_ROOM);
    } else if (path === '/dashboard/card') {
      setCurrentPage(GAMES_CARD);
    } else if (path === '/dashboard/racing') {
      setCurrentPage(GAMES_RACING);
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
