// darkScrollbarを微調整した
// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/darkScrollbar/index.ts
export const customScrollbar = () =>  {
  const options = {
    track: '#2b2b2b',
    thumb: '#6b6b6b',
    active: '#959595',
  };
  return {
    scrollbarColor: `${options.thumb} ${options.track}`,
    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
      backgroundColor: options.track,
      width: 10,
    },
    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      backgroundColor: options.thumb,
      minHeight: 24,
      border: `2px solid ${options.track}`,
    },
    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
      backgroundColor: options.track,
    },
  };
};
