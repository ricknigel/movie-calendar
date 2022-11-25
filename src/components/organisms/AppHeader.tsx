import { FC } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

const AppHeader: FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      elevation={1}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {'Movie Calendar'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
