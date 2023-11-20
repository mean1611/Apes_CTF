import '../styles/globals.css'; // นำเข้า CSS ที่คุณใช้ทั่วไป
import Head from 'next/head';

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
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
