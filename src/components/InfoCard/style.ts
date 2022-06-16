import styled from "styled-components";

export const Container = styled.section`
margin-top: 3rem;

h1{
   text-align: center;
    color: #4175D0;
    font-size: 2.5rem;


}
.p{
    text-align: center;
    margin-top: 1rem;
}

.container-card{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 4rem;
    div{
        p{
            margin-top: 1rem;
            color: rgba(0, 0, 0, 0.6);
            line-height: 1.25rem;
        }
        h2{
            margin-top: 1rem;

        }
    }
    .card{
        
        background: rgba(65, 117, 208, 0.04);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        width: 6.25rem;
        height: 6rem;
        img{
            margin-left: 1.75rem;
            margin-top: 2rem;

        }

    }
}


`