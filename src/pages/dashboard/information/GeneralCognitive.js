// @mui
import { Container, Grid, Stack } from '@mui/material';
import BankingWidgetSummary from 'src/sections/@dashboard/general/banking/BankingWidgetSummary';
import BankingRecentTransitions from 'src/sections/@dashboard/general/banking/BakingRecentTransitions';

//  _mock
import { _bankingRecentTransitions } from 'src/_mock';

import Page from '../../../components/Page';

export default function GeneralCognitive() {
  return (
    <Page title="Dashboard | Point">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Stack direction={{ xs: 'column', md: 'column', lg: 'column' }} spacing={3}>
              <BankingWidgetSummary
                title="게임 포인트 획득"
                color="success"
                icon={'eva:diagonal-arrow-left-down-fill'}
                percent={-3.1}
                total="6,100"
                chartData={[110, 120, 50, 330]}
              />

              <BankingWidgetSummary
                title="포인트 사용"
                color="error"
                icon={'eva:diagonal-arrow-right-up-fill'}
                percent={+5.0}
                total="22,000"
                chartData={[1000, 1200]}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <BankingRecentTransitions
              title="포인트 거래내역"
              tableData={_bankingRecentTransitions}
              tableLabels={[
                { id: 'description', label: '분야' },
                { id: 'date', label: '날짜' },
                { id: 'amount', label: '금액' },
                { id: '' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
