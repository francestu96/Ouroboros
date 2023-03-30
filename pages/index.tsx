import { Default, Home } from 'components/templates';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Ouroboros | Home">
      <Home/>
    </Default>
  );
};

export default HomePage;