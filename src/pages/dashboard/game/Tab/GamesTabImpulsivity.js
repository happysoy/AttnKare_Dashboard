// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

import AppAreaInstalled from 'src/sections/@dashboard/general/app/AppAreaInstalled';

// mock
import { _appFeatured } from '../../../../_mock';

export default function GamesTabImpulsivity() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={9}>
        <AppAreaInstalled
          title="주의력 평가"
          subheader="(+2%) than last week"
          chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차']}
          chartData={[
            {
              year: '8월',
              data: [
                { name: '정반응 수', data: [10, 41, 35, 51, 49] },
                { name: '정반응 시간', data: [12, 14, 15, 20, 30] },
              ],
            },
            {
              year: '7월',
              data: [
                { name: '정반응 수', data: [10, 41, 35, 51, 49] },
                { name: '정반응 시간', data: [10, 41, 35, 51, 49] },
              ],
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
