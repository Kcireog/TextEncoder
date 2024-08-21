function showResult(text) {
  //hide the unnecessary elements
  document.getElementById('output-section-img').style.display = 'none'; //no ocupa ningun espacio
  document.getElementById('text-output-title').style.display = 'none';
  document.getElementById('text-output-text').style.display = 'none';
  //get the necessary elements
  let htmlAnswer = document.getElementById('text-output');
  let copyBotton = document.getElementById('copy-button');

  //apply its new statuses
  htmlAnswer.innerHTML = text;
  htmlAnswer.style.display = 'block';
  copyBotton.style.display = 'block';

  return;
}
function copyButton() {
  //get the text to be copied
  let textToCopy = document.getElementById('text-output').innerHTML;
  navigator.clipboard.writeText(textToCopy); //API portapapeles
}
function encryptText() {
  let text = document.getElementById('input-textarea').value; //get the value(user text) from input text area.

  const validation = verifyTextInput(text);

  //if validation returns true stop this function
  if (validation) {
    return;
  }

  text = text
    .toLowerCase()
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  showResult(text);
}

function decryptText() {
  let text = document.getElementById('input-textarea').value;
  console.log(typeof text);

  text = text
    .toLowerCase()
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  showResult(text);
}

const vocalesTildes = ['á', 'é', 'í', 'ó', 'ú'];
function verifyTextInput(text) {
  for (const letra of text) {
    //ignore whitespaces
    if (letra !== '') {
      if (letra === letra.toUpperCase() || vocalesTildes.includes(letra)) {
        alert('El texto contiene mayusculas o acentos, intente de nuevo');
        resetFields();
        return true;
      }
    }
  }
  return false; // return false if text its ok
}

function resetFields() {
  //clear input text area
  document.getElementById('input-textarea').value = '';
}
