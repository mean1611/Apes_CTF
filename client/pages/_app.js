import "../styles/globals.css"; // นำเข้า Global CSS ที่นี่

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;