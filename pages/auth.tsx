import { Auth, Default } from "components/templates";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Default pageName="Ouroboros | Sing In">
      <Auth/>
    </Default>
  );
};

export default HomePage;