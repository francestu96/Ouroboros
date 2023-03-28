import { Home } from 'components/templates';
import { Default } from 'components/templates/Default';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Ouroboros | Home">
      <Home/>
    </Default>
  );
};

export default HomePage;