    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
      let inputElement = document.getElementById('inputField');
     
      let regex = /^[a-zA-Z0-9]+$/;
// Regular expression pattern for alphanumeric input
  
      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message
     inputElement.addEventListener('blur', function(){
      
        if (!regex.test(inputElement.value)){
          alert('input is not alphanumeric. Please try again.');   
        }
      
      })
    

      let form = document.getElementById('myForm');
      form.addEventListener('submit',function(event){
        if (!regex.test(inputElement.value)){
          alert('input is not alphanumeric.'); 
          event.preventDefault();
        }
        else{
          alert('Form submitted!')
        }
      })