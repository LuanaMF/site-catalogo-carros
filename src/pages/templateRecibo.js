
function templateRecibo( { venda, carro } ) {
  
    return (
      <>
        
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
                marginLeft: '80px'
            }}
        >
            <h1>Recibo de venda</h1>
        </div>
        

        
      </>
    );
}

export default templateRecibo