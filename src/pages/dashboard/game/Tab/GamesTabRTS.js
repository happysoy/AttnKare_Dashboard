// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// component
import BankingExpensesCategories from 'src/sections/@dashboard/general/banking/BakingExpensesCategories';
import BankingBalanceStatistics from 'src/sections/@dashboard/general/banking/BankingBalanceStatics';
import BoxPlot from 'src/sections/@dashboard/general/banking/BoxPlot';
// mock
import { _appFeatured, _analyticPost, _analyticOrderTimeline } from '../../../../_mock';

export default function GamesTabRTS() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={4} md={6} lg={4}>
        <BankingBalanceStatistics
          title="HRT"
          chartLabels={['월', '화', '수', '목', '금', '토', '일']}
          chartData={[
            {
              year: '일별',
              data: [{ name: 'RTS', data: [0, 0, 0, 62, 60, 0, 58] }],
            },
            {
              year: '주별',
              data: [{ name: 'RTS', data: [80, 81, 78, 75, 60, 62, 57, 60] }],
            },
            {
              year: '월별',
              data: [{ name: 'RTS', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] }],
            },
          ]}
          chartColors={theme.palette.chart.violet[1]}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={8}>
        <BoxPlot
          title="HRT by Scene"
          subheader="가장 최근 플레이"
          chartData={[
            {
              type: 'boxPlot',
              data: [
                {
                  x: 'scene-1',
                  y: [290, 345, 355, 355, 420],
                },
                {
                  x: 'scene-2',
                  y: [302, 355, 365, 365, 424],
                },
                {
                  x: 'scene-3',
                  y: [280, 360, 370, 370, 440],
                },
                {
                  x: 'scene-4',
                  y: [310, 390, 400, 400, 500],
                },
                {
                  x: 'scene-5',
                  y: [315, 370, 380, 380, 450],
                },
              ],
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
