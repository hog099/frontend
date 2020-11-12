import React from 'react';
import {Link} from 'react-router-dom';

import ButtonExample from '../../components/buttonexample/examplecomponentbutton';

const Home: React.FC = () => {
 
 
  return (
    <div>
      <p>Home</p>

    {/* Para chamar um componenete criar importe acima e faca assim (passando paramoetros) */}
    <ButtonExample titulo="Botao Teste" />

    <Link to="/conversor">Acessar Conversor</Link>

    </div>
  );
}

export default Home;