import { useEffect, useState } from 'react';
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
      icon: <Iconify icon={'ant-design:line-chart-outlined'} width={20} height={20} />,
      component: <GamesTab />,
    },

    {
      value: 'Error Type',
      icon: <Iconify icon={'bx:message-alt-error'} width={20} height={20} />,
      component: <GamesTabError />,
    },

    {
      value: 'Reaction Time Statistics',
      icon: <Iconify icon={'arcticons:reactiontraining'} width={25} height={25} />,
      component: <GamesTabRTS />,
    },
  ];

  const GAMES_BIZ = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ant-design:line-chart-outlined'} width={20} height={20} />,
      component: <GamesTab />,
    },

    {
      value: 'Error Type',
      icon: <Iconify icon={'bx:message-alt-error'} width={20} height={20} />,
      component: <GamesTabError />,
    },

    {
      value: 'Reaction Time Statistics',
      icon: <Iconify icon={'arcticons:reactiontraining'} width={25} height={25} />,
      component: <GamesTabRTS />,
    },
  ];

  const GAMES_ROOM = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ant-design:line-chart-outlined'} width={20} height={20} />,
      component: <GamesTab />,
    },

    {
      value: 'Error Type',
      icon: <Iconify icon={'bx:message-alt-error'} width={20} height={20} />,
      component: <GamesTabError />,
    },

    {
      value: 'Reaction Time Statistics',
      icon: <Iconify icon={'arcticons:reactiontraining'} width={25} height={25} />,
      component: <GamesTabRTS />,
    },
  ];
  const GAMES_CARD = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ant-design:line-chart-outlined'} width={20} height={20} />,
      component: <GamesTab />,
    },

    {
      value: 'Error Type',
      icon: <Iconify icon={'bx:message-alt-error'} width={20} height={20} />,
      component: <GamesTabError />,
    },

    {
      value: 'Reaction Time Statistics',
      icon: <Iconify icon={'arcticons:reactiontraining'} width={25} height={25} />,
      component: <GamesTabRTS />,
    },
  ];

  const GAMES_RACING = [
    {
      value: '종합 평가',
      icon: <Iconify icon={'ant-design:line-chart-outlined'} width={20} height={20} />,
      component: <GamesTab />,
    },

    {
      value: 'Error Type',
      icon: <Iconify icon={'bx:message-alt-error'} width={20} height={20} />,
      component: <GamesTabError />,
    },

    {
      value: 'Reaction Time Statistics',
      icon: <Iconify icon={'arcticons:reactiontraining'} width={25} height={25} />,
      component: <GamesTabRTS />,
    },
  ];
  const path = window.location.pathname;
  useEffect(() => {
    if (path === '/tab') {
      setCurrentPage(GAMES_TABS);
    } else if (path === '/biz') {
      setCurrentPage(GAMES_BIZ);
    } else if (path === '/room') {
      setCurrentPage(GAMES_ROOM);
    } else if (path === '/card') {
      setCurrentPage(GAMES_CARD);
    } else if (path === '/racing') {
      setCurrentPage(GAMES_RACING);
    }
  }, [path]);

  return (
    <Page title="Games | Tab">
      <Container maxWidth={'lg'}>
        <Card
          sx={{
            mb: 3,
            height: 250,
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
