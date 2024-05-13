import Testimonials from 'components/elements/Testimonials';
import HowItWorks from 'components/elements/HowItWorks';
import Numbers from 'components/elements/Numbers';
import WhyDex from 'components/elements/WhyDex';
import Hero from 'components/elements/Hero';
import Faq from 'components/elements/Faq';

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <WhyDex></WhyDex>
      <Numbers></Numbers>
      <Testimonials></Testimonials>
      <Faq></Faq>
    </>
  );
};

export default Home;
