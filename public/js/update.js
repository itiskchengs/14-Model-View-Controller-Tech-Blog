const buildEditFields = async (event) => {
    event.preventDefault();
    //Create element 
    let label = document.createElement('label');
    let input = document.createElement('input');
    let submit = document.createElement('input');
    let editContainer = document.querySelector('.edit-container');

    //Set value for label
    label.innerHTML = 'Content:';

    //Set attributes
    input.setAttribute('id', 'updateText');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'editBtn');
    submit.setAttribute('name', 'submit');

    //Attach
    editContainer.append(label);
    label.append(input);
    label.append(submit);

    submit.addEventListener('click', postUpdate);
}


const postUpdate = async (event) => {
    event.preventDefault();

    //const postTitle = 'hello';
    const postId = document.querySelector('#post-id').innerHTML;
    const postContent = document.querySelector('#updateText').value;

    console.log(postId);
    console.log(postContent);

    const response = await fetch(`/${postId}`, {
        method: 'PUT',
            body: JSON.stringify({ postContent }),
            headers: {'Content-type': 'application/json'}
    })
    console.log(response.body);
    if (response.ok) {
        console.log('worked')
        document.location.reload()
    } else {
        alert('Failed to update post')
    }
}


document.querySelector('#edit-btn').addEventListener('click', buildEditFields);