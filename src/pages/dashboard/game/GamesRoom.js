// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Stack } from '@mui/material';
import EcommerceYearlySales from 'src/sections/@dashboard/general/e-commerce/EcommerceYearlySales';
import AnalyticsCurrentVisits from 'src/sections/@dashboard/general/analytics/AnalyticsCurrentVisit';

export default function GamesRoom() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9} lg={9}>
        <EcommerceYearlySales
          title="방정리 종합 점수"
          subheader="(+43%) than last week"
          chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
          chartData={[
            {
              year: '2021',
              data: [
                { name: '종합점수', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '집중력', data: [148, 91, 69, 62, 49, 51, 35, 41] },
                { name: '작업기억력', data: [45, 77, 99, 88, 77, 56, 13, 34] },
                { name: '실행기능', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '행동조절', data: [10, 34, 13, 56, 77, 88, 99, 77] },
              ],
            },
            {
              year: '2022',
              data: [
                { name: '종합점수', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '집중력', data: [148, 91, 69, 62, 49, 51, 35, 41] },
                { name: '작업기억력', data: [45, 77, 99, 88, 77, 56, 13, 34] },
                { name: '실행기능', data: [10, 34, 13, 56, 77, 88, 99, 77] },
                { name: '행동조절', data: [10, 34, 13, 56, 77, 88, 99, 77] },
              ],
            },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <AnalyticsCurrentVisits
          title="게임 플레이 시간"
          chartData={[
            { label: 'America', value: 4344 },
            { label: 'Asia', value: 5435 },
            { label: 'Europe', value: 1443 },
            { label: 'Africa', value: 4443 },
          ]}
          chartColors={[
            theme.palette.primary.main,
            theme.palette.chart.blue[0],
            theme.palette.chart.violet[0],
            theme.palette.chart.yellow[0],
          ]}
        />
      </Grid>
    </Grid>
  );
}
