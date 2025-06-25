document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#bmi-form');
  const heightInput = document.querySelector('#height');
  const weightInput = document.querySelector('#weight');
  const resultDiv = document.querySelector('#result');
  const heightError = document.querySelector('#height-error');
  const weightError = document.querySelector('#weight-error');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset errors
    heightError.classList.remove('show');
    weightError.classList.remove('show');
    
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    
    // Validate inputs
    let isValid = true;
    
    if (isNaN(height) || height < 50 || height > 250) {
      heightError.classList.add('show');
      isValid = false;
    }
    
    if (isNaN(weight) || weight < 10 || weight > 300) {
      weightError.classList.add('show');
      isValid = false;
    }
    
    if (!isValid) {
      resultDiv.classList.remove('show');
      return;
    }
    
    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);
    let category = '';
    let categoryClass = '';
    
    if (bmi < 18.5) {
      category = 'Underweight';
      categoryClass = 'underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
      categoryClass = 'normal';
    } else if (bmi < 29.9) {
      category = 'Overweight';
      categoryClass = 'overweight';
    } else {
      category = 'Obesity';
      categoryClass = 'obesity';
    }
    
    // Display result
    resultDiv.innerHTML = `
      <p>Your BMI is <strong>${bmi.toFixed(1)}</strong></p>
      <p class="bmi-category ${categoryClass}">${category}</p>
    `;
    resultDiv.classList.add('show');
  });

  // Input validation on blur
  heightInput.addEventListener('blur', function() {
    const height = parseFloat(this.value);
    if (isNaN(height) || height < 50 || height > 250) {
      heightError.classList.add('show');
    } else {
      heightError.classList.remove('show');
    }
  });

  weightInput.addEventListener('blur', function() {
    const weight = parseFloat(this.value);
    if (isNaN(weight) || weight < 10 || weight > 300) {
      weightError.classList.add('show');
    } else {
      weightError.classList.remove('show');
    }
  });
});