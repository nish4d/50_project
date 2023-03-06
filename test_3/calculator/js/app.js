document.getElementById("btn").addEventListener("click", function () {
  Swal.fire({
    title: "Input number",
    html: `<div class="flex justify-center items-center gap-4">
        <input type="text" id="input-field1" class="border-2 p-2 w-1/4 rounded-md border-black"> 
        <p id="operator">+</p>
        <input type="text" id="input-field2" class="border-2 p-2 w-1/4 rounded-md border-black">
        </div>
        <br>
        <div>
            <button class="px-6 py-3 bg-amber-400 rounded font-semibold" onclick="appendOperator('+')">+</button>
            <button class="px-6 py-3 bg-amber-400 rounded font-semibold" onclick="appendOperator('-')">-</button>
            <button class="px-6 py-3 bg-amber-400 rounded font-semibold" onclick="appendOperator('*')">*</button>
            <button class="px-6 py-3 bg-amber-400 rounded font-semibold" onclick="appendOperator('/')">/</button>
            <button class="px-6 py-3 bg-amber-400 rounded font-semibold" onclick="appendOperator('%')">%</button>
        </div>

        <button class="mt-5 px-6 py-3 bg-amber-400 rounded font-semibold" onclick="result()">Result</button>
        <p id="validTotal1" class="mt-4">Total: <span id="res">0</span></p>
        <p id="validTotal2" class="hidden mt-4 text-red-600 font-semibold">Enter valid Number</p>
        <div id="totals"></div>
        `,
    confirmButtonText: "close",
  });
});

function appendOperator(operators) {
  document.getElementById("operator").innerText = operators;
}

function result() {
  document.getElementById("result").innerText =
    document.getElementById("input-field").value;
}

function result() {
  let resultOutput = document.getElementById("res");
  const input1 = document.getElementById("input-field1");
  const input2 = document.getElementById("input-field2");
    // validation
    const validTotal1 = document.getElementById("validTotal1");
    const validTotal2 = document.getElementById("validTotal2");
    if (input1.value == "" || input2.value == "") {
        validTotal1.classList.add("hidden");
        validTotal2.classList.remove("hidden");
        return;
    }else if(isNaN(input1.value) || isNaN(input2.value)){
        validTotal1.classList.add("hidden");
        validTotal2.classList.remove("hidden");
        input1.value = "";
        input2.value = "";
        return;
    }else{
        validTotal1.classList.remove("hidden");
        validTotal2.classList.add("hidden");
    }


  const operators = document.getElementById("operator");
  const operator = operators.innerText;
  if (operator === "+") {
    let res = parseFloat(input1.value) + parseFloat(input2.value);
    resultOutput.innerText = res;
    document.getElementById("totals").innerHTML += `
<p class="-4" id="result">H : ${input1.value} + ${input2.value} = <span>${resultOutput.innerText}</span></p>
`;
  } else if (operator === "-") {
    let res = parseFloat(input1.value) - parseFloat(input2.value);
    resultOutput.innerText = res;
    document.getElementById("totals").innerHTML += `
<p class="-4" id="result">H : ${input1.value} - ${input2.value} = <span>${resultOutput.innerText}</span></p>
`;
  } else if (operator === "*") {
    let res = parseFloat(input1.value) * parseFloat(input2.value);
    resultOutput.innerText = res;
    document.getElementById("totals").innerHTML += `
<p class="-4" id="result">H : ${input1.value} * ${input2.value} = <span>${resultOutput.innerText}</span></p>
`;
  } else if (operator === "/") {
    let res = parseFloat(input1.value) / parseFloat(input2.value);
    resultOutput.innerText = res;
    document.getElementById("totals").innerHTML += `
<p class="-4" id="result">H : ${input1.value} / ${input2.value} = <span>${resultOutput.innerText}</span></p>
`;
  } else if (operator === "%") {
    let res = parseFloat(input1.value) % parseFloat(input2.value);
    resultOutput.innerText = res;
    document.getElementById("totals").innerHTML += `
<p class="-4" id="result">H : ${input1.value} % ${input2.value} = <span>${resultOutput.innerText}</span></p>
`;
  }
  input1.value = "";
  input2.value = "";
}
