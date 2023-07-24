
const TemplateRecibo = ({ venda }) => {
    const formatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
    return (
        
      <>
        <div id='recibo'>
        <div 
            style={{
                display: 'flex',
                marginLeft: '170px',
                marginTop: '30px'
            }}

        >
            <img width="100px" src="/logo.png" ></img>
        </div>
        
        <div
             style={{
                display: 'flex',
                marginLeft: '130px',
                marginTop: '30px'
            }}
        >
            <h1 style={{fontSize: '25px'}}>Recibo de venda</h1>
        </div>
        
        <div
            style={{
                marginTop:'30px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados da venda: </h2>
        </div>
        
        <div
            style={{
                marginTop: '20px',
                marginLeft: '30px'
            }}
        >
            <h4>{'Data/Hora:  '+ 'new Date(venda.data_venda).toLocaleString()'}</h4>
            <h4>{'Kilometragem de saída:  ' +'venda.kilometragem_saida'}</h4>
            <h4>{'Tipo de pagamento:  '+'venda.tipo_pagamento'}</h4>
            <h4>{'Valor:  '+'formatter.format(venda.valor)'}</h4>
            <h4>{'Retorno: '+'formatter.format(venda.retorno)'}</h4>

        </div>

        <div
            style={{
                marginTop:'30px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do comprador: </h2>
        </div>

        <div
            style={{
                marginTop: '20px',
                marginLeft: '30px'
            }}
        >
            <h4>{'Nome:  Luana Fraga'}</h4>
            <h4>{'CPF:  084.401.645-48'}</h4>
            <h4>{'CEP:  44304066'}</h4>
            <h4 style={{marginTop: '25px !important'}}>{'Cidade:  Feira de Santana'}</h4>
            <h4>{'Estado:  Bahia'}</h4>
            <h4>{'Endereço:  Rua Pitombeiras, 352'}</h4>
            <h4>{'Telefone:  (75) 992978514'}</h4>
            <h4>{'Email:  luhfraga123@gmail.com'}</h4>

        </div>

        <div
            style={{
                marginTop:'30px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do vendedor: </h2>
        </div>

        <div
            style={{
                marginTop: '20px',
                marginLeft: '30px'
            }}
        >
            <h4>{'Nome:  Luana Fraga'}</h4>
            <h4>{'CPF:  084.401.645-48'}</h4>
            <h4>{'CEP:  44304066'}</h4>
            <h4>{'Cidade:  Feira de Santana'}</h4>
            <h4>{'Estado:  Bahia'}</h4>
            <h4>{'Endereço:  Rua Pitombeiras, 352'}</h4>
            <h4>{'Telefone:  (75) 992978514'}</h4>
            <h4 style={{marginBottom: '60px !important'}}>{'Email:  luhfraga123@gmail.com'}</h4>

        </div>

        <div
            style={{
                marginTop:'30px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do carro: </h2>
        </div>

        <div
            style={{
                marginTop: '20px',
                marginLeft: '30px'
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