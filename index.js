import {PrecoPrazo} from './metodoCorreio.js';
import massaDados from './massaDeDados.js';

  let pp = new PrecoPrazo(); 
  massaDados.lista.forEach(dados => {
    pp.Correio(dados.idTeste,
      dados.sCepDestino,
      dados.nVlPeso,
      dados.nVlAltura,
      dados.nVlComprimento,
      dados.nVlLargura,
      dados.valorFrete,
      dados.prazoEntrega);
  });