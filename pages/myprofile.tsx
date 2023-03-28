import { Default } from 'components/templates/Default';
import { NextPage } from 'next';
import { AuthProvider } from 'components/elements';
import { MyProfile } from 'components/templates';

const WithdrawalsPage: NextPage = () => {
  return (
    <Default pageName="MyProfile">
      <AuthProvider>
        <MyProfile/>
      </AuthProvider>
    </Default>
  );
};

export default WithdrawalsPage;