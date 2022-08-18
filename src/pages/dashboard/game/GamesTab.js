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

export default function GamesTab() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9} lg={9}>
        <EcommerceYearlySales
          title="탭 종합 점수"
          subheader="(+43%) than last week"
          chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
          chartData={[
            {
              year: '2021',
              data: [
                { name: '종합점수', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '집중력', data: [148, 91, 69, 62, 49, 51, 35, 41] },
                { name: '작업기억력', data: [45, 77, 99, 88, 77, 56, 13, 34] },
                { name: '실행기능', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '행동조절', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '사회성', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '충동성', data: [10, 34, 13, 56, 77, 88, 99, 77] },
              ],
            },
            {
              year: '2022',
              data: [
                { name: '종합점수', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '집중력', data: [148, 91, 69, 62, 49, 51, 35, 41] },
                { name: '작업기억력', data: [45, 77, 99, 88, 77, 56, 13, 34] },
                { name: '실행기능', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '행동조절', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '사회성', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '충동성', data: [10, 34, 13, 56, 77, 88, 99, 77] },
              ],
            },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <AnalyticsCurrentVisits
          title="게임 플레이 시간"
          chartData={[
            { label: '탭', value: 24 },
            { label: '비즈', value: 15 },
            { label: '방정리', value: 8 },
            { label: '의미카드', value: 10 },
            { label: '레이싱', value: 46 },
          ]}
          chartColors={[
            theme.palette.primary.main,
            theme.palette.chart.blue[0],
            theme.palette.chart.violet[0],
            theme.palette.chart.yellow[0],
          ]}
        />
      </Grid>
      <Grid item xs={12} md={9}>
        <BankingBalanceStatistics
          title="성취율"
          subheader="(+43% Income | +12% Expense) than last year"
          chartLabels={['일', '월', '화', '수', '목', '금', '토', '일']}
          chartData={[
            {
              year: '주간',
              data: [
                { name: '성취율', data: [10, 41, 35, 151, 49, 62, 69] },
                { name: '권장', data: [10, 34, 13, 56, 77, 88, 99] },
              ],
            },
            {
              year: '월간',
              data: [
                { name: '성취율', data: [148, 91, 69, 62, 49, 51, 35] },
                { name: '권장', data: [45, 77, 99, 88, 77, 56, 13] },
              ],
            },
            {
              year: '연간',
              data: [
                { name: '성취율', data: [76, 42, 29, 41, 27, 138, 117] },
                { name: '권장', data: [80, 55, 34, 114, 80, 130, 15] },
              ],
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
