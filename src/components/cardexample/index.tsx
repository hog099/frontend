import React from 'react';

import './index.css';

export interface Props {
  titulo: string;
  descricao: string;
}

const Cardexample: React.FC<Props> = ({titulo, descricao}) => {
  
  
  return (
    <div className="card">
      <h5>{titulo}</h5>
      <p>{descricao}</p>
    </div>
  );

}

export default Cardexample;