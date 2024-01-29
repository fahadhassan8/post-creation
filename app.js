let inputModal = document.getElementById("input-modal");
let modalWrapper = document.querySelector(".modal-wrapper");
let closeBtn = document.querySelector("#closeBtn");
let createPostButton = document.querySelector("#createPostButton");
let postArea = document.querySelector(".post-area");
let textArea = document.querySelector("#textArea");

function showModal() {
  modalWrapper.style.opacity = "1";
  modalWrapper.style.zIndex = "1";
}
inputModal.addEventListener("click", showModal);

function closeModal() {
  modalWrapper.style.zIndex = "-1";
  modalWrapper.style.opacity = "0";
}
closeBtn.addEventListener("click", closeModal);

postInner = document.querySelector('.post-innr');

function submitPost() {
  postArea.style.margin = "0 auto"
  postArea.style.width = "42%"
  postArea.style.color = "#000"
  postArea.style.fontSize = "1.8em"
  postArea.style.borderRadius = "5px"
  postArea.style.padding = "0.1em 0.2em"
  postArea.style.marginTop = "0.8em"
  postArea.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
  postArea.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif'"
  postArea.style.backgroundColor = "#ecf0f1"
  postArea.innerHTML += `
<div class="post-innr">
<textarea>${textArea.value}</textarea>
</div>
`;
textArea.value = '';
}
