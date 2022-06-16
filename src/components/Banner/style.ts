
import styled from "styled-components";


export const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;
gap: 2.25rem;
margin-top: 7.188rem;
padding: 2rem;



.container-banner{
   p{
    text-align: center;
    margin-top: 2.25rem;
    color: white;
   }
   h1{
    font-size: 2.5rem;
    text-align: center;
    color: white;
    span{
        color: #4175D0;
    }
   }
   .div-button{
     margin-top: 4rem;
     display: flex;
     justify-content: center;


   }
   button{
        background: #4175D0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        width: 16rem;
        height: 4rem;
        border: none;
        margin-left: 3.813rem;
        color: white;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.25rem;

        cursor: pointer;

        &:hover{
            filter: brightness(0.9);
        }

       

        
   }

}
@media (max-width: 999px) {

  .div-button{
      display: none;

  }
  button{
    display: none;
  }
  .container-banner{
    margin-top: -8rem;
  }
}

`