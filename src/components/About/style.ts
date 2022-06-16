import styled from "styled-components";


export const Container = styled.section`
margin-top: 10rem;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
padding: 2rem;

h1{
    color: #4175D0;
    font-size: 2.5rem;

}
img{
    width: 35rem;
    opacity: 0.7;
    background-color: black;
    border-radius: 10px;
}
.p{
    margin-top: 3rem;
}


.container-about{
    max-width: 28rem;
    line-height: 2rem;
}
button{
    border: none;
    background-color: #4175D0;
    width: 10rem;
    height: 2.500rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;
    color: white;
    border-radius: 6px;
    margin-top: 1rem;

    cursor: pointer;

    &:hover{
        filter: brightness(0.9);
    }

}

@media (max-width: 999px) {

    div{
        img{
            width: 100%;
            margin-top: 5rem;
        }
    }
    .container-about{
        text-align: center;

    }
    
}



`