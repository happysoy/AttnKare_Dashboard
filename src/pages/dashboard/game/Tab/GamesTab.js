// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

import VariableType from 'src/sections/@dashboard/general/banking/VariableType';

export default function GamesTab() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <VariableType
          title="Error Type"
          chartData={[
            { label: 'Omissions', value: 4344 },
            { label: 'Commissions', value: 5435 },
            { label: 'Perseverations', value: 1443 },
          ]}
          chartColors={[theme.palette.primary.main, theme.palette.chart.violet[2], theme.palette.chart.green[0]]}
        />
      </Grid>
    </Grid>
  );
}
