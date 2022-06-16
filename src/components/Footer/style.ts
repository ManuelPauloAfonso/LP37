import styled from "styled-components";

export const Container = styled.footer`

background-color: #4175D0;
color: white;
height: 15rem;
border: 2rem solid  #4175D0;
padding: 2rem;

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

@media (max-width: 999px) {

    height: 30rem;

    nav{
        flex-direction: column;
        ul{
            li{
                text-align: center;
            }
        }
    }

    
}


`