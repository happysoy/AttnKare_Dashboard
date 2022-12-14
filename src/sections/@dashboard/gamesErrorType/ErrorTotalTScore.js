import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
// components
import { BaseOptionChart } from '../../../components/chart';

BankingBalanceStatistics.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function BankingBalanceStatistics({ title, subheader, chartColors, chartLabels, chartData, ...other }) {
  const [seriesData, setSeriesData] = useState('일별');
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (seriesData === '일별') {
      setLabels(chartLabels);
    } else if (seriesData === '주별') {
      setLabels(['1', '2', '3', '4', '5', '6', '7', '8']);
    } else if (seriesData === '월별') {
      setLabels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']);
    }
  }, [seriesData]);

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: labels,
    },
    colors: chartColors,

    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
    chart: {
      stacked: true,
    },
    // fill: {
    //   colors: ['#8dc63f', '#ff6c0f'],
    // },
    // markers: {
    //   colors: ['#8dc63f', '#ff6c0f'],
    // },
    // dataLabels: {
    //   style: {
    //     colors: ['#8dc63f', '#ff6c0f'],
    //   },
    // },
    // legend: {
    //   show: false,
    // },
  });

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': { pl: 1, py: 0.5, pr: '24px !important', typography: 'subtitle2' },
              '& .MuiOutlinedInput-root': { borderRadius: 0.75, bgcolor: 'background.neutral' },
              '& .MuiNativeSelect-icon': { top: 4, right: 0, width: 20, height: 20 },
            }}
          >
            {chartData.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />

      {chartData.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {/* <ChartWrapperStyle dir="ltr"> */}
          {item.year === seriesData && (
            <ReactApexChart type="bar" series={item.data} options={chartOptions} height={280} />
          )}
          {/* </ChartWrapperStyle> */}
        </Box>
      ))}
    </Card>
  );
}
