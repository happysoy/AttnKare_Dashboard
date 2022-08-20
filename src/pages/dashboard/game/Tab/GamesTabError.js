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
import BankingBalanceStatistics from 'src/sections/@dashboard/general/banking/BankingBalanceStatics';
import InvoiceList from 'src/sections/@dashboard/invoce/InvoiceList';
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
      <Grid item xs={12} md={12}>
        <BankingExpensesCategories
          title="지난 방문 대비"
          chartData={[
            { label: 'Omissions', value: 76, desc: 'Very Elevated', percent: -2.6 },
            { label: 'Commissions', value: 63, desc: 'High Average', percent: -1 },
            { label: 'Perseverations', value: 29, desc: 'Average', percent: 0.1 },
          ]}
          chartColors={[theme.palette.chart.violet[1], theme.palette.chart.blue[0], theme.palette.chart.green[0]]}
        />
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <BankingBalanceStatistics
          title="Omissions"
          chartLabels={['월', '화', '수', '목', '금', '토', '일']}
          chartData={[
            {
              year: '일별',
              data: [{ name: 'Error Rates', data: [0, 0, 0, 62, 60, 0, 58] }],
            },
            {
              year: '주별',
              data: [{ name: 'Error Rates', data: [80, 81, 78, 75, 60, 62, 57, 60] }],
            },
            {
              year: '월별',
              data: [{ name: 'Error Rates', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] }],
            },
          ]}
          chartColors={theme.palette.chart.violet[1]}
        />
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <BankingBalanceStatistics
          title="Commissions"
          chartLabels={['월', '화', '수', '목', '금', '토', '일']}
          chartData={[
            {
              year: '일별',
              data: [{ name: 'Error Rates', data: [0, 0, 0, 62, 60, 0, 58] }],
            },
            {
              year: '주별',
              data: [{ name: 'Error Rates', data: [80, 81, 78, 75, 60, 62, 57, 60] }],
            },
            {
              year: '월별',
              data: [{ name: 'Error Rates', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] }],
            },
          ]}
          chartColors={theme.palette.chart.blue[0]}
        />
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <BankingBalanceStatistics
          title="Perseverations"
          chartLabels={['월', '화', '수', '목', '금', '토', '일']}
          chartData={[
            {
              year: '일별',
              data: [{ name: 'Error Rates', data: [0, 0, 0, 62, 60, 0, 58] }],
            },
            {
              year: '주별',
              data: [{ name: 'Error Rates', data: [80, 81, 78, 75, 60, 62, 57, 60] }],
            },
            {
              year: '월별',
              data: [{ name: 'Error Rates', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] }],
            },
          ]}
          chartColors={theme.palette.chart.green[0]}
        />
      </Grid>
      {/* <Grid item xs={4} md={6} lg={8}>
        <TabOmissionsLog title="Omissions Error Interpretation" />
      </Grid>
      <Grid item xs={4} md={6} lg={6}>
        <TabCommissionsLog title="Commission Error Interpretation" />
      </Grid>
      <Grid item xs={4} md={6} lg={6}>
        <TabPerseverationsLog title="Perseverations Error Interpretation" />
      </Grid> */}
      <Grid item xs={12} md={12} lg={12}>
        <InvoiceList />
      </Grid>
    </Grid>
  );
}
