function getInputValue(id){
  const inputFieldString = document.getElementById(id);
  const inputFieldValue = parseFloat(inputFieldString.value);
  inputFieldString.value = '';
  return inputFieldValue;
}

  function setAreaValue(id, area){
    const getAreaField = document.getElementById(id);
    let setAreaFieldValue = getAreaField.innerText;
    getAreaField.innerText = area;
    return setAreaFieldValue;
  } 