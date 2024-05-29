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
  return (
    <>
      <Main>
        <TextInputs setPosts={setPosts} />
        <Month posts={posts} />
        <History posts={posts} />
      </Main>
    </>
  );
};

export default Home;
