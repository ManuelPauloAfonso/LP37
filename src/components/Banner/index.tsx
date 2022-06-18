
import { Container } from "./style"
import {Link} from 'react-scroll'

export default function Banner(){

    return(
        <Container>
            <div className="container-banner">
                <h1> <span>LP37</span>  Empresa Privada de Segurança & <br /> Prestação de Serviçoes</h1>
                <p>Prestamos os seguintes serviços. Segurança privada, consultoria e desevolvimento de software, <br /> reparações e venda de acessórios Informatico, reparações de máquinas hidráulicas, climatização, <br /> limpeza</p>
                <div className="div-button">
                    <Link to="hero" spy={true} smooth={true} offset={50} duration={500}  ><button className="btn1" >SAIBA MAIS </button></Link>
                   
                    <Link to="service" spy={true} smooth={true} offset={50} duration={500}  ><button className="btn1" >SERVIÇOS</button></Link>
                </div>

            </div>
        </Container>
    )
}