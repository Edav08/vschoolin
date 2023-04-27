const num1 = document.querySelector("#firstNoInput");
      const num2 = document.querySelector("#secondNoInput");
      const output = document.querySelector("#result");

      document.body.addEventListener("click", calc);
      function calc(event) {
        if(event.target.classList.contains("operator")){
         let answer = null;
         
          switch (event.target.textContent) {
            case "+":
             
              answer = +num1.value + +num2.value;
              break;
            case "-":
             
              answer = num1.value - num2.value;
              break;  
            case "*":
              answer = num1.value * num2.value;
              break;   
          }
          
          output.textContent = answer;
        }
}

