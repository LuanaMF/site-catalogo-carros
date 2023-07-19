
const TemplateRecibo = () => {
  
    return (
        
      <>
        <div id='recibo'>
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px'
            }}

        >
            <img className="logo" src="/logo.png" ></img>
        </div>
        
        <div
             style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
               
            }}
        >
            <h1>Recibo de venda</h1>
        </div>
        
        <div
            style={{
                marginTop:'80px',   
                marginLeft: '80px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '30px'}}>Dados da venda: </h2>
        </div>
        
        <div
            style={{
                marginTop: '20px',
                marginLeft: '150px'
            }}
        >
            <h4>{'Data/Hora:  20/05/2023 as 15:30'}</h4>
            <h4>{'Kilometragem de saída:  50.000'}</h4>
            <h4>{'Tipo de pagamento:  Consórcio'}</h4>
            <h4>{'Valor:  R$ 80.000'}</h4>
            <h4>{'Retorno:  R$ 20.000'}</h4>

        </div>

        <div
            style={{
                marginTop:'50px',   
                marginLeft: '70px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '30px'}}>Dados do comprador: </h2>
        </div>

        <div
            style={{
                marginTop: '20px',
                marginLeft: '150px'
            }}
        >
            <h4>{'Nome:  Luana Fraga'}</h4>
            <h4>{'CPF:  084.401.645-48'}</h4>
            <h4>{'CEP:  44304066'}</h4>
            <h4>{'Cidade:  Feira de Santana'}</h4>
            <h4>{'Estado:  Bahia'}</h4>
            <h4>{'Endereço:  Rua Pitombeiras, 352'}</h4>
            <h4>{'Telefone:  (75) 992978514'}</h4>
            <h4>{'Email:  luhfraga123@gmail.com'}</h4>

        </div>

        <div
            style={{
                marginTop:'50px',   
                marginLeft: '70px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '30px'}}>Dados do vendedor: </h2>
        </div>

        <div
            style={{
                marginTop: '20px',
                marginLeft: '150px'
            }}
        >
            <h4>{'Nome:  Luana Fraga'}</h4>
            <h4>{'CPF:  084.401.645-48'}</h4>
            <h4>{'CEP:  44304066'}</h4>
            <h4>{'Cidade:  Feira de Santana'}</h4>
            <h4>{'Estado:  Bahia'}</h4>
            <h4>{'Endereço:  Rua Pitombeiras, 352'}</h4>
            <h4>{'Telefone:  (75) 992978514'}</h4>
            <h4>{'Email:  luhfraga123@gmail.com'}</h4>

        </div>

        <div
            style={{
                marginTop:'50px',   
                marginLeft: '70px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '30px'}}>Dados do carro: </h2>
        </div>

        <div
            style={{
                marginTop: '20px',
                marginLeft: '150px'
            }}
        >
            <h4>{'Marca:  Fiat'}</h4>
            <h4>{'Modelo/Versão:  2018'}</h4>
            <h4>{'Ano de fabricação:  2018'}</h4>
            <h4>{'Ano do modelo:  2020'}</h4>
            <h4>{'Km:  50.000'}</h4>
            <h4>{'Combustível:  Gasolina'}</h4>
            <h4>{'Cambio:  Automático'}</h4>
            <h4>{'Observações:  Carro massa de legal'}</h4>

        </div>
        
        </div>
      </>
      
    );
}

export default TemplateRecibo