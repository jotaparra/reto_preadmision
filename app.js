alert("Bienvenid@ a la Trivia de Laboratoria");
var play = prompt("¿Quieres jugar?");
if (play == 'si'){
var userName = prompt("¿Cuál es tu nombre?");
while (userName == ""){
  alert ('DEBE INGRESAR NOMBRE >=( ');
  var userName = prompt('¿Cuál es tu nombre?');
}
//document.write("Bienvenida " + userName);
document.getElementById('name').innerHTML='Bienvenid@ ' + userName + '. ¡Suerte!';
 var contador = 0;
 var question1 = prompt('¿En qué país nació Laboratoria?');
 var answer1 = ['Perú','Peru','peru','perú'];
 // Acá cuando lo expliqué como lo habiamos realizado, nos dijo que era mejor usa Upper o lower case, en vez de colocar todas las respuestas posibles//
 if (answer1.indexOf(question1) < 0){
   alert('Respuesta incorrecta. La respuesta correcta es: Perú');
 }else{
   var contador = contador + 1
 }
 var question2 = prompt("¿Cuál es el pocentaje de empleabilidad de las egresadas de Laboratoria?");
 var answer2 = ['82','82%','82 %'];
 if (answer2.indexOf(question2) < 0){
   alert('Respuesta incorrecta. La respuesta correcta es: 82%');
 }else{
   var contador = contador + 1
 }
 var question3 = prompt("¿En qué comuna de Santiago de Chile se realiza el Bootcamp de Laboratoria?");
 var answer3 = ['Recoleta','recoleta'];
 if (answer3.indexOf(question3) < 0){
   alert('Respuesta incorrecta. La respuesta correcta es: Recoleta');
 }else{
   var contador = contador + 1
 }
 var question4 = prompt('¿Cuántos meses de duración tiene el bootcamp?');
 var answer4 = ['6', '6 meses', 'seis'];
 if (answer4.indexOf(question4) < 0){
   alert('Respuesta incorrecta. La respuesta correcta es: 6 meses');
 }else{
   var contador = contador + 1
 }
 var question5 = prompt('¿Qué lenguaje de programación aprenderás en Laboratoria?');
 var answer5 = ['Javascript', 'javascript', 'JavaScript'];
 if (answer5.indexOf(question5) < 0){
   alert('Respuesta incorrecta. La respuesta correcta es: Javascript');
 }else{
   var contador = contador + 1
 }
 //alert("Respuestas correctas: " + contador + " Respuestas incorrectas: " + (3-contador));
 document.getElementById('resultado').innerHTML='Respuestas correctas: ' + contador + '  /     Respuestas incorrectas: ' + (5-contador);
 document.getElementById('preg1').innerHTML='¿En qué país nació Laboratoria?' + '     Respuesta correcta: Perú';
 document.getElementById('preg2').innerHTML='¿Cuál es el porcentaje de empleabilidad de las egresadas de Laboratoria?' + '     Repuesta correcta: 82%';
 document.getElementById('preg3').innerHTML='¿En qué comuna de Santiago de Chile se realiza el bootcamp de Laboratoria?' + '     Respuesta correcta: Recoleta';
 document.getElementById('preg4').innerHTML='¿Cuántos meses de duración tiene el bootcamp?' + '     Respuesta correcta: 6 meses';
 document.getElementById('preg5').innerHTML='¿Qué lenguaje de programación aprenderás en Laboratoria?' + '     Respuesta correcta: Javacript';
 }
else
 {
   document.getElementById('diceNo').innerHTML=' =( ';
   document.getElementById('nosVemos').innerHTML="Nos vemos en otra oportunidad";
}
--------------------------------------------------------------------------------------------------------------
