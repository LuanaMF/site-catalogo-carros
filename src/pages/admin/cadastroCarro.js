import SelectCliente from "@/components/SelectCliente";
import { Text, Input, Card, Button, Spacer, Grid, Checkbox, Textarea} from "@nextui-org/react";
import { useState } from "react";
import {BsCarFront, BsImageFill, BsPersonCircle, BsImage} from 'react-icons/bs';
import ModalIncluirCliente from "@/components/ModalIncluirCliente";


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
        vendido: '',
        devolvido: '',
        renavam: '',
        chassi: '', 
        leiloado: '',
        observacoes: ''
    });

    const [vendedorCadastrado, setVendedorCadastrado] = useState('')

    const [openModal, setOpenModal] = useState('')

    function Carro() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                
                <Card>
                    <Card.Header css={{justifyContent: 'center'}}>
                        <Text b color='$gray800' size={25}>Dados do carro</Text>  
                        
                    </Card.Header>

                    <Card.Divider></Card.Divider>

                    <Card.Body >
                        <Grid.Container gap={2}>
                            <Grid xs={6}>
                                <Input
                                    aria-label="marca"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Marca"
                                    required
                                    onChange={(e) => carro.marca = e.target.value}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <Input
                                    aria-label="modelo/versao"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Modelo/Versão"
                                    required
                                    onChange={(e) => carro.modelo_versao = e.target.value}
                                />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={2}>
                            <Grid xs={6}>
                                <Input
                                    aria-label="anoFabricacao"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Ano de Fabricação"
                                    required
                                    onChange={(e) => carro.ano_fabricacao = e.target.value}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <Input
                                    aria-label="ano modelo"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Ano modelo"
                                    required
                                    onChange={(e) => carro.ano_modelo = e.target.value}
                                />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={2}>
                            <Grid xs={6}>
                                <Input
                                    aria-label="quilometragem"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Quilometragem"
                                    required
                                    onChange={(e) => carro.quilometragem = e.target.value}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <Input
                                    aria-label="valor"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Valor"
                                    required
                                    onChange={(e) => carro.valor = e.target.value}
                                />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={2}>
                            <Grid xs={6}>
                                <Input
                                    aria-label="renavam"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Renavam"
                                    required
                                    onChange={(e) => carro.renavam = e.target.value}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <Input
                                    aria-label="chassi"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Chassi"
                                    required
                                    onChange={(e) => carro.chassi = e.target.value}
                                />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container css={{marginTop: '10px'}} gap={0.5}>
                            <Grid xs={2.5}>
                                <Checkbox css={{marginLeft: '18px'}} size="sm"
                                    onChange={(e) => e? carro.gnv = 1 : carro.gnv = 0}
                                >GNV</Checkbox>
                            </Grid>
                            <Grid xs={3}>
                                <Checkbox onChange={(e) => e? carro.vendido = 1 : carro.vendido = 0}
                                size="sm">Vendido</Checkbox>
                            </Grid>
                            <Grid xs={3}>
                                <Checkbox size="sm"
                                    onChange={(e) => e? carro.devolvido = 1 : carro.devolvido = 0}
                                >Devolvido</Checkbox>
                            </Grid >
                            <Grid xs={3}>
                                <Checkbox size="sm"
                                    onChange={(e) => e? carro.leiloado = 1 : carro.leiloado = 0}
                                >Leiloado</Checkbox>
                            </Grid>
                        </Grid.Container>
                        <Textarea
                            aria-label="observações"
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Observações"
                            required
                            css={{marginTop: '15px'}}
                            onChange={(e) => carro.observacoes = e.target.value}
                        />
                    </Card.Body>

                </Card>
            </div>
        )
        
    }
    
    function Fornecedor() {
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Grid.Container gap={2} >
                        <Grid xs={12} css={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                            <Text blockquote>O vendedor deste carro já é cadastrado no sistema?</Text>
                            
                        </Grid>
                        <Grid xs={12} css={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Button color="secondary" auto onPress={() => setVendedorCadastrado(true)}>
                                    Sim
                                </Button>
                                <Spacer x={0.5} />
                                <Button color="secondary" auto onPress={() => setOpenModal(true)}>
                                    Não
                                </Button>
                        </Grid>
                        <Grid xs={12} css={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            

                            {vendedorCadastrado? 

                                <SelectCliente primeiraOpcao={"Selecione o vendedor"}></SelectCliente> 
                            : 
                                
                            ''}

                        </Grid>

                    </Grid.Container>
                </div>
                <ModalIncluirCliente
                    mostrarBotao={false}
                    open={openModal}
                    close={setOpenModal}
                ></ModalIncluirCliente>

            </>
        )
    }
    
    const [mainImagePreview, setMainImagePreview] = useState(null);
    const [secondaryImagePreviews, setSecondaryImagePreviews] = useState(Array(4).fill(null));

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setMainImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
        } else {
        setMainImagePreview(null);
        }
    };

    const handleSecondaryImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newPreviews = [...secondaryImagePreviews];
            newPreviews[index] = e.target.result;
            setSecondaryImagePreviews(newPreviews);
        };
        reader.readAsDataURL(file);
        } else {
        const newPreviews = [...secondaryImagePreviews];
        newPreviews[index] = null;
        setSecondaryImagePreviews(newPreviews);
        }
    };

    function Imagens() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                
                <div className="file-upload">
                    <label htmlFor="main-image">
                        <div className="upload-box" style={{marginLeft: '35px', width: '600px'}}>
                        <BsImage color="gray"></BsImage>
                        <input
                            type="file"
                            id="main-image"
                            accept="image/*"
                            onChange={handleMainImageChange}
                        />
                        {mainImagePreview && <img src={mainImagePreview} alt="Preview" />}
                        </div>
                    </label>
                <div className="secondary-images">
                    {Array.from({ length: 4 }, (_, index) => (
                    <label key={index} htmlFor={`secondary-image${index + 1}`} className="upload-box">
                        <BsImage color="gray"></BsImage>
                        <input
                        type="file"
                        id={`secondary-image${index + 1}`}
                        accept="image/*"
                        onChange={(e) => handleSecondaryImageChange(e, index)}
                        />
                        {secondaryImagePreviews[index] && <img src={secondaryImagePreviews[index]} alt="Preview" />}
                    </label>
                    ))}
                </div>
             </div>
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

            return <Carro/>;
          case 2: 

            stepperProps.lineColor2 = 'gray'
            stepperProps.iconColor2 = 'gray'
            stepperProps.buttonColor3 = '$gray400'

            stepperProps.lineColor1 = '#F5A524'
            stepperProps.iconColor1 = 'white'
            stepperProps.buttonColor2 = 'warning'

            return <Fornecedor/>;
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
                    icon={<BsPersonCircle size={25} color={stepperProps.iconColor1}></BsPersonCircle>}
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

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '45px'}}>
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
