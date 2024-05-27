import TextInputs from "../components/TextInputs";
import Month from "../components/Month";
import { Main } from "../Style/Styled";
import History from "../components/History";

const Home = () => {
  return (
    <>
      <Main>
        <TextInputs />
        <Month />
        <History />
      </Main>
    </>
  );
};

export default Home;
