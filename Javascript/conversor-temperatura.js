//Conversor de Temperatura simples

console.log("Conversor de Temperatura\n1 - De graus Celsius para...\n2 - De graus Farenheit para...\n3 - De graus Kelvin para...");

var opcao = prompt("Por favor digite uma opção:")
console.clear();

switch (parseInt(opcao)) {
  case 1:
    console.log("Conversor de Temperatura\n1 - De graus Celsius para Fahrenheit\n2 - De graus Celsius para Kelvin...");
    var opcao = prompt("Escolha uma opção:")
      switch (parseInt(opcao))
      {
        case 1:
          var celsius = prompt("Digite a temperatura em graus Celsius");
          var fahrenheit = parseFloat(celsius) * 1.8 + 32;
          console.log("Temperatura: " + fahrenheit + "°F");
          break;
        
        case 2:
          var celsius = prompt("Digite a temperatura em graus Celsius");
          var kelvin = parseFloat(celsius) + 273.15;
          console.log("Temperatura: " + kelvin + "°K");
          break;
          
        default:
          console.log("Opção inválida");
          break;
      }
  case 2:
    console.log("Conversor de Temperatura\n1 - De graus Fahrenheit para Celsius\n2 - De graus Fahrenheit para Kelvin...");
    var opcao = prompt("Escolha uma opção:");
      switch (parseInt(opcao))
      {
        case 1:
          var fahrenheit = prompt("Digite a temperatura em graus Farenheit");
          var celsius = parseFloat(fahrenheit) - 32 * 1.8;
          console.log("Temperatura: " + celsius + "°C");
          break;

        case 2:
          var fahrenheit = prompt("Digite a temperatura em graus Farenheit");
          var kelvin = parseFloat(fahrenheit) - 32 * 1.8 + 273.15;
          console.log("Temperatura: " + kelvin + "°K");
          break;

        default:
          console.log("Opção inválida");
          break;
      }

  case 3:
    console.log("Conversor de Temperatura\n1 - De graus Kelvin para Celsius\n2 - De graus Kelvin para Fahrenheit...");
    var opcao = prompt("Escolha uma opção:");
      switch (parseInt(opcao))
      {
        case 1:
          var kelvin = prompt("Digite a temperatura em graus Kelvin");
          var celsius = parseFloat(kelvin) - 273.15;
          console.log("Temperatura: " + kelvin + "°K");
          break;

        case 2:
          var kelvin = prompt("Digite a temperatura em graus Kelvin");
          var fahrenheit = 1.8 *  (parseFloat(kelvin) - 273.15) + 32;
          console.log("Temperatura: " + fahrenheit + "°F");
          break;

        default:
          console.log("Opção inválida");
          break;
      }
}