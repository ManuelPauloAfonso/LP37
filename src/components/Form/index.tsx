import { Container } from "./style"
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function Form(){

    const [input, setInput] =  useState('')
    const [inputTextarea, setInputTextarea] = useState('')
    const [inputEmail, setInputEmail] = useState('')


        function enviarEmail(e:any){

            e.preventDefault();
             
            if(input === "" || inputEmail === "" || inputTextarea === ""){
                    
                toast.error("por favor preencha todos os campos")
            
            }else{
                    emailjs.sendForm('gmailMessage', 'template_8ta8a6d', e.target, '-9RDgUCcjqQftjEOd')
                .then((result) => {
                     
                    toast.success("Mensavem enviada com sucesso!");
           
                
                    }, (error) => {
                    alert(error.message)
                });
                e.target.reset();

              }
};
    return(
        <Container id="contact">
            <div className="container-form">
                <h1>Fale conosco!</h1>
                <p>Preencha o formulario entrar em <br /> contacto caso prefira envie um email</p>
                    <ToastContainer
                                position="top-right"
                                autoClose={5000}
                            
                    /> 
               
                <form onSubmit={enviarEmail}>
                    <input type="text" placeholder="digite o seu Nome" name="name" onChange={(e) => setInput(e.target.value)} /> 
                    <input type="email" placeholder="digite o seu email:" name="email" onChange={(e) => setInputEmail(e.target.value)} />
                    <textarea placeholder="escreva sua mensagem" name="message" onChange={(e) => setInputTextarea(e.target.value)}>
                    
                    </textarea> 
                    <div className="button">
                         <button type="submit">Enviar</button> 
                    </div>  
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