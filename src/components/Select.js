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

export default function Select({ onChange, options, primeiraOpcao}) {

  const [selected, setSelected] = React.useState(new Set([primeiraOpcao]));
  
  const selectedValue = React.useMemo(() => {
    const value = Array.from(selected).join(", ").replaceAll("_", " ");
    let selectedDescription = primeiraOpcao;
  
    options.forEach(element => {
      if (value == element.value) {
        selectedDescription = element.descricao;
      }
    });
  
    return selectedDescription;
  }, [selected]);
  
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
        selectedKeys={selected}
        onSelectionChange={setSelected}
        onAction={onChange}
        >
        {options.map((item) => (
            <Dropdown.Item 
                 key={item.value}>{item.descricao}</Dropdown.Item>
        ))}
        
      </Dropdown.Menu>
    </Dropdown>
  );
}
