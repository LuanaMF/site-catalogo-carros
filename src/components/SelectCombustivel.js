import React from "react";
import { Dropdown } from "@nextui-org/react";
import * as router from '@/pages/api/router';

export default function SelectCombustivel({onChange}) {

  const [selected, setSelected] = React.useState(new Set(["Selecione o combustível"]));

  const [combustiveis, setCombustiveis] = React.useState([{
    id: '',
    descricao: ''
  }]);

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
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
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedValue={selected}
        onSelectionChange={setSelected}
        onAction={onChange}
        >

        {combustiveis.map((item) => (
            <Dropdown.Item 
            id={item.id} key={item.descricao}>{item.descricao}</Dropdown.Item>
        ))}
        
      </Dropdown.Menu>
    </Dropdown>
  );
}
