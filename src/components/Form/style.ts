import styled from "styled-components";
import banner from '../../assets/image.png'

export const Container = styled.section`

display: flex;
justify-content: center;
align-items: center;
gap: 9rem;
margin-top: 6rem;
background-image: url(${banner});
height: 40rem;




h1{
    color: #4175D0;

}
h3{
    color: white;
    
}
li{
    color: white;
}
p{
    color: white;
}

form{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;

    input{
        width: 28rem;
        height: 2.500rem;
        padding-left: 1rem;
        border-radius: 5px;
        font-weight: 500;
        border: none;
    }
    textarea{
        height: 4rem;
        padding-left: 1rem;
        height: 15rem;
        border-radius: 5px;
        font-weight: 500;
        border: none;
    }
    button{
        width: 18rem;
        height: 2.500rem;
        border-radius: 5px;
        background-color: #4175D0;
        border: none;
        color: white;
        font-weight: 700;
        transition: filter 0.2s;
        cursor: pointer;

        &:hover{
            filter: brightness(0.9);
        }


    }
}
.container-info{

    nav{
        margin-top: 2rem;
        ul{
            margin-top: 2rem;

            li{
                margin-top: 0.500rem;
            }
        }
    }
    
}




`