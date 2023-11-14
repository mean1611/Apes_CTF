import '../styles/globals.css'; // นำเข้า CSS ที่คุณใช้ทั่วไป
import Head from 'next/head';
import { Provider } from 'react-redux'; // เพิ่มนี้
import store from '../store/store'; // เปลี่ยนเส้นทางเป็นเส้นทางที่ถูกต้อง

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* นำเข้า CSS ของฟอนต์จาก Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Goldman&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Provider store={store}> {/* เพิ่ม Provider ที่ครอบ Component */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
