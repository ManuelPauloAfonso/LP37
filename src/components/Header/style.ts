import styled from 'styled-components'
import banner from '../../assets/banner.png'

export const Container = styled.header`

margin-top: 2rem;
border-bottom: 1px solid #29292e;
height: 5rem;
.bg-img{
    background-image: url(${banner});
    height: 39.688rem;


}


nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    ul{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        li{
            margin-left: 1rem;
        }
        img{
            background-color: black;
        }
    }
}


`