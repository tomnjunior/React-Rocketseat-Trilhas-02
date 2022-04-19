import styled from 'styled-components';


const Title = styled.h1`
  font-size: 64px;
  color: #000000;
`


export function App() {
  return (
    <div className="App">
      <Title className='title'>Hello World</Title>
    </div>
  );
}

