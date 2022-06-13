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
                        <li>Quem somos</li>
                        <li>Serviços</li>
                        <li>Contacto</li>
                        <li><img src={Facebook} alt="" /></li>
                    </ul>
                </nav>
                <Banner />
            </div>
        </Container>
    )
}