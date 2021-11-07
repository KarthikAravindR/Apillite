import styled from 'styled-components'

import './App.css';
import { Header } from './common/Header/Header';
import { Sidebar } from './common/Sidebar/Sidebar';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar />
        <ContentWrapper>
          Content
        </ContentWrapper>
      </Main>
    </Container>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  box-sizing: border-box;
  display: flex;
`

const ContentWrapper = styled.div`
  flex: 1 1 auto;
`