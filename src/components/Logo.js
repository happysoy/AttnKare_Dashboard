import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function Logo() {
  const logo = (
    <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center' }}>
      <Box
        component="img"
        src="https://static.wixstatic.com/media/9f4e3e_96061573b82a4e6eaf84b7cfa27dd82c~mv2.png/v1/fill/w_130,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_transparent_back.png"
        sx={{ width: '100%', height: '65%' }}
      />
    </Box>
  );

  return <RouterLink to="/">{logo}</RouterLink>;
}
