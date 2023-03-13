import { Faq, Hero, HowItWorks, SupportedChains, Testimonials } from 'components/elements';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ouroboros | Home</title>
      </Head>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <SupportedChains></SupportedChains>
      <Testimonials></Testimonials>
      <Faq></Faq>
    </>
  );
};

export default Home;
