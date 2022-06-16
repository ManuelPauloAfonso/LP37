
import { Container } from "./style"
export default function Banner(){

    return(
        <Container>
            <div className="container-banner">
                <h1> <span>LP37</span>  Empresa Privada de Segurança & <br /> Prestação de Serviçoes</h1>
                <p>Prestamos os seguintes serviços. Segurança privada, consultoria e desevolvimento de software, <br /> reparações e venda de acessórios Informatico, reparações de máquinas hidráulicas, climatização, <br /> limpeza</p>
                <div className="div-button">
                    <button className="btn1" >SAIBA MAIS </button>
                    <button className="btn">SERVIÇOS</button>
                </div>
            </div>
        </Container>
    )
}