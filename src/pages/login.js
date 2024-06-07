import { Image, Input, Grid, Text, Button } from "@nextui-org/react";


export default function Login() {
    return (
        <>  
            <div style={{ 
                marginTop: '30px', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', flexDirection: 'column', border: '1px solid #ccc', 
                boxShadow: '0 8px 16px rgba(122, 130, 255, 0.7)' , margin: '2rem'}}>
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
                        <Input style={{width: '300px'}} placeholder="Login"></Input>
                        <Input style={{width: '300px' }} css={{marginTop: '15px'}} placeholder="Senha"></Input>
                    </div>
                    
                </div>
                <div style={{marginTop: '40px', }}>
                    <Button style={{backgroundColor: '#7a82ff', fontWeight: 'bolder'}}>
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