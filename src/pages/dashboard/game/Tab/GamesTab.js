// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import TotalErrorTypePercent from 'src/sections/@dashboard/gamesTotal/TotalErrorTypePercent';
import TotalCompareLastPlay from 'src/sections/@dashboard/gamesTotal/TotalCompareLastPlay';
import AnalyzeHRTError from 'src/sections/@dashboard/gamesTotal/AnalyzeHRTError';

export default function GamesTab() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TotalCompareLastPlay
          title="Error Type"
          subheader="2022.08.23 play"
          chartData={[
            { label: 'Omissions', value: 76, desc: 'Very Elevated', percent: -2.6 },
            { label: 'Commissions', value: 63, desc: 'High Average', percent: -1 },
            { label: 'Perseverations', value: 29, desc: 'Average', percent: 0.1 },
          ]}
          chartColors={[theme.palette.chart.violet[1], theme.palette.chart.blue[0], theme.palette.chart.green[0]]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TotalCompareLastPlay
          title="Reation Time Statistics"
          subheader="2022.08.23 play"
          chartData={[
            { label: 'HRT', value: 51, desc: 'Average', percent: +0.1 },
            { label: 'HRT SD', value: 48, desc: 'Average', percent: -0.4 },
            { label: 'Variability', value: 64, desc: 'High Average', percent: +1.4 },
          ]}
          chartColors={[theme.palette.chart.violet[1], theme.palette.chart.blue[0], theme.palette.chart.green[0]]}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <TotalErrorTypePercent
          title="Total Error Type Percentage"
          subheader="2022.03.02 - 20.22.08.23 "
          chartData={[
            { label: 'Omissions', value: 4344 },
            { label: 'Commissions', value: 5435 },
            { label: 'Perseverations', value: 1443 },
          ]}
          chartColors={[theme.palette.chart.violet[2], theme.palette.chart.blue[0], theme.palette.chart.green[0]]}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={8}>
        <AnalyzeHRTError
          title="Analyze"
          subheader="2022.03.02 - 20.22.08.23 "
          // subheader="(+4%)  than last week"
          chartLabels={['HRT', 'Error Rates']}
          chartData={[
            {
              year: '??????',
              data: [
                { name: 'HRT', data: [-0.8, -0.8, -1.05, -1.06, -1.18, -1.4, -2, -2.2] },
                { name: 'Error Rates', data: [0.5, 0.4, 0.65, 0.76, 0.88, 1.5, 1.6, 2.0] },
              ],
            },
          ]}
        />
      </Grid>

      <Grid item xs={6} md={6} lg={4}>
        <h3>??? ?????? ????????? / ?????? ??????</h3>
      </Grid>
    </Grid>
  );
}
