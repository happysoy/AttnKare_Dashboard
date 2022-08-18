import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
// components
import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

EcommerceYearlySales.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function EcommerceYearlySales({ title, subheader, chartLabels, chartData, ...other }) {
  const [seriesData, setSeriesData] = useState('8월');
  // const legendItem = document.querySelector('.apexcharts-legend-series:nth-child(2)');
  // legendItem.dispatchEvent(new Event('click'));
  // console.log(legendItem);
  const charRef = useRef();

  useEffect(() => {
    charRef?.current?.chart.toggleSeries('집중력');
    charRef?.current?.chart.toggleSeries('작업기억력');
    charRef?.current?.chart.toggleSeries('실행기능');
    charRef?.current?.chart.toggleSeries('행동조절');
    charRef?.current?.chart.toggleSeries('사회성');
    charRef?.current?.chart.toggleSeries('충동성');
  });

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    legend: { position: 'top', horizontalAlign: 'right' },
    xaxis: {
      categories: chartLabels,
    },
    labels: {
      enabled: false,
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
    },
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
          {item.year === seriesData && (
            <ReactApexChart ref={charRef} type="area" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </Card>
  );
}
