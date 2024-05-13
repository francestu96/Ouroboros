import AuthKey from 'components/templates/AuthKey';
import Default from 'components/templates/Default';
import { NextPage } from 'next';

const AuthKeyPage: NextPage = () => {
  return (
    <Default pageName="Ouroboros | Auth Key">
        <AuthKey/>
    </Default>
  );
};

export default AuthKeyPage;