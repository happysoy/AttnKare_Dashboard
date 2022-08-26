import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

export default function BoxPlot({ title, subheader, chartData, ...other }) {
  const theme = useTheme();

  const [seriesData, setSeriesData] = useState('1단계');
  const [labels, setLabels] = useState([]);

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

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
          {<ReactApexChart type="boxPlot" series={chartData} options={chartOptions} height={280} />}
        </Box>
      ))}
    </Card>
  );
}
