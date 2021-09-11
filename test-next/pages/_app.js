import Link from 'next/link';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Link href="/page1">
        <a>page1</a>
      </Link>
      <Link href="/page2">
        <a>page2</a>
      </Link>
      {/* 페이지 컴포넌트를 렌더링한다. */}
      <Component {...pageProps} /> 
    </div>
  );
}