import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
import Label from 'src/components/Label';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Stack, Divider, CardHeader, Typography } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import { BaseOptionChart } from '../../../components/chart';
import Iconify from '../../../components/Iconify';

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
const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 24,
  height: 24,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.success.main,
  backgroundColor: alpha(theme.palette.success.main, 0.16),
}));

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
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => `${seriesName}th`,
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
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

            <Label
              color={
                (i.desc === 'Average' && 'primary') ||
                (i.desc === 'Average' && 'info') ||
                (i.desc === 'Low' && 'success') ||
                (i.desc === 'High Average' && 'warning') ||
                (i.desc === 'Very Elevated' && 'error')
              }
            >
              {i.desc}
            </Label>
          </Box>
        ))}
      </Stack>

      <Divider />

      <Box sx={{ my: 5 }} dir="ltr">
        <ReactApexChart type="polarArea" series={chartSeries} options={chartOptions} height={isDesktop ? 240 : 360} />
      </Box>
      <Box sx={{ justifyContent: 'center', m: 4, mt: -4 }}>
        <Typography variant="body1" display="flex" sx={{ justifyContent: 'center', color: '#666666' }}>
          [ 백분위 수 ]
        </Typography>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box sx={{ justifyContent: 'center', m: 4 }}>
        <Typography variant="body1" display="flex" sx={{ justifyContent: 'center', mb: 2, color: '#666666' }}>
          지난번 play (2022.08.18) 와 비교하였을 때
        </Typography>
        {chartData.map((i) => (
          <Box
            key={i.label}
            sx={{ justifyContent: 'space-between', py: 2, width: 1, textAlign: 'center', display: 'flex' }}
          >
            <Typography component="span" variant="subtitle1">
              {i.label}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mr: 2, ml: 2, justifyContent: 'center' }}>
              <IconWrapperStyle
                sx={{
                  ...(i.percent >= 0 && {
                    color: 'error.main',
                    bgcolor: alpha(theme.palette.error.main, 0.16),
                  }),
                }}
              >
                <Iconify
                  width={16}
                  height={16}
                  icon={i.percent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'}
                />
              </IconWrapperStyle>
              <Typography
                sx={{ mr: 2 }}
                component="span"
                variant="subtitle2"
                color={i.percent >= 0 ? 'error.main' : 'success.main'}
              >
                {i.percent > 0 && '+'}
                {i.percent} %
              </Typography>
              <Typography component="span" variant="subtitle2">
                {i.percent >= 0 ? '증가하여' : '감소하여'}
              </Typography>
              <Typography component="span" variant="subtitle2" color={i.percent >= 0 ? 'error.main' : 'success.main'}>
                {i.percent >= 0 ? '정체' : '개선'}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </RootStyle>
  );
}
