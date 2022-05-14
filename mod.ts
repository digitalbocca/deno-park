const placa = window.prompt("Digite a placa do carro");

const carros = [
  {
    placa: 'ABC-1234',
    cor: 'Preto',
    marca: 'Fiat',
    modelo: 'Uno',
  },
  {
    placa: 'DEF-5678',
    cor: 'Branco',
    marca: 'Volkswagen',
    modelo: 'Fox',
  },
]

const carro = carros.find(carro => carro.placa === placa);

if (carro) {
  console.log(carro.modelo, carro.cor);
} else {
  console.log('Carro não encontrado');
}
