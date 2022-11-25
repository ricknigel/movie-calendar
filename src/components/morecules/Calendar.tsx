import { Box } from '@mui/system';
import { eachDayOfInterval, eachWeekOfInterval, endOfMonth, endOfWeek, startOfMonth } from 'date-fns';

import Day from 'components/morecules/Day';

const Calendar = () => {
  const getCalendarList = (date: Date) => {
    const sundays = eachWeekOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date)
    });
    return sundays.map(sunday => (
      eachDayOfInterval({
        start: sunday,
        end: endOfWeek(sunday)
      })
    ));
  };
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 0%',
      m: 0,
      borderTop: (theme) => `0.5px solid ${theme.palette.divider}`,
      borderLeft: (theme) => `0.5px solid ${theme.palette.divider}`
    }}>
      {getCalendarList(new Date()).map((week, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            flex: '1 1 0%',
            m: 0,
            borderBottom: (theme) => `0.5px solid ${theme.palette.divider}`
          }}
        >
          {week.map((day, index) => (
            <Day key={index} day={day} />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Calendar;
