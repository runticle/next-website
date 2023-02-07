import Page from '@/components/Page'

export default function App({ Component, pageProps, ...appProps }) {
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
