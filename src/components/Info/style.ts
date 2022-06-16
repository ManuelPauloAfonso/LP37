import styled from "styled-components";


export const Container = styled.section`

background-color: #4175D0;
height: 10rem;
color: white;
margin-top: 34rem;
padding: 2rem;

nav{

   
    ul{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        gap: 2.5rem;
        padding-top: 2rem;
        color: rgba(255, 255, 255, 0.5);
        font-size: 1.25rem;

        .li1{
            font-weight: 600;
            line-height: 1.813rem;
            font-size: 1.5rem;
            color: white;
        }

    }
}

@media (max-width: 999px) {
    
    
        height: 25rem;


    ul{
        flex-direction: column;
    }
    
}



`