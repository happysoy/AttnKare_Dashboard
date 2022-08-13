import PropTypes from 'prop-types';
// @mui
import { Grid, Stack } from '@mui/material';
//

// ----------------------------------------------------------------------

Profile.propTypes = {
  myProfile: PropTypes.object,
  posts: PropTypes.array,
};

export default function Profile() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <h1>하이</h1>
      </Grid>
    </Grid>
  );
}
