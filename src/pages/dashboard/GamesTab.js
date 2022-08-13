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
// mock
import { _appFeatured } from '../../_mock';

import Page from '../../components/Page';

// sections
import AppWelcome from '../../sections/@dashboard/general/app/AppWelcome';
import AppFeatured from '../../sections/@dashboard/general/app/AppFeatured';
import AppWidgetSummary from '../../sections/@dashboard/general/app/AppWidgetSummary';
// assets
import { SeoIllustration } from '../../assets';

export default function GamesTab() {
  const theme = useTheme();

  return (
    <Page title="patient: Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
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
        </Grid>
      </Container>
    </Page>
  );
}
