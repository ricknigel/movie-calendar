import { FC } from 'react';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type Props = {
  day: Date;
};

const Day: FC<Props> = ({ day }) => {
  return (
    <Box sx={{
      flex: '1 1 0%',
      minWidth: 0,
      borderRight: (theme) => `0.5px solid ${theme.palette.divider}`
    }}>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        {day.getDate() === 1 ? (
          `${day.getMonth() + 1} 月 ${day.getDate()} 日`
        ) : (
          day.getDate()
        )}
      </Typography>
    </Box>
  );
};

export default Day;
