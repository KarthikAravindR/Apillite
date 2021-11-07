import React from "react";
import styled from "styled-components";

import { Search } from "../../widgets/Search/Search";

export function Header() {
  const submitHandler = (value) => {
    console.log(value)
  } 
  return (
    <Container>
      <Search submitHandler={submitHandler}/>
    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  background-color: #2b092a;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
