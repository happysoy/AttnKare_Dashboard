// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';
import BankingWidgetSummary from 'src/sections/@dashboard/general/banking/BankingWidgetSummary';
import BankingRecentTransitions from 'src/sections/@dashboard/general/banking/BakingRecentTransitions';

//  _mock
import { _bankingRecentTransitions } from 'src/_mock';

import Page from '../../../components/Page';

export default function GeneralCognitive() {
  const theme = useTheme();

  return (
    <Page title="patient | Treatment">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <BankingWidgetSummary
                title="Income"
                icon={'eva:diagonal-arrow-left-down-fill'}
                percent={2.6}
                total={18765}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />

              <BankingWidgetSummary
                title="Expenses"
                color="warning"
                icon={'eva:diagonal-arrow-right-up-fill'}
                percent={-0.5}
                total={8938}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <BankingRecentTransitions
              title="Recent Transitions"
              tableData={_bankingRecentTransitions}
              tableLabels={[
                { id: 'description', label: 'Description' },
                { id: 'date', label: 'Date' },
                { id: 'amount', label: 'Amount' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
