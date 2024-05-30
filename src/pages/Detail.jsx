import { Container, InputGroup } from "../Style/Styled";
const Detail = () => {
  return (
    <Container>
      <InputGroup>
        <label htmlFor="date">날짜</label>
        <input type="text" id="date" placeholder="YYYY-MM-DD" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="item">항목</label>
        <input type="text" id="item" placeholder="지출 항목" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="amount">금액</label>
        <input type="number" id="amount" placeholder="지출 금액" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="description">내용</label>
        <input type="text" id="description" placeholder="지출 내용" />
      </InputGroup>
    </Container>
  );
};

export default Detail;
