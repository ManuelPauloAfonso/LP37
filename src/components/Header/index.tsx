import { Container } from "./style"

import Logo from '../../assets/Logo.png'
import Facebook from '../../assets/facebook.svg'
import Banner from "../Banner"

export default function Header(){

    return(
        <Container>
            <div className="bg-img">
                <nav>
                    <img src={Logo} alt="" />
                    <ul>
                        <li> <a href="">Quem somos</a></li>
                        <li> <a href="">Serviços</a></li>
                        <li> <a href="">Contacto</a></li>
                        <li> <a href=""> <img src={Facebook} alt="" /></a></li>
                    </ul>
                </nav>
                <Banner />
            </div>
        </Container>
    )
}