import { FC } from 'react';

import { styled, Toolbar } from '@mui/material';
import { Box } from '@mui/system';

import AnimationWrapper from 'components/morecules/AnimationWrapper';
import AppHeader from 'components/organisms/AppHeader';
import { headerHeight, progressBarHeight } from 'modules/styles/theme';
import { ChildrenProp } from 'modules/types/props';

const Main = styled('main')(() => ({
  height: `calc(100% - ${headerHeight}px - ${progressBarHeight}px)`,
}));

type Props = ChildrenProp & {
  isAnimation?: boolean;
};

const PageLayout: FC<Props> = ({ children, isAnimation = true }) => {
  return (
    <Box sx={{ height: '100%' }}>
      <AppHeader />
      <Main>
        <Toolbar />
        <AnimationWrapper isAnimation={isAnimation}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {children}
          </Box>
        </AnimationWrapper>
      </Main>
    </Box>
  );
};

export default PageLayout;
