// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// component
import ErrorTotalTScore from 'src/sections/@dashboard/gamesErrorType/ErrorTotalTScore';
import ErrorReasonAnalyze from 'src/sections/@dashboard/gamesErrorType/ErrorReasonAnalyze';
// mock
import { _appFeatured, _analyticPost, _analyticOrderTimeline } from 'src/_mock';

export default function GamesTabError() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={4}>
        <ErrorTotalTScore
          title="Omissions T-score"
          chartLabels={['월', '화', '수', '목', '금', '토', '일']}
          chartData={[
            {
              year: '일별',
              data: [{ name: 'Error Rates', data: [0, 0, 0, 60, 48, 0, 48] }],
            },
            {
              year: '주별',
              data: [{ name: 'Error Rates', data: [80, 81, 78, 75, 60, 62, 57, 60] }],
            },
            {
              year: '월별',
              data: [{ name: 'Error Rates', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] }],
            },
          ]}
          chartColors={theme.palette.chart.violet[1]}
        />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <ErrorTotalTScore
          title="Commission T-score"
          chartLabels={['월', '화', '수', '목', '금', '토', '일']}
          chartData={[
            {
              year: '일별',
              data: [{ name: 'Error Rates', data: [0, 0, 0, 62, 60, 0, 58] }],
            },
            {
              year: '주별',
              data: [{ name: 'Error Rates', data: [90, 95, 93, 80, 60, 58, 57, 50] }],
            },
            {
              year: '월별',
              data: [{ name: 'Error Rates', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] }],
            },
          ]}
          chartColors={theme.palette.chart.blue[0]}
        />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <ErrorTotalTScore
          title="Perseverations T-score"
          chartLabels={['월', '화', '수', '목', '금', '토', '일']}
          chartData={[
            {
              year: '일별',
              data: [{ name: 'Error Rates', data: [0, 0, 0, 62, 58, 0, 55] }],
            },
            {
              year: '주별',
              data: [{ name: 'Error Rates', data: [80, 78, 70, 65, 62, 50, 45, 40] }],
            },
            {
              year: '월별',
              data: [{ name: 'Error Rates', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] }],
            },
          ]}
          chartColors={theme.palette.chart.green[0]}
        />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <ErrorReasonAnalyze />
      </Grid>
    </Grid>
  );
}
