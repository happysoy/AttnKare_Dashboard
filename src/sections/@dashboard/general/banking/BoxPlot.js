import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function BoxPlot({ title, subheader, chartData, ...other }) {
  const theme = useTheme();
  const chartOptions = {
    plotOptions: {
      boxPlot: {
        colors: {
          upper: '#5C4742',
          lower: theme.palette.chart.violet[0],
        },
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: '12px',
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: () => 'HRT(ms)',
        },
      },
      z: {
        formatter: undefined,
        title: 'Size: ',
      },
    },
  };
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <ReactApexChart type="boxPlot" series={chartData} options={chartOptions} height={300} />
    </Card>
  );
}
