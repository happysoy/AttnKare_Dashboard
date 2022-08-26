import PropTypes from 'prop-types';
import { Stack, Typography, Box, CircularProgress } from '@mui/material';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

InvoiceAnalytic.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  percent: PropTypes.number,
  total: PropTypes.number,
};

export default function InvoiceAnalytic({ title, times, total, icon, color, percent }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: 1, minWidth: 200 }}>
      <Stack alignItems="center" justifyContent="center" sx={{ position: 'relative' }}>
        <Iconify icon={icon} sx={{ color, width: 24, height: 24, position: 'absolute' }} />

        <CircularProgress variant="determinate" value={percent} size={56} thickness={4} sx={{ color, opacity: 0.48 }} />

        <CircularProgress
          variant="determinate"
          value={100}
          size={56}
          thickness={4}
          sx={{ color: 'grey.50016', position: 'absolute', top: 0, left: 0, opacity: 0.48 }}
        />
      </Stack>

      <Stack spacing={0.5} sx={{ ml: 2 }}>
        <Typography variant="h6">{title}</Typography>

        <Typography variant="subtitle2">
          {total}{' '}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            times
          </Box>
        </Typography>

        <Typography variant="subtitle2" sx={{ color }}>
          {times} 시간
        </Typography>
      </Stack>
    </Stack>
  );
}
