// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

export default function GamesRacingImpusivity() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8}>
        <h1>주의력 평가</h1>
      </Grid>
    </Grid>
  );
}
