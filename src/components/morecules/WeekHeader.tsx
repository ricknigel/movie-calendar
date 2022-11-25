import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const weekList = ['日', '月', '火', '水', '木', '金', '土'];

const WeekHeader = () => (
  <Box sx={{ display: 'flex', m: 0 }}>
    {weekList.map((day, index) => (
      <Box key={index} sx={{ flex: '1 1 0%' }}>
        <Typography sx={{ textAlign: 'center' }}>{day}</Typography>
      </Box>
    ))}
  </Box>
);

export default WeekHeader;
