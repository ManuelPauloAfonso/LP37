import { Container } from "./style"

import Logo from '../../assets/Logo.png'
import Facebook from '../../assets/facebook.svg'
import Banner from "../Banner"

import {Link} from 'react-scroll'

export default function Header(){

    return(
        <Container>
            <div className="bg-img">
                <nav>
                    <img src={Logo} alt="" />
                    <ul>
                        <li> <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}  >Quem somos</Link></li>
                        
                        <li> <Link to="service" spy={true} smooth={true} offset={-100} duration={500}  >Serviços</Link></li>

                        <li> <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}  >Contacto</Link></li>

                        <li> <Link to="/" spy={true} smooth={true} offset={-150} duration={500}  ><img src={Facebook} alt="" /></Link></li>  
                    </ul>
                </nav>
                <Banner />
            </div>
        </Container>
    )
}