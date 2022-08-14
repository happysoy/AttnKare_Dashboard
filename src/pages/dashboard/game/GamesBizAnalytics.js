// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

export default function GamesBizAnalytics() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8}>
        <h1>종합 점수</h1>
      </Grid>
    </Grid>
  );
}
