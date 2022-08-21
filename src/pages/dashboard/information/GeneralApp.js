// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack, Card } from '@mui/material';

// component
import AppCurrentDownload from 'src/sections/@dashboard/general/app/AppCurrentDownload';
import AppWidget from 'src/sections/@dashboard/general/app/AppWidget';
import AnalyticsWebsiteVisits from 'src/sections/@dashboard/general/analytics/AnalyticsWebsiteVisits';
// import BookingCheckInWidgets from 'src/sections/@dashboard/general/booking/BookingCheckInWidgets';
import BankingWidgetSummary from 'src/sections/@dashboard/general/banking/BankingWidgetSummary';
import AnalyticsCurrentSubject from 'src/sections/@dashboard/general/analytics/AnalyticsCurrentSubject';
import RadialBar from 'src/sections/@dashboard/general/banking/RadialBar';
// import AppPatientProfile from 'src/sections/@dashboard/general/app/AppPatientProfile';
// mock
import { _appFeatured } from '../../../_mock';

import Page from '../../../components/Page';

// sections
import AppWelcome from '../../../sections/@dashboard/general/app/AppWelcome';
import AppFeatured from '../../../sections/@dashboard/general/app/AppFeatured';
import AppWidgetSummary from '../../../sections/@dashboard/general/app/AppWidgetSummary';
// assets
import { SeoIllustration } from '../../../assets';

export default function GeneralApp() {
  const theme = useTheme();

  return (
    <Page title="patient | Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome
              title="Patient Profile"
              img={
                <RadialBar
                  chartData={[
                    {
                      data: [76],
                    },
                  ]}
                />
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppFeatured list={_appFeatured} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="외래 방문 주기"
              text="최근 변경"
              date={1648956398369}
              total={2}
              totalText="주"
              chartColor={theme.palette.primary.main}
              chartData={20}
              innerDays="5"
              innerText="DAYS LEFT"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="약물 처방 일수"
              text="최근 변경"
              date={1648956398369}
              total={10}
              totalText="주"
              chartColor={theme.palette.primary.main}
              chartData={40}
              innerDays="4"
              innerText="WEEKS LEFT"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="AttnKare-T 처방일수"
              text="최근 변경"
              date={1648956398369}
              total={15}
              totalText="주"
              chartColor={theme.palette.primary.main}
              chartData={55}
              innerDays="7"
              innerText="WEEKS LEFT"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload
              title="수행중인 치료"
              chartColors={[theme.palette.primary.light, theme.palette.primary.main, theme.palette.primary.dark]}
              chartData={[
                { label: '약물치료', value: 45 },
                { label: '인지행동치료', value: 20 },
                { label: '부모교육', value: 5 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsWebsiteVisits
              title="AttnKare-T Tracking"
              subheader="(+4%) than last week"
              chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
              chartData={[
                {
                  name: '주별 수행량',
                  type: 'column',
                  fill: 'solid',
                  data: [120, 102, 100, 78, 85, 100, 100, 110],
                },

                {
                  name: '주별 권장량',
                  type: 'line',
                  fill: 'solid',
                  data: [100, 100, 100, 100, 100, 100, 100, 100],
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <AnalyticsCurrentSubject
              title="AttnKare-D 진단 결과"
              chartLabels={['집중력', '작업기억력', '실행기능', '행동조절', '사회성', '충동성']}
              chartData={[
                { name: '2022.04.05', data: [44, 76, 78, 13, 43, 10] },
                { name: '2022.08.16', data: [80, 100, 80, 40, 50, 20] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
              <AppWidget title="Applications" total={55566} icon={'eva:email-fill'} color="warning" chartData={75} />
            </Stack>
          </Grid>
*/}
        </Grid>
      </Container>
    </Page>
  );
}
