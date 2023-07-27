
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
                marginTop:'20px',   
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
            <h4 style={{fontSize: '10px'}}>{'Data/Hora:  '+ 'new Date(venda.data_venda).toLocaleString()'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Kilometragem de saída:  ' + 'venda.kilometragem_saida'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Tipo de pagamento:  '+'venda.tipo_pagamento'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Valor:  '+'formatter.format(venda.valor)'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Retorno: '+'formatter.format(venda.retorno)'}</h4>

        </div>

        <div
            style={{
                marginTop:'20px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do comprador: </h2>
        </div>

        <div
            style={{
                marginTop: '10px',
                marginLeft: '30px'
            }}
        >
            <h4 style={{fontSize: '10px'}}>{'Nome:  Luana Fraga'}</h4>
            <h4 style={{fontSize: '10px'}}>{'CPF:  084.401.645-48'}</h4>
            <h4 style={{fontSize: '10px'}}>{'CEP:  44304066'}</h4>
            <h4 style={{ fontSize: '10px'}}>{'Cidade:  Feira de Santana'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Estado:  Bahia'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Endereço:  Rua Pitombeiras, 352'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Telefone:  (75) 992978514'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Email:  luhfraga123@gmail.com'}</h4>

        </div>

        <div
            style={{
                marginTop:'45px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do vendedor: </h2>
        </div>

        <div
            style={{
                marginTop: '10px',
                marginLeft: '30px'
            }}
        >
            <h4 style={{fontSize: '10px'}}>{'Nome:  Luana Fraga'}</h4>
            <h4 style={{fontSize: '10px'}}>{'CPF:  084.401.645-48'}</h4>
            <h4 style={{fontSize: '10px'}}>{'CEP:  44304066'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Cidade:  Feira de Santana'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Estado:  Bahia'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Endereço:  Rua Pitombeiras, 352'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Telefone:  (75) 992978514'}</h4>
            <h4 style={{ fontSize: '10px'}}>{'Email:  luhfraga123@gmail.com'}</h4>

        </div>

        <div
            style={{
                marginTop:'10px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do carro: </h2>
        </div>

        <div
            style={{
                marginTop: '10px',
                marginLeft: '30px'
            }}
        >
            <h4 style={{fontSize: '10px'}}>{'Marca:  Fiat'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Modelo/Versão:  2018'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Ano de fabricação:  2018'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Ano do modelo:  2020'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Km:  50.000'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Combustível:  Gasolina'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Cambio:  Automático'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Observações:  Carro massa de legal'}</h4>

        </div>
        
        </div>
      </>
      
    );
}

export default TemplateRecibo