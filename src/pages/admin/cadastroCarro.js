import { Text, Grid, Progress, Button, Spacer } from "@nextui-org/react";
import { useState } from "react";
import {BsCarFront, BsImageFill} from 'react-icons/bs';
import {TfiWrite} from 'react-icons/tfi';


export default function CadastroCarro() {

    const [carro, setCarro] = useState({
        marca: '',
        modelo_versao: '',
        ano_fabricacao: '',
        ano_modelo: '',
        quilometragem: '',
        combustivel_id: '',
        cambio: '',
        fornecedor: '',
        valor: '',
        gnv: '',
        //info adc:
        vendido: '',
        devolvido: '',
        renavam: '',
        chassi: '', 
        leiloado: '',
        observacoes: ''
    });


    function InformacoesBasicas() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
    
                <h2>Informações Basicas</h2>    
            </div>
        )
        
    }
    
    function InformacoesAdicionais() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
    
                <h2>Informações Adicionais</h2>    
            </div>
        )
    }
    
    function Imagens() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
    
                <h2>Imagens</h2>    
            </div>
        )
    }


    const [activeStep, setActiveStep] = useState(1)
    
    const[stepperProps] = useState({
        buttonColor1: 'warning',
        buttonColor2: '$gray400',
        buttonColor3: '$gray400',
        lineColor1: 'gray',
        lineColor2: 'gray',
        iconColor1: 'gray',
        iconColor2: 'gray',
    })
    
    function getSectionComponent() {
        switch(activeStep) {
          case 1: 

            stepperProps.lineColor1 = 'gray'
            stepperProps.iconColor1 = 'gray'
            stepperProps.buttonColor2 = '$gray400'
            
            stepperProps.lineColor2 = 'gray'
            stepperProps.iconColor2 = 'gray'
            stepperProps.buttonColor3 = '$gray400'

            return <InformacoesBasicas/>;
          case 2: 

            stepperProps.lineColor2 = 'gray'
            stepperProps.iconColor2 = 'gray'
            stepperProps.buttonColor3 = '$gray400'

            stepperProps.lineColor1 = '#F5A524'
            stepperProps.iconColor1 = 'white'
            stepperProps.buttonColor2 = 'warning'

            return <InformacoesAdicionais/>;
          case 3: 

            stepperProps.lineColor2 = '#F5A524'
            stepperProps.iconColor2 = 'white'
            stepperProps.buttonColor3 = 'warning'

            return <Imagens/>;
          default: return null;
        }
    }

    return (
        <>  
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '80px'}}>

                <Text h1    
                    size={50}
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                >
                    Cadastro de Carro
                </Text>

            </div>

            <div style={{ display: 'flex', alignItems: 'center' , marginTop: '20px', justifyContent: 'center'}}>
            
                <Button
                    rounded
                    auto
                    animated
                    style={{ 
                       
                        margin: '0.3rem' 
                    }}
                    size="md"
                    color={stepperProps.buttonColor1}   
                    icon={<BsCarFront size={25}></BsCarFront>}
                />
                   
                <div
                    style={{
                    width: '80px',
                    height: '1.5px',
                    backgroundColor: stepperProps.lineColor1,
                    }}
                />
                <Button
                    rounded
                    auto
                    animated
                    style={{ 
                       
                        margin: '0.3rem' 
                    }}
                    size="md"
                    color={stepperProps.buttonColor2}   
                    icon={<TfiWrite size={25} color={stepperProps.iconColor1}></TfiWrite>}
                />
                <div
                    style={{
                    width: '80px',
                    height: '1.5px',
                    backgroundColor: stepperProps.lineColor2,
                    }}
                />
                <Button
                    rounded
                    auto
                    animated
                    style={{ 
                       
                        margin: '0.3rem' 
                    }}
                    size="md"
                    color={stepperProps.buttonColor3}   
                    icon={<BsImageFill size={25} color={stepperProps.iconColor2}></BsImageFill>}
                />
                            
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
             {getSectionComponent()}
            </div>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '400px'}}>
                <Button onPress={() => setActiveStep(activeStep + 1)}>{activeStep != 3? 'Próximo' : 'Finalizar cadastro'}</Button>
                <Spacer y={1}></Spacer>
                {activeStep > 1? 
                    <Button onPress={() => setActiveStep(activeStep - 1)}>Anterior</Button>
                    : ''
                }
            </div>
        </>
    );
}
