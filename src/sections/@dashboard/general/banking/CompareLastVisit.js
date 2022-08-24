import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Label from 'src/components/Label';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader, Box, TextField, Divider, Stack, Typography } from '@mui/material';
// components
import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

CompareLastVisit.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function CompareLastVisit({ title, subheader, chartLabels, chartData, ...other }) {
  const [seriesData, setSeriesData] = useState('주간');
  const theme = useTheme();

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    chart: {
      type: 'bar',
      // height: 200,
      stacked: true,
    },
    colors: [`${theme.palette.primary.main}`, `${theme.palette.primary.light}`],
    plotOptions: {
      bar: {
        horizontal: true,
        // barHegith: '50%',
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => `${seriesName}`,
      },
    },
    xaxis: {
      categories: ['8주차', '7주차', '6주차', '5주차', '4주차', '3주차', '2주차', '1주차'],
      title: {
        text: 'T-score',
      },
      labels: {
        formatter: (seriesName) => `${seriesName}%`,
      },
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
            <ReactApexChart type="bar" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
      <Divider />
      <Stack direction="row" alignItems="center" spacing={1} sx={{ justifyContent: 'center' }}>
        <Typography sx={{ py: 2, mr: 6 }} component="span" variant="subtitle2">
          slow HRT & high Error Rates
          <Label color="primary" sx={{ ml: 2 }}>
            부주의
          </Label>
        </Typography>
        <Typography sx={{ py: 2 }} component="span" variant="subtitle2">
          fast HRT & high Error Rates
          <Label color="primary" sx={{ ml: 2 }}>
            충동성
          </Label>
        </Typography>
      </Stack>
    </Card>
  );
}
