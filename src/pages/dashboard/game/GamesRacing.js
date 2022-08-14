// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

export default function GamesRacing() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8}>
        <h1>레이싱 종합 평가</h1>
      </Grid>
    </Grid>
  );
}
