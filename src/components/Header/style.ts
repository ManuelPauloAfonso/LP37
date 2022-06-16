import styled from 'styled-components'
import banner from '../../assets/banner.png'

export const Container = styled.header`

height: 5rem;


.bg-img{
    background-image: url(${banner});
    height: 39.688rem;


}
a{
    text-decoration: none;
    color: white;

    cursor: pointer;

        &:hover{
            filter: brightness(0.9);
    }

    
}


nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 1rem;

    ul{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        li{
            margin-left: 1rem;
            color: white;
        }
        img{
        }
    }
}


`