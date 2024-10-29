import Setup from 'components/templates/Setup';
import Default from 'components/templates/Default';
import { NextPage } from 'next';

const SetupPage: NextPage = () => {
  return (
    <Default pageName="Ouroboros | Setup">
        <Setup/>
    </Default>
  );
};

export default SetupPage;