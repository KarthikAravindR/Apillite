import React from "react";
import styled from "styled-components";

export function Search(props) {
  const [value, setValue] = React.useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault()
    props.submitHandler(value)
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        placeholder="search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

const Input = styled.input`
  width: 400px;
  height: 30px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid white;
  padding: 0 5px;
  color: white;
  :focus {
    outline: none;
  }
`;
