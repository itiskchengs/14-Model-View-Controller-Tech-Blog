const postBlog = async (e) => {
    e.preventDefault();

    const textTitle = document.querySelector('#textTitle').value.trim();
    const textContent = document.querySelector('#textContent').value.trim();

    const response = await fetch('api/post', {
        method: 'POST',
        body: JSON.stringify({textTitle, textContent}),
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok){
        document.location.replace('/dashboard');
    } else {
        alert('Something didnt work');
    }
}

document.querySelector('#post-textSubmit').addEventListener('click', postBlog);