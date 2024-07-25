let form=document.querySelector('form')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const username=document.getElementById('username').value;

    const password=document.getElementById('userpassword').value;

    const email=document.getElementById('useremail').value;

    const mob=document.getElementById('userphone').value;


    console.log(username);
    console.log(password);
    console.log(email);
    console.log(mob);
})