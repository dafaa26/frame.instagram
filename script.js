function toggleLike(imgEl) {
  const icon = imgEl.parentElement.querySelector('.post-actions span');
  toggleLikeIcon(icon);
}

function toggleLikeIcon(el) {
  if (el.textContent === '♡') {
    el.textContent = '❤️';
    el.classList.add('liked');
  } else {
    el.textContent = '♡';
    el.classList.remove('liked');
  }
}

function switchPage(el) {
  const target = el.getAttribute('data-target');
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(target).classList.add('active');

  document.querySelectorAll('.menu-icon').forEach(icon => {
    icon.classList.remove('active');
  });
  el.classList.add('active');
}

function playStory(el) {
  const imgEl = el.querySelector('img');
  if (!imgEl) return;
  const src = imgEl.src;
  const modal = document.getElementById('storyModal');
  const storyImage = document.getElementById('storyImage');
  storyImage.src = src;
  modal.style.display = 'flex';
}

function closeStory() {
  const modal = document.getElementById('storyModal');
  modal.style.display = 'none';
}

// Optional: close modal if clicked outside image
window.onclick = function(event) {
  const modal = document.getElementById('storyModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


function sharePost() {
  const fileInput = document.getElementById('fileInput');
  const captionInput = document.getElementById('captionInput');
  const msg = document.getElementById('shareMessage');

  if (!fileInput.files.length) {
    msg.textContent = "Please select an image to share!";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Post shared successfully!";
  msg.style.color = "green";

  // Clear inputs
  fileInput.value = "";
  captionInput.value = "";

  // For demo, no actual post creation
}

window.onload = () => {
  // Could add animations or other initialization here
};
