let check = document.querySelectorAll("input")
check.forEach(item => {
  abc(item)
  item.oninput = () => { abc(item) }
})

function abc(item) {
  let label = item.nextElementSibling
  if(item.checked){
    label.innerHTML = `Input number ${item.value} is Checked`
  }else{
    label.innerHTML = `You switched off input number ${item.value}`
  }
}