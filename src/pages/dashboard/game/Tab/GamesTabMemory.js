// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

import AppAreaInstalled from 'src/sections/@dashboard/general/app/AppAreaInstalled';

// mock
import { _appFeatured } from '../../../../_mock';

export default function GamesTabMemory() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={9}>
        <h1>작업기억력 평가</h1>
      </Grid>
    </Grid>
  );
}
