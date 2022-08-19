// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';

import AppAreaInstalled from 'src/sections/@dashboard/general/app/AppAreaInstalled';
import AnalyticsNewsUpdate from 'src/sections/@dashboard/general/analytics/AnalyticsNewsUpdate';
// mock
import { _appFeatured, _analyticPost } from '../../../../_mock';

export default function GamesTabAttention() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={9}>
        <AppAreaInstalled
          title="주의력 평가"
          subheader="(+2%) than last week"
          chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
          chartData={[
            {
              year: '주별',
              data: [
                { name: '정반응 수', data: [10, 41, 35, 51, 49, 50, 50, 50] },
                { name: '정반응 시간', data: [12, 14, 15, 20, 30, 30, 45, 40] },
              ],
            },
            {
              year: '월별',
              data: [
                { name: '정반응 수', data: [10, 41, 35, 51, 49] },
                { name: '정반응 시간', data: [10, 41, 35, 51, 49] },
              ],
            },
          ]}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <AnalyticsNewsUpdate title="정반응 수" list={_analyticPost} />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <AnalyticsNewsUpdate title="정반응 시간" list={_analyticPost} />
      </Grid>
    </Grid>
  );
}
