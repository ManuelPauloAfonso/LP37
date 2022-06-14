import styled, { keyframes, Keyframes } from 'styled-components';


const rodando = keyframes`

    0%{
        transform: rotate(0)

    }
    100%{
        transform: rotate(360deg)
        
    }
`;
const body = styled.body`

overflow: hidden;

`
export const Container = styled.div`

body{
    overflow: hidden;

}


height: 100vh;
width: 100%;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
background-color: white;
display: flex;
align-items: center;
justify-content: center;

&.visible{ display: flex;}
&.notVisible{display: none}


`;

export const ContainerCircle = styled.div`
height: 100px;
width: 100px;
border:  8px solid white;
border-radius: 50%;
border-left:  8px solid  #4175D0;


animation-name: ${rodando};
animation-duration: 1s;
animation-iteration-count: infinite;


`;