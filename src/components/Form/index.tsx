import { Container } from "./style"



export default function Form(){
    return(
        <Container>
            <div className="container-form">
                <h1>Fale conosco!</h1>
                <p>Preencha o formulario entrar em <br /> contacto caso prefira envie um email</p>
                <form action="">
                    <input type="text" placeholder="digite o seu Nome" />
                    <input type="text" placeholder="digite o seu email:" />
                    <textarea name="" placeholder="escreva sua mensagem">
                    
                    </textarea>   
                    <button type="button">Enviar</button> 
                </form>
            </div>
            <div className="container-info">
                <h1>Não seja tímido</h1>
                <p>Fique a vontade parar entrar em <br /> contacto commigo. Estou sempre <br /> aberto para discutir novos trabalhos</p>
                <nav>
                    <ul>
                    <li><h3>Localização</h3></li>
                    <li>Luanda, Cacuaco, Rua do Kikolo da conduta</li>
                    </ul>
                    <ul>
                        <li><h3>Envie uma mensagem</h3></li>
                        <li>paulodencio92@gmail.com</li>
                    </ul>
                    <ul>
                        <li><h3>Ligue para mim</h3></li>
                        <li>+244 926 621 449</li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}