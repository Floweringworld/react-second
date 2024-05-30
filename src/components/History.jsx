import {
  HistoryComponent,
  StHistory,
  DateHistory,
  ItemHistory,
  NumberHistory,
  TextHistory,
  HistoryValue,
} from "../Style/Styled";

const History = ({ posts, month }) => {
  const filterPosts = posts.filter((post) => {
    const date = new Date(post.date).getMonth() + 1;
    return date === month;
  });
  return (
    <StHistory>
      {filterPosts.map((list) => (
        <HistoryComponent key={list.id}>
          <HistoryValue>
            <ItemHistory>{list.item}</ItemHistory>
            <DateHistory>{list.date}</DateHistory>
          </HistoryValue>
          <HistoryValue>
            <TextHistory>{list.text}</TextHistory>
            <NumberHistory>{list.number}</NumberHistory>
          </HistoryValue>
        </HistoryComponent>
      ))}
    </StHistory>
  );
};

export default History;
