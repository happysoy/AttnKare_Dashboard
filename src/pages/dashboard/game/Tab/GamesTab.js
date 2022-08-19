// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

// component
import AppCurrentDownload from 'src/sections/@dashboard/general/app/AppCurrentDownload';
import AppWidget from 'src/sections/@dashboard/general/app/AppWidget';
import AnalyticsWebsiteVisits from 'src/sections/@dashboard/general/analytics/AnalyticsWebsiteVisits';
import TabCommissionsLog from 'src/sections/@dashboard/general/banking/TabCommissionsLog';
import TabOmissionsLog from 'src/sections/@dashboard/general/banking/TabOmissionsLog';
// import BookingCheckInWidgets from 'src/sections/@dashboard/general/booking/BookingCheckInWidgets';
import BankingWidgetSummary from 'src/sections/@dashboard/general/banking/BankingWidgetSummary';
import AppPatientProfile from 'src/sections/@dashboard/general/app/AppPatientProfile';
import AppAreaInstalled from 'src/sections/@dashboard/general/app/AppAreaInstalled';
import EcommerceYearlySales from 'src/sections/@dashboard/general/e-commerce/EcommerceYearlySales';
import AnalyticsCurrentVisits from 'src/sections/@dashboard/general/analytics/AnalyticsCurrentVisit';
import CompareLastVisit from 'src/sections/@dashboard/general/banking/CompareLastVisit';
import AnalyticsNewsUpdate from 'src/sections/@dashboard/general/analytics/AnalyticsNewsUpdate';
import AnalyticsOrderTimeline from 'src/sections/@dashboard/general/analytics/AnalyticsOrderTimeline';

// mock
import { _appFeatured, _analyticPost, _analyticOrderTimeline } from '../../../../_mock';

import Page from '../../../../components/Page';

// sections
import AppWelcome from '../../../../sections/@dashboard/general/app/AppWelcome';
import AppFeatured from '../../../../sections/@dashboard/general/app/AppFeatured';
import AppWidgetSummary from '../../../../sections/@dashboard/general/app/AppWidgetSummary';
// assets
import { SeoIllustration } from '../../../../assets';

export default function GamesTab() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={3} md={6} lg={6}>
        <CompareLastVisit
          title="Error Type"
          // subheader="(+4%)  than last week"
          chartLabels={['Commissions Error', 'Omissions Error']}
          chartData={[
            {
              year: '주간',
              data: [
                { name: 'Commissions Error', data: [-0.8, -0.8, -1.05, -1.06, -1.18, -1.4, -2, -2.2] },
                { name: 'Omissions Error', data: [0.5, 0.4, 0.65, 0.76, 0.88, 1.5, 1.6, 2.0] },
              ],
            },
          ]}
        />
      </Grid>
      <Grid item xs={3} md={6} lg={6}>
        <h1>정규분포표</h1>
      </Grid>
      <Grid item xs={3} md={6} lg={6}>
        <TabCommissionsLog title="Commission Error Interpretation" />
      </Grid>
      <Grid item xs={3} md={6} lg={6}>
        <TabOmissionsLog title="Omissions Error Interpretation" />
      </Grid>
      {/* <Grid item xs={12} md={6} lg={4}> */}
      {/* <AnalyticsOrderTimeline title="탭 게임 접속 기록" list={_analyticOrderTimeline} /> */}
      {/* </Grid> */}
      {/* <Grid item xs={12} md={6} lg={6}>
        <AnalyticsNewsUpdate title="오경보 기록" list={_analyticPost} />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <AnalyticsNewsUpdate title="누락 기록" list={_analyticPost} />
      </Grid> */}
    </Grid>
  );
}
