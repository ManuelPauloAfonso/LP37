import styled from 'styled-components'

export const Container = styled.header`

margin-top: 2rem;
border-bottom: 1px solid #29292e;
height: 5rem;

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