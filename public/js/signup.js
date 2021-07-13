const signUpFormHandler = async (e) => {
    console.log('Im here');
    e.preventDefault();
    
    const email = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    
    let newUser = {
        email: email,
        password: password,
    }

    const response = await fetch ('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if(response.ok){
        document.location.replace('/signin')
    }else{
        alert('Something didnt work');
    }
  }

  const submitForm = document.querySelector('#signup-submit');
  console.log(submitForm);

 submitForm.addEventListener('click', signUpFormHandler);