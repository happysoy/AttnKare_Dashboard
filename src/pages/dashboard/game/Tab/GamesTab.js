// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';
import VariableType from 'src/sections/@dashboard/general/banking/VariableType';
import BankingExpensesCategories from 'src/sections/@dashboard/general/banking/BakingExpensesCategories';

export default function GamesTab() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <BankingExpensesCategories
          title="Error Type"
          chartData={[
            { label: 'Omissions', value: 76, desc: 'Very Elevated', percent: -2.6 },
            { label: 'Commissions', value: 63, desc: 'High Average', percent: -1 },
            { label: 'Perseverations', value: 29, desc: 'Average', percent: 0.1 },
          ]}
          chartColors={[theme.palette.chart.violet[1], theme.palette.chart.blue[0], theme.palette.chart.green[0]]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BankingExpensesCategories
          title="Reation Time Statistics"
          chartData={[
            { label: 'HRT', value: 51, desc: 'Average', percent: +0.1 },
            { label: 'HRT SD', value: 48, desc: 'Average', percent: -0.4 },
            { label: 'Variability', value: 64, desc: 'High Average', percent: +1.4 },
          ]}
          chartColors={[theme.palette.chart.violet[1], theme.palette.chart.blue[0], theme.palette.chart.green[0]]}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <VariableType
          title="Total Error Type Percentage"
          chartData={[
            { label: 'Omissions', value: 4344 },
            { label: 'Commissions', value: 5435 },
            { label: 'Perseverations', value: 1443 },
          ]}
          chartColors={[theme.palette.chart.violet[2], theme.palette.chart.blue[0], theme.palette.chart.green[0]]}
        />
      </Grid>
    </Grid>
  );
}
