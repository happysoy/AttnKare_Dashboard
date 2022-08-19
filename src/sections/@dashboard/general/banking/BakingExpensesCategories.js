/* eslint no-else-return: "error" */

import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, Stack, Divider, CardHeader, Typography } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  '& .apexcharts-legend': {
    width: 240,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
      height: 160,
      width: '50%',
    },
  },
  '& .apexcharts-datalabels-group': {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

BankingExpensesCategories.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

export default function BankingExpensesCategories({ title, chartColors, color, desc, subheader, chartData, ...other }) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'sm');

  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    labels: chartLabels,
    colors: chartColors,
    stroke: {
      colors: [theme.palette.background.paper],
    },
    fill: { opacity: 0.8 },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
      },
      formatter: (value, { seriesIndex, dataPointIndex, w }) => {
        return `${chartLabels[seriesIndex]} `;
      },
    },
  });

  return (
    <RootStyle {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Divider sx={{ mt: 2 }} />
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
        {chartData.map((i) => (
          <Box key={i.label} sx={{ py: 2, width: 1, textAlign: 'center' }}>
            <Typography sx={{ mb: 1, typography: 'h5', color: 'text.primary' }}>{i.label}</Typography>
            <Typography sx={{ typography: 'body1' }}>{i.desc}</Typography>
          </Box>
        ))}
      </Stack>

      <Divider />

      <Box sx={{ my: 5 }} dir="ltr">
        <ReactApexChart type="polarArea" series={chartSeries} options={chartOptions} height={isDesktop ? 240 : 360} />
      </Box>
    </RootStyle>
  );
}
