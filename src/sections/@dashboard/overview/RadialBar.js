import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import Label from 'src/components/Label';
import { Card, CardHeader, Box, TextField, Typography } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
// components
import { BaseOptionChart } from '../../../components/chart';

export default function RadialBar({ title, subheader, chartColors, chartLabels, chartData, ...other }) {
  const theme = useTheme();
  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },

    colors: [theme.palette.error.main],

    tooltip: {
      y: {
        formatter: (val) => `${val}22`,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: '60%' },
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          show: false,
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [theme.palette.success.main],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    labels: ['Percent'],
    legend: {
      show: false,
    },
  });

  return (
    <>
      {chartData.map((item, index) => (
        <Box key={index} sx={{ mt: 3, mx: 3 }} dir="ltr">
          <ReactApexChart type="radialBar" series={item.data} options={chartOptions} height={300} />
          <Box sx={{ mt: -10, mb: 5 }}>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
              <Typography component="div" variant="h5">
                고도
              </Typography>
            </Box>
            <Box sx={{ justifyContent: 'center', display: 'flex', mt: 1 }}>
              <Label component="div" color={'primary'}>
                충돌우세형
              </Label>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
