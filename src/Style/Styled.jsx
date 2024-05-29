import styled from "styled-components";

export const Main = styled.div`
  padding: 2rem;
  margin: 0px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 800px;
`;
//TextInput
export const TextBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  gap: 20px;
  padding: 20px;
  font-size: 15px;
  margin-top: 20px;
`;
export const Textbox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid gray;
  padding: 7px 5px;
`;

export const TextBtn = styled.button`
  border-radius: 10px;
  padding: 10px 0px;
  background: none;
  color: white;
  border: 2px solid white;
  margin-top: 2px;
  font-style: 20px;
`;
//Month
export const Months = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;
export const MonthBtn = styled.button`
  width: 100px;
  height: 60px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  box-shadow: 1px 1px 2px gray;
`;

//history
export const StHistory = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  gap: 20px;
  padding: 20px;
  font-size: 15px;
  margin-top: 20px;
`;

export const HistoryComponent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 1px 1px 3px gray;
  padding: 10px;
  gap: 10px;
`;

export const HistoryValue = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DateHistory = styled.p`
  font-size: 12px;
  text-align: right;
`;

export const ItemHistory = styled.p`
  font-size: 12px;
`;

export const NumberHistory = styled.strong`
  font-size: 20px;
  color: blue;
`;
export const TextHistory = styled.strong`
  font-size: 20px;
  color: blue;
`;
