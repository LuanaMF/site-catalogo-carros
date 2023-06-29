import React from "react";
import { Dropdown } from "@nextui-org/react";
import * as router from '@/pages/api/router';

export default function SelectCombustivel({retorno, opcaoSelecionada}) {

  const [selected, setSelected] = React.useState(new Set(['']));

  const [combustiveis, setCombustiveis] = React.useState([{
    id: '',
    descricao: ''
  }]);

  const selectedValue = React.useMemo(
    () => {
        var value;
        let selectedDescription = 'Selecione o combustivel';

        if(opcaoSelecionada && Object.keys(opcaoSelecionada).length > 0){
          value = opcaoSelecionada;
        }
        else{
          value = Array.from(selected).join(", ").replaceAll("_", " "); 
        }
  
      combustiveis.forEach(element => {
        if (value == element.id) {
          selectedDescription = element.descricao;
        }
      });
  
    return selectedDescription;
    },
    [selected]
  );
  

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await router.apiPost({ service: 'getCombustiveis' }, 'carro');
        setCombustiveis(response.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [combustiveis]);

  return (
    <Dropdown>
      <Dropdown.Button flat color="warning">
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="warning"
        disallowEmptySelection
        selectionMode="single"
        selectedValue={selected}
        onSelectionChange={setSelected}
        onAction={retorno}
        >

        {combustiveis.map((item) => (
            <Dropdown.Item 
             key={item.id}>{item.descricao}</Dropdown.Item>
        ))}
        
      </Dropdown.Menu>
    </Dropdown>
  );
}
