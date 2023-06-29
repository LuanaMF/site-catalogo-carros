import React from "react";
import { Dropdown } from "@nextui-org/react";

// exemplo de select options: 
// const options = [
//   {
//       value: 1,
//       descricao: 'Primeira'
//   },
//   {
//       value: 2,
//       descricao: 'Segunda'
//   },
//   {
//       value: 3,
//       descricao: 'Terceira'
//   }
//   ]

export default function Select({ retorno, options, primeiraOpcao, width, opcaoSelecionada}) {

  const [selected, setSelected] = React.useState(new Set([primeiraOpcao]));
  
  const selectedValue = React.useMemo(() => {
        var value;
        let selectedDescription = primeiraOpcao;
        if(opcaoSelecionada && Object.keys(opcaoSelecionada).length > 0){
          value = opcaoSelecionada;
        }
        else{
          value = Array.from(selected).join(", ").replaceAll("_", " "); 
        }
  
        options.forEach(element => {
          if (value == element.value) {
            selectedDescription = element.descricao;
          }
        });
  
    return selectedDescription;
  }, [selected]);
  
  return (
    <Dropdown>
      <Dropdown.Button flat color="warning" css={{w: width? width : 'auto'}}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="warning"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        onAction={retorno}
        >
        {options.map((item) => (
            <Dropdown.Item 
                 key={item.value}>{item.descricao}</Dropdown.Item>
        ))}
        
      </Dropdown.Menu>
    </Dropdown>
  );
}
