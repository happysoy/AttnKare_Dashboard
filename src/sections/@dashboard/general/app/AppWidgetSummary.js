import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../../../utils/formatNumber';
import { fDate } from '../../../../utils/formatTime';

import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  chartColor: PropTypes.string.isRequired,
  chartData: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  totalText: PropTypes.string.isRequired,
  innerDays: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({
  title,
  text,
  date,
  total,
  totalText,
  innerText,
  innerDays,
  color = 'primary',
  chartColor,
  chartData,
  sx,
  ...other
}) {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    chart: { sparkline: { enabled: true } },
    grid: {
      padding: {
        top: -9,
        bottom: -9,
      },
    },
    legend: { show: false },
    plotOptions: {
      radialBar: {
        hollow: { size: '70%' },
        track: { margin: 0 },
        dataLabels: {
          name: {
            formatter: () => {
              const tmp = `${innerText}`;
              return tmp;
            },
            offsetY: 22,
          },
          value: {
            fontSize: theme.typography.h3.fontSize,
            offsetY: -13,
          },
          total: {
            formatter: () => {
              const tmp = `${innerDays}`;
              return tmp;
            },
            fontSize: theme.typography.caption.fontSize,
            color: theme.palette.grey,
          },
        },
      },
    },
  });
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography sx={{ mt: 2 }} variant="h3">
          {fNumber(total)} {totalText}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1, mb: 1 }}>
          <Typography component="span" variant="subtitle3">
            {text} {fDate(date)}
          </Typography>
        </Stack>
      </Box>
      <ReactApexChart type="radialBar" series={[chartData]} options={chartOptions} width={140} height={140} />

      {/* <ReactApexChart type="bar" series={[{ data: chartData }]} options={chartOptions} width={60} height={36} /> */}
    </Card>
  );
}
