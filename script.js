document.querySelector('.Contact-form').addEventListener('submit', function(event){

let isValid = true;

    const firstName = document.querySelector('#first-name')
    const errorMessage = document.querySelector('#error-message')
    const lastName = document.querySelector('#last-name')
    const errormessage2 = document.querySelector('#error-message2')
    const TextAreaError = document.querySelector('#TextAreaError')
    const textArea = document.querySelector('#textArea')
    if (firstName.value.trim() === ""){

        event.preventDefault();

            errorMessage.innerText = "This feild is required"
            errorMessage.style.display = "block"

            firstName.style.borderColor = "red"
            isValid = false;            
    }else{
        errorMessage.style.display = "none"
        firstName.style.borderColor = ""
    }
    if (lastName.value.trim() === ""){
        event.preventDefault();

        errormessage2.innerText = "This feild is required"
        errormessage2.style.display = "block"
        lastName.style.borderColor="red"
        isValid = false;
    }else{
        errormessage2.style.display = "none"
        lastName.style.borderColor=""
    }
    if (textArea.value.trim()===""){
        event.preventDefault();
        TextAreaError.innerText = "This field is required"
        TextAreaError.style.display = "block"
        
        textArea.style.borderColor="red"
        isValid = false;
    }else{
        TextAreaError.style.display = "none"
        textArea.style.borderColor=""
    }
    const emailError = document.querySelector('#emailError')
    const Email = document.querySelector('#Email')
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(Email.value.trim())){
        event.preventDefault();
        
        emailError.innerText="please enter a valid email address"
        emailError.style.display ="block"
        Email.style.borderColor = "red"
        isValid = false;
    }else{
        emailError.style.display ="none"
        Email.style.borderColor = ""
    }

    const radios = document.getElementsByName('radio');
    const radioErorMessage = document.getElementById('radio-error-message');

    let isRadioSelected = false;

    radios.forEach(function(radio) {
        if (radio.checked) {
            isRadioSelected = true; // A radio button is selected
        }
    });

    if (!isRadioSelected) {
        event.preventDefault(); // Prevent form submission
        radioErorMessage.innerText = "Please select a query type";
        radioErorMessage.style.display = "block"; // Show the error 
        isValid = false;
    } else {
        radioErorMessage.style.display = "none"; // Hide the error message if a radio is selected
    }


    const checkmark = document.querySelector('#checkbox')
    const checkboxErrorMessage = document.querySelector('#checkbox-error-message')

    if(!checkmark.checked){
        event.preventDefault();
        checkboxErrorMessage.innerText = "To submit this form, please consent to being contacted"
        checkboxErrorMessage.style.display = "block"
        isValid = false;
    }else{
        checkboxErrorMessage.style.display = "none"
    }


    if (isValid) {
        // Reset the form fields
        document.getElementById('validationForm').reset();
    }
})



//  let prove = document.querySelector('.prove')
//  prove.addEventListener('click', function(){
//     prove.style.display = "none"
//  })