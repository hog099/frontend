import React from 'react';

import './index.css'


import CardExample from '../../components/cardexample/index';


const Conversor: React.FC = () => {
  const [textdigitado, settextdigitado] = React.useState('');
  const [textconvertido, settextconvertido] = React.useState('');
  const [textdecodificado, settextdecodificado] = React.useState('');


  const conversao = () => {
    // console.log(textdigitado)
    let textconv = btoa(textdigitado);
    settextconvertido(textconv);
  }

  const decode = () => {
    // console.log(textdigitado)
    let textdecode = atob(textconvertido);
    settextdecodificado(textdecode);
  }


  return (
    <>
      <h3 className="title">Conversor</h3>

      <input
        name="conversor"
        placeholder="Digite aqui"
        value={textdigitado}
        onChange={e => settextdigitado(e.target.value)}
      />

      <button onClick={conversao}>Converter BASE64</button>

      <p>Texto Convertido: {textconvertido}</p>

      <hr />

      <button onClick={decode}>Decodificar BASE64</button>

      <p>Texto Decodificado: {textdecodificado}</p>

      <hr />

      <CardExample 
      titulo="Esse e um card" 
      descricao="Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Manduma pindureta quium dia nois paga. Atirei o pau no gatis, per gatis num morreus. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!" 
      />

    </>
  );


}

export default Conversor;