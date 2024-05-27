import React, { useEffect, useRef, useState } from "react";
import { Textbox, TextBoxes, Input, TextBtn } from "../Style/Styled";

const TextInputs = () => {
  const [renderer, setRenderer] = useState([]);

  const dateRef = useRef("");
  const itemRef = useRef("");
  const numberRef = useRef("");
  const textRef = useRef("");

  useEffect(() => {
    dateRef.current.focus();
  }, []);
  const newDateRef = () => {};
  const onClick = () => {
    console.log(
      dateRef.current.value,
      itemRef.current.value,
      numberRef.current.value,
      textRef.current.value
    );
  };
  return (
    <>
      <TextBoxes>
        <Textbox>
          <label htmlFor="date">날짜</label>
          <Input type="date" id="date" ref={dateRef} />
        </Textbox>
        <Textbox>
          <label htmlFor="item">항목</label>
          <Input type="text" id="item" placeholder="지출 항목" ref={itemRef} />
        </Textbox>
        <Textbox>
          <label htmlFor="number">금액</label>
          <Input
            type="number"
            id="number"
            placeholder="지출 금액"
            ref={numberRef}
          />
        </Textbox>
        <Textbox>
          <label htmlFor="text">내용</label>
          <Input type="text" id="text" placeholder="지출 내용" ref={textRef} />
        </Textbox>
      </TextBoxes>
      <TextBtn type="button" onClick={onClick}>
        저장
      </TextBtn>
    </>
  );
};
export default TextInputs;
