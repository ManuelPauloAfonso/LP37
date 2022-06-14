import { useState, useEffect } from 'react';
import {Container, ContainerCircle} from './style'

export default function Loading(){
    const [load, setLoad] = useState(true);
    useEffect(()=>{
        setTimeout(() => setLoad(false), 6000)
      },[])
  

    return(<>
      {load && 
        <Container >
          <ContainerCircle>
          </ContainerCircle>
        </Container>
      }

    </>)
}