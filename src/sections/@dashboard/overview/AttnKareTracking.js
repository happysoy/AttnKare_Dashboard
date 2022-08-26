import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AttnKareTracking.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  // chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AttnKareTracking({ title, subheader, chartColors, chartLabels, chartData, ...other }) {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '30%' } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,
    // xaxis: { type: 'datetime' },
    colors: chartColors,
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} %`;
          }
          return y;
        },
      },
    },
    legend: {
      show: false,
    },
    yaxis: {
      min: 0,
      max: 140,
    },
    chart: {
      type: 'bar',
      stacked: true,
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={250} />
      </Box>
    </Card>
  );
}
