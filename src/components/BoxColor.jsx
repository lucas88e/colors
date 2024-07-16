import React from 'react';

function BoxColor({ color, value }) {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  const isValidColor = colors.includes(value)
  const isMatchColor = isValidColor && color === value // Si es valido y el color igual al value input

  const boxClass = isMatchColor ? `${color} match` : color; // Elige la clase y sino la clase original (color)
  const boxText = isValidColor && color === value ? `Yes, Im a  ${value} color `: ` Not, Im not ${value} color`

  return (
    <div className={`box ${boxClass}`}>
      {boxText}
    </div>
  );
}

export default BoxColor;


