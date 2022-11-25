import { FC } from 'react';

import { CssBaseline, styled, ThemeProvider } from '@mui/material';

import { myTheme } from 'modules/styles/theme';
import { ChildrenProp } from 'modules/types/props';

const RootDiv = styled('div')({
  display: 'flex'
});

const ScreenSize = styled('div')({
  width: '100%',
  height: '100vh'
});

const BaseLayout: FC<ChildrenProp> = ({ children }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <RootDiv>
        <ScreenSize>{children}</ScreenSize>
      </RootDiv>
    </ThemeProvider>
  );
};

export default BaseLayout;
