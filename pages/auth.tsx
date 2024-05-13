import Default from "components/templates/Default";
import { getProviders } from "next-auth/react";
import Auth from "components/templates/Auth";
import { NextPage } from "next";

const HomePage: NextPage = (props) => {
  return (
    <Default pageName="Ouroboros | Sing In">
      <Auth {...props}/>
    </Default>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}

export default HomePage;