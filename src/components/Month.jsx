import { Months, MonthBtn } from "../Style/Styled";

const Month = () => {
  const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const MnoBtn = month.map((num) => {
    return <MonthBtn>{num}월 </MonthBtn>;
  });

  return (
    <>
      <Months>{MnoBtn}</Months>
    </>
  );
};

export default Month;
