document.addEventListener('DOMContentLoaded', function () {
  const x = document.getElementById("b17");
  x.addEventListener("click", function () {
    // console.log("hoo");
    const eButtons = document.querySelectorAll("#e1, #e2, #e3, #e4, #e5,#e6, #e7, #e8, #e9, #e10");
    const no1 = document.querySelector(".no1");
    eButtons.forEach((button) => {
      if (button.style.display === "none") {
        button.style.display = "inline-block";
        no1.style.gridTemplateColumns = "repeat(5, 1fr)";
      } else {
        button.style.display = "none";
        no1.style.gridTemplateColumns = "repeat(4, 1fr)";
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector('.display12');
  const buttons = document.querySelectorAll('.number');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const value = this.textContent;
      display.value = display.value + value;
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display12');
  const delButton = document.getElementById('b2');

  delButton.addEventListener('click', function() {
    let currentValue = display.value;
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display12');
  const delButton = document.getElementById('b1');

  delButton.addEventListener('click', function() {
    let currentValue = display.value;
    currentValue = " ";
    display.value = currentValue;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display12');
  const fact = document.getElementById('e2');
  fact.addEventListener('click', function() {
    display.value=display.value + '!';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display12');
  const power = document.getElementById('e6');
  power.addEventListener('click', function() {
    display.value=display.value + '^';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display12');
  const root = document.getElementById('e1');
  root.addEventListener('click', function() {
    const rootSymbol = '\u221A'; 
    display.value = display.value + rootSymbol;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display12');
  const inverse = document.getElementById('e3');

  inverse.addEventListener('click', function() {
    display.value = display.value + '^(-1)' ;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.number, .equal');
  let activeButton = null;

  buttons.forEach(function(button) {
    button.addEventListener('mouseenter', function() {
      if (activeButton !== null) {
        activeButton.style.background = ""; 
      }
      button.style.background = "red";
      activeButton = button; 
    });

    button.addEventListener('mouseleave', function() {
      button.style.background = "";
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display12');
  const equalButton = document.getElementById('b20');
  
  equalButton.addEventListener('click', function() {
    const expression = display.value;
    const result = evaluateExpression(expression);
    display.value = result !== null ? result : 'MATH ERROR';

    setTimeout(function() {
      display.value = '';
    }, 5000);
  });

  function evaluateExpression(expression) {
    try {
      return eval(expression); 
    } catch (error) {
      console.log(error);
      return null; 
    }
  }
});
