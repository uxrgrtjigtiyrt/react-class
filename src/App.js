import React from 'react';
import styled,{keyframes} from 'styled-components';

const move=keyframes`
from{
  opacity:1;
}
to{
  opacity:0;
}
`;

const remove=keyframes`
from{
  opacity:0;
}
to{
  opacity:1;
}
`;

const Img=styled.img`
  animation:${props=>(props.show? remove:move)} 2s linear infinite;`;


const Wrapper=styled.div`
padding:15px;
display:flex;
align-items:center;
label{
  font-size:20px;
  margin-left:10px;
}

div{
  display:none
}`;

const Input=styled.input`
&~div{
  display:${props=>(props.checked?"block":"none")};
}`

function App(){
  let checked=true;
  
  return (
    <Wrapper>
    <Input type="checkbox" id="check1" checked={checked}></Input>
    <label htmlFor="check1">체크해봐</label>
    <div>체크!</div>
    </Wrapper>
  );
}

export default App;