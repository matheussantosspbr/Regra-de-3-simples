function Calcular() {
  var num1 = window.document.getElementById('n1').value
  var num2 = window.document.getElementById('n2').value
  var num3 = window.document.getElementById('n3').value
  var letra = 'x'

  var res1 = num2 * num3
  var res2 = res1 / num1
  var rescampo = window.document.getElementById('res')

  rescampo.innerHTML = `
  <fieldset class="fild2">
    <br>
    ${num1}${letra} = ${num2}.${num3} <br><br>
    ${num1}${letra} = ${res1} <br><br>
    ${letra} = ${res1}/${num1} <br><br>
    ${letra} = ${res2}<br><br>
    <br><br>
    ${letra} é igual a ${res2}
  </fieldset>
  `
}
