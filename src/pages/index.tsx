import { NextPage } from 'next';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import AnimationWrapper from 'components/morecules/AnimationWrapper';
import Calendar from 'components/morecules/Calendar';
import WeekHeader from 'components/morecules/WeekHeader';
import PageLayout from 'components/templates/PageLayout';
import { headerHeight } from 'modules/styles/theme';

// TOHO 新宿
// 下高井戸シネマ
// グランドシネマサンシャイン池袋
// 新宿ピカデリー
// ヒューマントラストシネマ渋谷

const Index: NextPage = () => {
  return (
    <PageLayout>
      <Box sx={{ mx: 4, mt: 2, height: '100%' }}>
        {/* <Box sx={{ height: `calc(100% - ${headerHeight}px)` }}> */}
        <Box sx={{ height: '100%' }}>
          <AnimationWrapper>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <WeekHeader />
              <Calendar />
            </Box>
          </AnimationWrapper>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Index;
