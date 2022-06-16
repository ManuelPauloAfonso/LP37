import { Container } from "./style"
import emailjs from '@emailjs/browser';



export default function Form(){

        function enviarEmail(e:any){

            e.preventDefault();

            emailjs.sendForm('gmailMessage', 'template_8ta8a6d', e.target, '-9RDgUCcjqQftjEOd')
              .then((result) => {
                    alert("mensagem enviada com sucesso")                  
              }, (error) => {
                 alert(error.message)
              });
              e.target.reset();

            
 };
    return(
        <Container>
            <div className="container-form">
                <h1>Fale conosco!</h1>
                <p>Preencha o formulario entrar em <br /> contacto caso prefira envie um email</p>
                <form onSubmit={enviarEmail}>
                    <input type="text" placeholder="digite o seu Nome" name="name" />
                    <input type="text" placeholder="digite o seu email:" name="email" />
                    <textarea placeholder="escreva sua mensagem" name="message">
                    
                    </textarea>   
                    <button type="submit">Enviar</button> 
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