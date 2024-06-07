import { Image, Input, Grid, Text, Button, Modal } from "@nextui-org/react";
import * as router from '@/pages/api/router';
import React, {  useState } from 'react';
import {FcCancel, FcCheckmark} from 'react-icons/fc'
import Cookies from 'js-cookie';


export default function Login() {

    const [user, setUser] = useState({
        login: '',
        senha: '',
        service: 'login'
    })

    const [alertProps, setAlertProps] = useState({
        mensagem: 'Login ou senha incorretos. Tente novamente!',
        icon: <FcCancel size={80}></FcCancel>
    })

    const closeHandler = () => {
        setVisible(false);
      };

    const [visible, setVisible] = useState(false);

    async function login() {
       try{
            const response = await router.apiPost(user, 'admin');
            if(!response.result){

                alertProps.mensagem = 'Login ou senha incorretos. Tente novamente!',
                alertProps.icon = <FcCancel size={80}></FcCancel>
                
                setVisible(true);
                Cookies.set('user', null)
            }
            else{

                alertProps.mensagem = "Login realizado com sucesso!";
                alertProps.icon = <FcCheckmark size={80}></FcCheckmark>
    
                setVisible(true);

                Cookies.set('user', response.result);

                setTimeout(() => {
                    window.location.href = '/telaCarros';
                }, 1500);
            }
       }catch(e){

       }
    };

    return (
        <>  
            {/* Modal que to usando como alert */}
            <Modal noPadding open={visible} onClose={closeHandler} css={{h:'200px'}}>
            <Modal.Body css={{justifyContent: 'center', alignItems: 'center'}}>
                {alertProps.icon}
                <Text css={{marginBottom: '80px'}}>
                {alertProps.mensagem}
                </Text>
            </Modal.Body>
            </Modal>
            <div style={{ 
                marginTop: '30px', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', flexDirection: 'column', border: '1px solid #ccc', 
                boxShadow: '0 8px 16px rgba(122, 130, 255, 0.7)' , margin: '4rem'}}>
                <div>
                    <div>
                        <Image src="/img/logo.png" alt="Description" css={{ width: '200px', height: '200px' }} />
                    </div>
                </div>
                
                <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:'30px'}}>
                    <Text style={{fontSize: '30px', fontWeight: 'bolder', color: '#7a82ff', fontFamily: 'monospace'}}>Login</Text>
                </div>
            
                <div style={ {display: 'flex', width: '30%', flexDirection:'column', marginLeft: '100px'}}>
                    <div style={{}}>
                        <Input style={{width: '300px'}} placeholder="Login"
                        onChange={(e) => user.login = e.target.value}
                        ></Input>
                        <Input type="password" style={{width: '300px' }} css={{marginTop: '15px'}} placeholder="Senha"
                        onChange={(e) => user.senha = e.target.value}
                        ></Input>
                    </div>
                    
                </div>
                <div style={{marginTop: '40px', }}>
                    <Button style={{backgroundColor: '#7a82ff', fontWeight: 'bolder'}} onPress={login}>
                        Entrar
                    </Button>
                </div>
            
                <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', marginTop: '100px', marginBottom: '20px'}}>
                    <footer style={{ color: 'gray' }}>
                            © Luana Fraga - luanaf.dev@gmail.com
                    </footer>
                </div>
           
            </div>
           
        </>
    );
}