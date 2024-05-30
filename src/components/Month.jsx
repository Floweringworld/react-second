import { Months, MonthBtn } from "../Style/Styled";

const Month = ({ month, setMonth }) => {
  const Month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const MnoBtn = Month.map((num) => {
    return (
      <MonthBtn
        key={num}
        onClick={() => {
          setMonth(num);
        }}
      >
        {num}월{" "}
      </MonthBtn>
    );
  });

  return (
    <>
      <Months>{MnoBtn}</Months>
    </>
  );
};

export default Month;
