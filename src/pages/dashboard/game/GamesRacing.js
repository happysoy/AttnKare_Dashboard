// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';
import EcommerceYearlySales from 'src/sections/@dashboard/general/e-commerce/EcommerceYearlySales';
import AnalyticsCurrentVisits from 'src/sections/@dashboard/general/analytics/AnalyticsCurrentVisit';

export default function GamesRacing() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <h1>레이싱</h1>
    </Grid>
  );
}
