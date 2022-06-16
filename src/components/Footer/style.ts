import styled from "styled-components";

export const Container = styled.footer`

background-color: #4175D0;
color: white;
height: 8.500rem;

a{
    text-decoration: none;
    color: white;

    cursor: pointer;

    &:hover{
        filter: brightness(0.10);
    }

}

nav{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;

    li{
        margin-top: 1rem;
    }

}


`