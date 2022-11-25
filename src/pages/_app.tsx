import { useEffect } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';

// import MyApolloProvider from 'components/organisms/ApolloProvider';
import BaseLayout from 'components/templates/BaseLayout';
import createEmotionCache from 'modules/styles/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
type Props = AppProps & {
  emotionCache?: EmotionCache
};

const MyApp = (props: Props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router
  } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <RecoilRoot>
      {/* <MyApolloProvider> */}
        <CacheProvider value={emotionCache}>
          <Head>
            <title>{'映画カレンダー'}</title>
          </Head>
          <BaseLayout>
            <AnimatePresence initial mode="wait">
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </BaseLayout>
        </CacheProvider>
      {/* </MyApolloProvider> */}
    </RecoilRoot>
  );
};

export default MyApp;
