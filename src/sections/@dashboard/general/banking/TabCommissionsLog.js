import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function TabCommissionsLog({ title }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardHeader title={title} />
      <CardContent
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none',
          },
        }}
      >
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 350 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="8주차" {...a11yProps(0)} />
            <Tab label="7주차" {...a11yProps(1)} />
            <Tab label="6주차" {...a11yProps(2)} />
            <Tab label="5주차" {...a11yProps(3)} />
            <Tab label="4주차" {...a11yProps(4)} />
            <Tab label="3주차" {...a11yProps(5)} />
            <Tab label="2주차" {...a11yProps(6)} />
            <Tab label="1주차" {...a11yProps(7)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box sx={{ marginBottom: 5 }}>
              <Typography component="div" variant="h5">
                2022.08.21(일)
              </Typography>
              <Typography component="div" variant="body2">
                수행 완료
              </Typography>
              <Typography component="span" />
            </Box>
            <Box sx={{ marginBottom: 5 }}>
              <Typography component="div" variant="h5">
                2022.08.19(금)
              </Typography>
              <Typography component="div" variant="body2">
                수행 완료
              </Typography>
              <Typography component="span" />
            </Box>
            <Box sx={{ marginBottom: 5 }}>
              <Typography component="div" variant="h5">
                2022.08.18(목)
              </Typography>
              <Typography component="div" variant="body2">
                수행 완료
              </Typography>
              <Typography component="span" />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}
