import { Container } from "./style"
import img from '../../assets/img.jpg'


export default function About(){
    return(
        <Container id="hero">
            <div className="container-about">
                <h1>Sobre</h1>
                <div className="p">
                <p>Somos a Maior empresa de Prestação de serviçoes e segurança Privada de Angola</p>
                <p>actuando em todas as vertentes da segurança privada, com um leque diferenciado de serviços, conhecida por dar respostas adequadas aos seus projectos, onde a inovação e a flexibilidade das soluções está sempre presente, por forma a que possamos agregar valor aos negócios dos nossos Parceiros.</p>

                </div>
               
                <button>Sobre a LP</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </Container>
    )
}