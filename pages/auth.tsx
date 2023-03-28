import { Auth, Default } from "components/templates";
import { NextPage } from "next";
import { getProviders } from "next-auth/react";

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