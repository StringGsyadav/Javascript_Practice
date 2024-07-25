let form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('userName').value.trim();
    const email=document.getElementById('useremail').value.trim();
    const phone=document.getElementById('userphone').value.trim();

    const gender=document.querySelector('input[name="gender"]:checked');

    const city=document.querySelectorAll('input[name="city[]"]:checked');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    let isValid = true;
    let errorMessage = '';

    if (name.length < 3 || name.length > 50) {
        errorMessage += 'Name must be between 3 and 50 characters long.\n';
        isValid = false;
    }
    
    if (!emailPattern.test(email)) {
        errorMessage += 'Please enter a valid email address.\n';
        isValid = false;
    }
    
    if (!phonePattern.test(phone)) {
        errorMessage += 'Please enter a valid 10-digit phone number.\n';
        isValid = false;
    }
    
    if (!gender) {
        errorMessage += 'Please select a gender.\n';
        isValid = false;
    }
    
    if (city.length === 0) {
        errorMessage += 'Please select at least one city.\n';
        isValid = false;
    }
    
    if (!isValid) {
        alert(errorMessage);
        event.preventDefault();
    }

    console.log(`Name is : `+name);
    console.log(`email is : `+email);
    console.log(`Phone is : `+phone);
    console.log(`Gender is : `+gender);
    console.log(`City is : `+city);
})
