const localhost = `https://awesom-books-library-server-side-production.up.railway.app`;
const imageInput = document.getElementById('picture');
let nameInput = document.getElementById('name');
let descriptionInput = document.getElementById('description');
let comment = document.getElementById('comments');
let likes = document.getElementById('likes');
let priceInput = document.getElementById('price');
let RtypeInput = document.getElementById('Rtype');
let addRoomBtn = document.getElementById('addRoomBtn');

document.addEventListener('DOMContentLoaded', function () {
});

async function submitForm() {
  const formData = new FormData();
  formData.append('picture', imageInput.value);
  formData.append('name', nameInput.value);
  formData.append('description', descriptionInput.value);
  formData.append('Rtype', RtypeInput.value);
  formData.append('comments', comment.value);
  formData.append('likes', likes.value);
  formData.append('price', priceInput.value);

  try {
      let req = await fetch(`${localhost}/api/books/addBook`, {
          method: 'POST',
          body: (formData)
      });

      if (!req.ok) {
          console.log('Error occurred while uploading data');
      } else {
          const data = await req.json();
          imageInput.value = '';
          nameInput.value = '';
          descriptionInput.value = '';
          RtypeInput.value = '';
          comment.value = '';
          likes.value = '';
          priceInput.value = '';
      }
  } catch (error) {
      console.log(error + 'error occurred');
  }
}
