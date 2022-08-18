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
          subheader="(+2%) than last week"
          chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차']}
          chartData={[
            {
              year: '8월',
              data: [
                { name: '정반응 수', data: [10, 41, 35, 51, 49] },
                { name: '정반응 시간', data: [12, 14, 15, 20, 30] },
              ],
            },
            {
              year: '7월',
              data: [
                { name: '정반응 수', data: [10, 41, 35, 51, 49] },
                { name: '정반응 시간', data: [10, 41, 35, 51, 49] },
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
    </Grid>
  );
}
