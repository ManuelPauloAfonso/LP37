import { Container } from "./style"
import Logo from '../../assets/Logo.png'

export default function Footer(){
    return(
        <Container>
            <nav>
                <ul><img src={Logo} alt="" /></ul>
                <ul>
                    <li>Luanda, Cacuaco, rua do <br /> Kikolo da conduta</li>
                    <li>+244 926 612 449</li>
                    <li>paulodencio92gmail.com</li>
                </ul>
                <ul>
                    <li><a href="">Quem somos</a></li>
                    <li> <a href="">Serviços</a> </li>
                    <li> <a href="">Contacto</a> </li>
                
                </ul>
                <ul>
                    <li>Facebook</li>
                    <li>©2022 LP37 Prestação de serviços</li>
                </ul>

            </nav>
        </Container>
    )
}