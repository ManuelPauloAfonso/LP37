import { Container } from "./style"

import Logo from '../../assets/Logo.png'
import Facebook from '../../assets/facebook.svg'

export default function Header(){

    return(
        <Container>
            <nav>
                <img src={Logo} alt="" />
                <ul>
                    <li>Quem somos</li>
                    <li>Serviços</li>
                    <li>Contacto</li>
                    <li><img src={Facebook} alt="" /></li>
                </ul>
            </nav>
        </Container>
    )
}