// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack, Card } from '@mui/material';

// component
import AppCurrentDownload from 'src/sections/@dashboard/general/app/AppCurrentDownload';
import AppWidget from 'src/sections/@dashboard/general/app/AppWidget';
import AnalyticsWebsiteVisits from 'src/sections/@dashboard/general/analytics/AnalyticsWebsiteVisits';
// import BookingCheckInWidgets from 'src/sections/@dashboard/general/booking/BookingCheckInWidgets';
import BankingWidgetSummary from 'src/sections/@dashboard/general/banking/BankingWidgetSummary';
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
              chartLabels={[
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
              ]}
              chartData={[
                {
                  name: '주별 완료 일수',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 23, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },

                {
                  name: '주별 처방 일수',
                  type: 'line',
                  fill: 'solid',
                  data: [25, 25, 25, 25, 25, 35, 35, 35, 35, 40, 40],
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
              <AppWidget title="Applications" total={55566} icon={'eva:email-fill'} color="warning" chartData={75} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <AppWelcome
              title={`백시안 아동`}
              description="Lorem ipsum dolor sit amet, A Sed hendrerit ultricies arcu, sed tristique tortor volutpat at. Proin et justo congue, maximus nunc eget, ultricies metus. Donec sed libero quis nunc lobortis viverra id sed quam. Nullam purus lorem, consequat nec dictum at, pulvinar ac erat. Nulla eget sodales metus. Nunc lectus tortor, imperdiet vel purus in, porttitor pellentesque massa."
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">자세히 보기</Button>}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured list={_appFeatured} />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
