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
import AppWelcome from '../../../../sections/@dashboard/general/app/AppWelcome';
import AppFeatured from '../../../../sections/@dashboard/general/app/AppFeatured';
import AppWidgetSummary from '../../../../sections/@dashboard/general/app/AppWidgetSummary';
// assets
import { SeoIllustration } from '../../../../assets';

export default function GamesTabRTS() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <BankingExpensesCategories
          title="Recent Performance Reaction Type Statistics"
          chartData={[
            { label: 'HRT', value: 72, desc: 'Very Elevated' },
            { label: 'HRT SD', value: 63, desc: 'High Average' },
            { label: 'Variability', value: 45, desc: 'Average' },
            { label: 'HRT Block Change', value: 45, desc: 'Average' },
            { label: 'HRT ISI Change', value: 45, desc: 'Average' },
          ]}
          chartColors={[
            theme.palette.chart.red[0],
            theme.palette.chart.blue[0],
            theme.palette.chart.green[0],
            theme.palette.chart.red[0],
            theme.palette.chart.blue[0],
          ]}
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
