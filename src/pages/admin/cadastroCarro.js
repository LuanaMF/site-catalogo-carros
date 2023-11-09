import SelectCliente from "@/components/SelectCliente";
import { Text, Input, Card, Button, Spacer, Grid, Checkbox, Textarea, Modal} from "@nextui-org/react";
import { useState } from "react";
import {BsCarFront, BsImageFill, BsPersonCircle, BsImage} from 'react-icons/bs';
import SelectCombustivel from "@/components/SelectCombustivel";
import * as router from '@/pages/api/router';
import Select from "@/components/Select";
import {FcCheckmark, FcCancel} from 'react-icons/fc'



export default function CadastroCarro() {

    const [carro, setCarro] = useState({
        marca: '',
        modelo_versao: '',
        ano_fabricacao: '',
        ano_modelo: '',
        quilometragem: 0,
        combustivel_id: 0,
        cambio: '',
        fornecedor: '',
        valor: 0,
        gnv: 0,
        vendido: 0,
        devolvido: 0,
        renavam: '',
        chassi: '', 
        leiloado: 0,
        observacoes: '',
        service: 'cadastrarCarro'
    });

    const [imgs, setImgs] = useState([{
        id_carro: '',
        img: '',
        principal: 0
    }])

    const [openModal, setOpenModal] = useState('')

    async function saveCarro() {
        
        try {
            const responseCarro = await router.apiPost(carro, 'carro');
            const idCarro = responseCarro.result;

            imgs.forEach(img => {
                img.id_carro = idCarro
            });

            const responseImg = await router.apiPost({service: 'saveImagens', imagens: imgs}, 'carro');

            alertProps.mensagem = "Carro cadastrado com sucesso!";
            alertProps.icon = <FcCheckmark size={80}></FcCheckmark>

            setVisible(true);
            setTimeout(() => {
                window.location.href = '/telaCarros';
            }, 1500);
            
        } catch (error) { 
            alertProps.mensagem = "Erro ao cadastrar carro!";
            alertProps.icon = <FcCancel size={80}></FcCancel>
            setVisible(true);   
        }
    }

    const cambios = [
          {
              value: 'M',
              descricao: 'Manual'
          },
          {
              value: 'A',
              descricao: 'Automático'
          },
          
    ]

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
                                    initialValue={carro.marca}
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
                                    initialValue={carro.modelo_versao}
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
                                    initialValue={carro.ano_fabricacao}
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
                                    initialValue={carro.ano_modelo}
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
                                    initialValue={carro.quilometragem}
                                    onChange={(e) => carro.quilometragem = parseFloat(e.target.value)}
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
                                    initialValue={carro.valor}
                                    onChange={(e) => carro.valor = parseFloat(e.target.value)}
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
                                    initialValue={carro.renavam}
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
                                    initialValue={carro.chassi}
                                    onChange={(e) => carro.chassi = e.target.value}
                                />
                            </Grid>   
                        </Grid.Container>

                        <Grid.Container css={{marginTop: '10px'}} gap={0.5}>
                            <Grid xs={4}>
                                <SelectCombustivel
                                retorno={(e) => carro.combustivel_id = parseInt(e)}
                                ></SelectCombustivel>
                            </Grid>
                           
                            <Grid xs={3.5} css={{marginLeft: '8px'}}>
                                <Select
                                primeiraOpcao={'Selecione o cambio'}
                                    options={cambios}
                                    retorno={(e) => carro.cambio = e}
                                ></Select>
                            </Grid>
                            
                            <Grid xs={3} css={{marginLeft: '5px'}}>
                                <SelectCliente primeiraOpcao={"Selecione o vendedor"}
                                opcaoIncluir={true}
                                retorno={(e) => carro.fornecedor = e}
                                opcaoSelecionada={carro.fornecedor}
                                ></SelectCliente> 
                            </Grid>
                        </Grid.Container>

                        <Grid.Container css={{marginTop: '10px'}} gap={0.5}>
                            <Grid xs={2.5}>
                                <Checkbox css={{marginLeft: '18px'}} size="sm"
                                    defaultSelected={carro.gnv == 1? true : false}
                                    onChange={(e) => e? carro.gnv = 1 : carro.gnv = 0}
                                >GNV</Checkbox>
                            </Grid>
                            <Grid xs={3}>
                                <Checkbox defaultSelected={carro.vendido == 1? true : false} 
                                onChange={(e) => e? carro.vendido = 1 : carro.vendido = 0}
                                size="sm">Vendido</Checkbox>
                            </Grid>
                            <Grid xs={3}>
                                <Checkbox size="sm"
                                    defaultSelected={carro.devolvido == 1? true : false}
                                    onChange={(e) => e? carro.devolvido = 1 : carro.devolvido = 0}
                                >Devolvido</Checkbox>
                            </Grid >
                            <Grid xs={3}>
                                <Checkbox size="sm"
                                    defaultSelected={carro.leiloado == 1? true : ''}
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
                            initialValue={carro.observacoes}
                            css={{marginTop: '15px'}}
                            onChange={(e) => carro.observacoes = e.target.value}
                        />
                    </Card.Body>

                </Card>
            </div>
        )
        
    }
    
    
    const [mainImagePreview, setMainImagePreview] = useState(null);
    const [secondaryImagePreviews, setSecondaryImagePreviews] = useState(Array(4).fill(null));

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64WithoutPrefix = e.target.result.split(',')[1]; // Remove o prefixo
            setMainImagePreview(base64WithoutPrefix);
            
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
            const base64WithoutPrefix = e.target.result.split(',')[1];
            newPreviews[index] = base64WithoutPrefix;
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
                        {mainImagePreview && <img src={'data:image/png;base64,' + mainImagePreview} alt="Preview" />}
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
                        {secondaryImagePreviews[index] && <img src={'data:image/png;base64,' + secondaryImagePreviews[index]} alt="Preview" />}
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

            stepperProps.lineColor2 = '#F5A524'
            stepperProps.iconColor2 = 'white'
            stepperProps.buttonColor3 = 'warning'

            return <Imagens/>;
          default: return null;
        }
    }

    function onPressHandler(){
        
        setActiveStep(activeStep + 1);
        
        if(activeStep == 2){

            imgs.push({
                id_carro: '', 
                img: mainImagePreview,
                principal: 1
            })

            secondaryImagePreviews.forEach(imgPreview  => {
                imgs.push({
                    id_carro: '', 
                    img: imgPreview,
                    principal: 0
                })
            });

            saveCarro();

        }
        
    }

    const [alertProps, setAlertProps] = useState({
        mensagem: 'Carro cadastrado com sucesso!',
        icon: <FcCheckmark size={80}></FcCheckmark>
    }
    )
    const [visible, setVisible] = useState(false);

    const closeHandler = () => {
        setVisible(false);
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
                <Button onPress={onPressHandler}>{activeStep != 2? 'Próximo' : 'Finalizar cadastro'}</Button>
                <Spacer y={1}></Spacer>
                {activeStep > 1? 
                    <Button onPress={() => setActiveStep(activeStep - 1)}>Anterior</Button>
                    : ''
                }
            </div>
        </>
    );
}
