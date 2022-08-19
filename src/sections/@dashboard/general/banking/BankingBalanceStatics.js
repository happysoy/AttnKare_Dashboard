import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
// components
import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

// const CHART_HEIGHT = 100;

// const ChartWrapperStyle = styled('div')(({ theme }) => ({
//   height: CHART_HEIGHT,
//   // marginTop: theme.spacing(2),
//   '& .apexcharts-canvas svg': { height: CHART_HEIGHT, width: '800px' },
//   '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
//     overflow: 'visible',
//   },

//   display: 'fixed',
// }));

BankingBalanceStatistics.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function BankingBalanceStatistics({ title, subheader, chartLabels, chartData, ...other }) {
  const [seriesData, setSeriesData] = useState('주차별');
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (seriesData === '주차별') {
      setLabels(chartLabels);
    } else if (seriesData === '지난주') {
      setLabels(['월', '화', '수', '목', '금', '토', '일']);
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
