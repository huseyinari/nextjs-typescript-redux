import type { AppProps } from 'next/app'
import { useEffect } from 'react';
// css
import '@/styles/globals.css'
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// components
import RootLayout from '@/src/components/layouts/RootLayout';
// redux
import { Provider } from 'react-redux';
import { store } from '@/src/redux/store';



export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  )
}
