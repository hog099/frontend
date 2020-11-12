import React from 'react';
import './examplecomponentbutton';

//definindo tipagem
interface PropsTipagem {
  titulo: string;
}

// const Esseeumbotao: React.FC = (props) => { abaixo esta desestruturado
const Esseeumbotao: React.FC<PropsTipagem> = ({ titulo }) => {

  return (
    <button className="buttonexample">{titulo}</button>
  );
}

export default Esseeumbotao;