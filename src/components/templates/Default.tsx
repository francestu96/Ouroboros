import Header from 'components/elements/Header';
import Footer from 'components/elements/Footer';
import { FC, ReactNode } from 'react';
import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico"></link>
    </Head>
    <Header />
      {children}
    <Footer />
  </>
);

export default Default;
