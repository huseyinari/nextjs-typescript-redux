import type { AppProps } from 'next/app'
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
// css
import '@/styles/globals.css'
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// components
import RootLayout from '@/src/components/layouts/RootLayout';
import LoadingPage from '@/src/components/page/LoadingPage';
// redux
import { Provider } from 'react-redux';
import { store } from '@/src/redux/store';



export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const changeLoadingState = (value: boolean, ping: number) => {
    setTimeout(() => setLoading(value), ping);
  }

  useEffect(() => {
    Router.events.on('routeChangeStart',    () => changeLoadingState(true, 0));
    Router.events.on('routeChangeComplete', () => changeLoadingState(false, 500));
    Router.events.on('routeChangeError',    () => changeLoadingState(false, 500));

    return () => {
      Router.events.off('routeChangeStart',    () => changeLoadingState(true, 0))
      Router.events.off('routeChangeComplete', () => changeLoadingState(false, 500))
      Router.events.off('routeChangeError',    () => changeLoadingState(false, 500))
    }
  }, [Router.events])

  if (loading)
    return <LoadingPage />

  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  )
}
