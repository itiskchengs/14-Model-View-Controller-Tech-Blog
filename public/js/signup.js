const signUpFormHandler = async (e) => {
    console.log('Im here');
    e.preventDefault();
    
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    
    const response = await fetch ('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert('Something didnt work');
    }
  }

  const submitForm = document.querySelector('#signup-submit');
  console.log(submitForm);

submitForm.addEventListener('click', signUpFormHandler);