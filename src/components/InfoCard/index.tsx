
import { Container } from "./style"


import img1 from '../../assets/1.svg'
import img2 from '../../assets/2.svg'
import img3 from '../../assets/3.svg'
import img4 from '../../assets/4.svg'



export default function InfoCard(){
    return(
        <Container>
            <div>
                     <h1>Nossos Serviços</h1>
                     <p className="p">Conheça Todos os Nossos Serviçoes que prestamos com a melhor qualidade</p>

            </div>
            <div className="container-card">
                <div>
                    <div className="card">
                     <img src={img1} alt="" />
                    </div>
                    <h2>Segurança Privada</h2>
                    <p>Protegemos todo <br /> tipo de pratimonio <br /> e eventos</p>
                </div>
                <div>
                    <div className="card">
                        <img src={img2} alt="" />
                    </div>
                    <h2>Informatica</h2>
                    <p>Consultoria, reparação de <br /> computadores e venda de <br /> acessorio informatico</p>
                </div>
                <div>
                    <div className="card">
                     <img src={img3} alt="" />
                    </div>
                    <h2>Mecanica</h2>
                    <p>reparação de todos <br /> tipo de maquina <br /> Hidraulica</p>
                </div>
                <div>
                    <div className="card">
                       <img src={img4} alt="" />
                    </div>
                    <h2>Climatização</h2>
                    <p>Assistencia Tecnic, <br /> Montagem Reparação <br /> de todo tipo de A/C</p>
                </div>
            </div>
        </Container>
    )
}