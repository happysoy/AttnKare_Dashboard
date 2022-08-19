// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

import CompareLastVisit from 'src/sections/@dashboard/general/banking/CompareLastVisit';
import BankingBalanceStatistics from 'src/sections/@dashboard/general/banking/BankingBalanceStatics';
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
      <Grid item lg={8}>
        <BankingBalanceStatistics
          title="에러 추이"
          subheader="(+43% Income | +12% Expense) than last year"
          chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
          chartData={[
            {
              year: '주차별',
              data: [
                { name: 'Omissions', data: [10, 41, 35, 151, 49, 62, 69, 91] },
                { name: 'Commissions', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: 'Perseverations', data: [10, 34, 13, 56, 77, 88, 99, 77] },
              ],
            },
            {
              year: '지난주',
              data: [
                { name: 'Omissions', data: [0, 0, 0, 62, 49, 0, 35] },
                { name: 'Commissions', data: [0, 0, 0, 88, 77, 0, 13] },
                { name: 'Perseverations', data: [0, 0, 0, 56, 77, 0, 99] },
              ],
            },
          ]}
        />
      </Grid>
      {/* <Grid item xs={3} md={6} lg={6}>
        <CompareLastVisit
          title="Error Type"
          // subheader="(+4%)  than last week"
          chartLabels={['Commissions', 'Omissions']}
          chartData={[
            {
              year: '주간',
              data: [
                { name: 'Commissions', data: [-0.8, -0.8, -1.05, -1.06, -1.18, -1.4, -2, -2.2] },
                { name: 'Omissions', data: [0.5, 0.4, 0.65, 0.76, 0.88, 1.5, 1.6, 2.0] },
              ],
            },
          ]}
        />
      </Grid>
      <Grid item xs={3} md={6} lg={6}>
        <h1>정규분포표</h1>
      </Grid> */}
    </Grid>
  );
}
