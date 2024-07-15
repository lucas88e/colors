import React from 'react';

function BoxColor({ color, value }) {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  const isValidColor = colors.includes(value)
  const isMatchColor = isValidColor && color === value

  const boxClass = isMatchColor ? `${color} match` : color;
  const boxText = isValidColor && color === value ? `Yes, Im a  ${value} color `: ` Not, Im not ${value} color`

  return (
    <div className={`box ${boxClass}`}>
      {boxText}
    </div>
  );
}

export default BoxColor;


  // // Verificar si el valor es un color válido y coincide con el color actual
  // const isColorValid = colors.includes(value);
  // const isMatchingColor = isColorValid && color === value; // Si es valido y el color igual al value input

  // const boxClass = isMatchingColor ? `${color} match` : color; // Elige la clase y sino la clase original (color)
  // const boxText = isColorValid && color === value ? `Yes,I'm a ${value} color` : `I’m not a ${value} color`; // Modifica el boxText si es del mismo color que el value
