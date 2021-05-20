import { calcularPrecoPrazo } from 'correios-brasil';
export class PrecoPrazo {

    Correio = async (idTeste, sCepDestino, nVlPeso, nVlComprimento, nVlAltura, nVlLargura, valorFrete, prazoEntrega) => {
        
        let args = {
            sCepOrigem: '08581190',
            sCepDestino: sCepDestino,
            nVlPeso: nVlPeso,
            nCdFormato: '1',
            nVlComprimento: nVlComprimento,
            nVlAltura: nVlAltura,
            nVlLargura: nVlLargura,
            nCdServico: ['04014'],
            nVlDiametro: '0',
        };

        let response = await calcularPrecoPrazo(args);
        var indice = 0
        var taxaEntregaResponse = response[indice].Valor;
        var prazoEntregaResponse = response[indice].PrazoEntrega;

        const resultadoValor = taxaEntregaResponse == valorFrete
        const resultadoPrazo = prazoEntregaResponse == prazoEntrega

        if (resultadoValor == true && resultadoPrazo == true) {
            console.log('Teste - ' + idTeste + ' - Sucesso ! - O valor da taxa de entrega é de R$' + taxaEntregaResponse + ', com o prazo de entrega de ' + prazoEntregaResponse + ' dias.');
        }

        else {
            console.log('Teste - ' + idTeste + ' - Erro ! A taxa de entrega ou o prazo da entrega esta incorreto !');
        }

    }
};