// Parte 1
function Suma(a, b) {
  return a + b;
}

function Resta(a, b) {
  return a - b;
}

function Multiplicacion(a, b) {
  return a * b;
}

function Division(a, b) {
  if (b === 0) {
    return 'Error: División por cero';
  }
  return a / b;
}

// Parte 2
funcion calculadora(operacion) {
  const num1 = document.getElementByid("num1").value;
  const num2 = document.getElementByid("num2").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Por favor, ingresa números válidos.";
  } else {
     if (operacion === 'suma') {
      result = suma(num1, num2);
    } else {
      if (operacion === 'resta') {
        result = resta(num1, num2);
      } else {
        if (operacion === 'multiplicación') {
          result = multiplicacion(num1, num2);
        } else {
          if (operacion === 'división') {
            result = division(num1, num2);
          } else {
            result = "Operación no válida.";
          }
        }
      }
    }
  }

  document.getElementById("result").innerHTML = '<strong>RESULTADO</strong>
   <br> $(operacion): ${result}';
}
