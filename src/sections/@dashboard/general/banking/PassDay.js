// eslint-disable-next-line

import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';

// @mui
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Card, Typography, Stack, keyframes } from '@mui/material';
// utils
import { fPercent } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';
import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  // width: 48,
  // height: 48,
  display: 'flex',
  position: 'absolute',
  top: theme.spacing(12.5),
  right: theme.spacing(5),
  [theme.breakpoints.up('sm')]: {
    right: theme.spacing(23),
    top: theme.spacing(14),
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));
const boxAnimation = keyframes`
  0%{
    left: 20px;
    
  }
  20%{
    transform: translateY(-20px)
  }
  40%{
    transform: rotate(-20deg) translateX(50px) skewX(-5deg) skewY(-5deg);
  }
  60%{
    transform: rotate(-25deg) translateX(50px) skewX(-5deg) skewY(-5deg);
  }
  80%{
    transform: rotate(-30deg) translateX(50px) skewX(-5deg) skewY(-5deg);
  }
  100%{
    transform: rotate(-25deg) translateX(100px) skewX(-5deg) skewY(-5deg);
    left:420px
    
  }

`;

const BoxWrapper = styled('div')(({ theme }) => ({
  width: '100px',
  height: '100px',
  position: 'absolute',
  left: theme.spacing(0),
  bottom: theme.spacing(0),
  transform: `rotate(-10deg)`,
  animation: `${boxAnimation} 3s linear forwards `,
}));

// ----------------------------------------------------------------------

PassDay.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
  icon: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function PassDay({ title, total, percent, color = 'primary', chartData, sx, ...other }) {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette[color].main],
    chart: { sparkline: { enabled: true } },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    stroke: { width: 4 },
    legend: { show: false },
    grid: { show: false },
    tooltip: {
      enabled: false,
      show: false,
    },
    fill: { gradient: { opacityFrom: 0.56, opacityTo: 0.56 } },
  });

  const [content, setContent] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setContent(
        <>
          <IconWrapperStyle>
            <Iconify
              icon={'bi:flag'}
              color={'#1939b7'}
              width={60}
              height={60}
              // sx={{ position: 'absolute', right: 140, top: 88 }}
            />
          </IconWrapperStyle>
          <BoxWrapper className="box" sx={{ mb: 2, ml: 1 }}>
            <img
              className="mario"
              alt="마리오사진"
              src="https://w.namu.la/s/a6318b50256b2c7d66e31b9a82001b3f6669efbbe331421c3a62d6b356bd2705d177823ad7ef100b508cf1e6474f02c11feae852c0a2677930e5fdfd1cffa20c89b30784c37c8feced196c51eeea4d8af0a986f91a5353984588ef4b970dd5c4d31475aa3d44e0540de1d701a4789761"
            />
          </BoxWrapper>
        </>
      );
    }, 2000);
  }, []);

  return (
    <Card
      sx={{
        width: 1,
        boxShadow: 0,
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={1} sx={{ p: 3 }}>
        <Typography sx={{ typography: 'subtitle2' }}>{title}</Typography>

        <Typography sx={{ typography: 'h3' }}>{total} Days</Typography>
        <Stack direction="row" alignItems="center" flexWrap="wrap">
          <Typography variant="subtitle2" component="span" sx={{ ml: 0.5 }}>
            {fPercent(percent)}
          </Typography>

          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            &nbsp;completed
          </Typography>
        </Stack>
      </Stack>

      <ReactApexChart type="area" series={[{ data: chartData }]} options={chartOptions} height={120} />
      {content}
    </Card>
  );
}
