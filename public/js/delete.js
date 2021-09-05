const deletePost = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('#post-id').innerHTML;
    console.log(postId);

    const response = await fetch(`/${postId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to delete request');
    }
};

document
  .querySelector('#delete-btn').addEventListener('click', deletePost);