// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

import Page from '../../components/Page';

export default function GeneralTreatment() {
  const theme = useTheme();

  return (
    <Page title="patient | Treatment">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <h1>치료</h1>
        </Grid>
      </Container>
    </Page>
  );
}
