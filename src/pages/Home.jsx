import TextInputs from "../components/TextInputs";
import Month from "../components/Month";
import { Main } from "../Style/Styled";
import History from "../components/History";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState(() => {
    const localDate = localStorage.getItem("inputValue");
    return localDate ? JSON.parse(localDate) : [];
  });
  useEffect(() => {
    localStorage.setItem("inputValue", JSON.stringify(posts));
  }, [posts]);

  const [month, setMonth] = useState(1);
  return (
    <>
      <Main>
        <TextInputs setPosts={setPosts} />
        <Month month={month} setMonth={setMonth} />
        <History posts={posts} month={month} />
      </Main>
    </>
  );
};

export default Home;
