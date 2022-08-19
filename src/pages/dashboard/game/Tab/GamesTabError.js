// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack, Typography } from '@mui/material';

// component
import AppCurrentDownload from 'src/sections/@dashboard/general/app/AppCurrentDownload';
import AppWidget from 'src/sections/@dashboard/general/app/AppWidget';
import AnalyticsWebsiteVisits from 'src/sections/@dashboard/general/analytics/AnalyticsWebsiteVisits';
import TabCommissionsLog from 'src/sections/@dashboard/general/banking/TabCommissionsLog';
import TabOmissionsLog from 'src/sections/@dashboard/general/banking/TabOmissionsLog';
import TabPerseverationsLog from 'src/sections/@dashboard/general/banking/TabPerseverationsLog';
// import BookingCheckInWidgets from 'src/sections/@dashboard/general/booking/BookingCheckInWidgets';
import BankingExpensesCategories from 'src/sections/@dashboard/general/banking/BakingExpensesCategories';
// mock
import { _appFeatured, _analyticPost, _analyticOrderTimeline } from '../../../../_mock';

import Page from '../../../../components/Page';

// sections
import AppWidgetSummary from '../../../../sections/@dashboard/general/app/AppWidgetSummary';
import AppWelcome from '../../../../sections/@dashboard/general/app/AppWelcome';
import AppFeatured from '../../../../sections/@dashboard/general/app/AppFeatured';
// assets
import { SeoIllustration } from '../../../../assets';

export default function GamesTabError() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {/* <Grid item xs={12} md={4}>
        <AppWidgetSummary
          title="누락 오류"
          percent={-2.6}
          total={'High Average'}
          chartColor={theme.palette.primary.main}
          chartData={[1, 2, 3, 4, 5, 4, 3, 2, 1]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <AppWidgetSummary
          title="오경보 오류"
          percent={-0.2}
          total={'High Average'}
          chartColor={theme.palette.chart.blue[0]}
          chartData={[0, 0, 1, 3, 5, 12, 15, 12, 5, 3, 1, 0, 0]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <AppWidgetSummary
          title="보속 반응"
          percent={0.1}
          total={'Very Elevated'}
          chartColor={theme.palette.chart.red[0]}
          chartData={[1, 2, 3, 4, 5, 4, 3, 2, 1]}
        />
      </Grid> */}
      <Grid item xs={12} md={12}>
        <BankingExpensesCategories
          title="지난 주 Error Type"
          chartData={[
            { label: '누락 오류', value: 72, desc: 'Very Elevated', percent: -2.6 },
            { label: '오경보 오류', value: 63, desc: 'High Average', percent: -1 },
            { label: '보속 반응', value: 45, desc: 'Average', percent: 0.1 },
          ]}
          chartColors={[theme.palette.chart.red[0], theme.palette.chart.blue[0], theme.palette.chart.green[0]]}
        />
      </Grid>

      <Grid item xs={4} md={6} lg={6}>
        <TabCommissionsLog title="Commission Error Interpretation" />
      </Grid>
      <Grid item xs={4} md={6} lg={6}>
        <TabOmissionsLog title="Omissions Error Interpretation" />
      </Grid>
      <Grid item xs={4} md={6} lg={6}>
        <TabPerseverationsLog title="Perseverations Error Interpretation" />
      </Grid>
    </Grid>
  );
}
