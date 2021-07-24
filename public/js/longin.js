const signInFormHandler = async (e) => {
    e.preventDefault();
    
    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    const response = await fetch ('/api/user/signin', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert('Something didnt work');
    }
  }

  const submitForm = document.querySelector('#signin-submit');
  console.log(submitForm);

 submitForm.addEventListener('click', signInFormHandler);