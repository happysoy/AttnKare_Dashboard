// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

// component
import AppCurrentDownload from 'src/sections/@dashboard/general/app/AppCurrentDownload';
import AppWidget from 'src/sections/@dashboard/general/app/AppWidget';
import AnalyticsWebsiteVisits from 'src/sections/@dashboard/general/analytics/AnalyticsWebsiteVisits';
// import BookingCheckInWidgets from 'src/sections/@dashboard/general/booking/BookingCheckInWidgets';
import BankingWidgetSummary from 'src/sections/@dashboard/general/banking/BankingWidgetSummary';
import AppPatientProfile from 'src/sections/@dashboard/general/app/AppPatientProfile';
import AppAreaInstalled from 'src/sections/@dashboard/general/app/AppAreaInstalled';
import EcommerceYearlySales from 'src/sections/@dashboard/general/e-commerce/EcommerceYearlySales';
import AnalyticsCurrentVisits from 'src/sections/@dashboard/general/analytics/AnalyticsCurrentVisit';
import BankingBalanceStatistics from 'src/sections/@dashboard/general/banking/BankingBalanceStatics';
// mock
import { _appFeatured } from '../../../_mock';

import Page from '../../../components/Page';

// sections
import AppWelcome from '../../../sections/@dashboard/general/app/AppWelcome';
import AppFeatured from '../../../sections/@dashboard/general/app/AppFeatured';
import AppWidgetSummary from '../../../sections/@dashboard/general/app/AppWidgetSummary';
// assets
import { SeoIllustration } from '../../../assets';

export default function GamesTabAttention() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8}>
        <AppAreaInstalled
          title="주의력 평가"
          subheader="(+43%) than last year"
          chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
          chartData={[
            {
              year: '2019',
              data: [
                { name: 'Asia', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
                { name: 'America', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
              ],
            },
            {
              year: '2020',
              data: [
                { name: 'Asia', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                { name: 'America', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
              ],
            },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <AnalyticsCurrentVisits
          title="게임 플레이 시간"
          chartData={[
            { label: 'America', value: 4344 },
            { label: 'Asia', value: 5435 },
            { label: 'Europe', value: 1443 },
            { label: 'Africa', value: 4443 },
          ]}
          chartColors={[
            theme.palette.primary.main,
            theme.palette.chart.blue[0],
            theme.palette.chart.violet[0],
            theme.palette.chart.yellow[0],
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <EcommerceYearlySales
          title="점수"
          subheader="(+43%) than last week"
          chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
          chartData={[
            {
              year: '2019',
              data: [
                { name: 'Total Income', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                { name: 'Total Expenses', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
              ],
            },
            {
              year: '2020',
              data: [
                { name: 'Total Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                { name: 'Total Expenses', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
              ],
            },
          ]}
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <BankingBalanceStatistics
          title="주간 성취율"
          subheader="(+43% Income | +12% Expense) than last year"
          chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
          chartData={[
            {
              year: 'Week',
              data: [
                { name: 'Income', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                { name: 'Expenses', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
              ],
            },
            {
              year: 'Month',
              data: [
                { name: 'Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                { name: 'Expenses', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
              ],
            },
            {
              year: 'Year',
              data: [
                { name: 'Income', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] },
                { name: 'Expenses', data: [80, 55, 34, 114, 80, 130, 15, 28, 55] },
              ],
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}