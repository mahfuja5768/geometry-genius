document.getElementById("tri_calc").addEventListener("click", () => {
  const inpOfB = getInputValue("tri_b_input_field");
  const inpOfH = getInputValue("tri_h_input_field");
  if (isNaN(inpOfB) || isNaN(inpOfH)) {
    return;
  }
  const area = (0.5 * inpOfB * inpOfH).toFixed(2);
  const setValue = setAreaValue("tri_area", area);
  addToCalcEntry("Triangle", area);
});

document.getElementById("rec_calc").addEventListener("click", () => {
  const inpOfW = getInputValue("rec_w_input_field");
  const inpOfL = getInputValue("rec_l_input_field");
  if (isNaN(inpOfW) || isNaN(inpOfL)) {
    return;
  }
  const area = (inpOfW * inpOfL).toFixed(2);
  const setValue = setAreaValue("rec_area", area);
  addToCalcEntry('Rectangle', area)
});

document.getElementById("para_calc").addEventListener("click", () => {
  const inpOfB = getInputValue("para_b_input_field");
  const inpOfH = getInputValue("para_h_input_field");

  if (isNaN(inpOfB) || isNaN(inpOfH)) {
    return;
  }
  const area = (inpOfB * inpOfH).toFixed(2);
  const setValue = setAreaValue("para_area", area);
  addToCalcEntry('Parallelogram', area)
});

document.getElementById("rho_calc").addEventListener("click", () => {
  const inpOfB = getInputValue("rho_d1_input_field");
  const inpOfH = getInputValue("rho_d2_input_field");
  if (isNaN(inpOfB) || isNaN(inpOfH)) {
    return;
  }
  const area = (0.5 * inpOfB * inpOfH).toFixed(2);
  const setValue = setAreaValue("rho_area", area);
  addToCalcEntry('Rhombus', area)
});

document.getElementById("pen_calc").addEventListener("click", () => {
  const inpOfB = getInputValue("pen_p_input_field");
  const inpOfH = getInputValue("pen_b_input_field");
  if (isNaN(inpOfB) || isNaN(inpOfH)) {
    return;
  }
  const area = (0.5 * inpOfB * inpOfH).toFixed(2);
  const setValue = setAreaValue("pen_area", area);
  addToCalcEntry('Pentagon', area)
});

document.getElementById("ell_calc").addEventListener("click", () => {
  const inpOfB = getInputValue("ell_a_input_field");
  const inpOfH = getInputValue("ell_b_input_field");
  if (isNaN(inpOfB) || isNaN(inpOfH)) {
    return;
  }
  const area = (3.1416 * inpOfB * inpOfH).toFixed(2);
  const setValue = setAreaValue("ell_area", area);
  addToCalcEntry('Ellipse', area)
});

function addToCalcEntry(name, area) {
  //   console.log(name + " " + area);
  const allCalc = document.getElementById("allCalc");
  const count = allCalc.childElementCount;
  const para = document.createElement("p");
    para.classList.add('my-4');
  para.innerHTML = `${count + 1}. ${name} ${area} cm<sup>2</sup> `;
  allCalc.appendChild(para);
  console.log(para);
  return para;
}
