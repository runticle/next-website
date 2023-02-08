import Page from '@/components/Page'
import dynamic from 'next/dynamic';

function App({ Component, pageProps, ...appProps }) {
  if (['/thebirds'].includes(appProps?.router?.state?.pathname)) {
    return (
      <Component {...pageProps} />
    )
  }

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

// TODO REMOVE LATER THIS OBSELETES SERVER SIDE RENDERING EVERYWHERE
// JUST DISABLE ON THEBIRDS!!
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});