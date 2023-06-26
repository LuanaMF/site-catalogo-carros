import React from "react";
import { Dropdown } from "@nextui-org/react";
import * as router from '@/pages/api/router';

export default function SelectCombustivel({onChange}) {

  const [selected, setSelected] = React.useState(new Set(['']));

  const [combustiveis, setCombustiveis] = React.useState([{
    id: '',
    descricao: ''
  }]);

  const selectedValue = React.useMemo(
    () => {
      const value = Array.from(selected).join(", ").replaceAll("_", " ");
      let selectedDescription = "Selecione o combustível";
  
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
        onAction={onChange}
        >

        {combustiveis.map((item) => (
            <Dropdown.Item 
             key={item.id}>{item.descricao}</Dropdown.Item>
        ))}
        
      </Dropdown.Menu>
    </Dropdown>
  );
}
