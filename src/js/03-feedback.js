import throttle from 'lodash.throttle';
import "../css/common.css"
import "../css/01-gallery.css"


const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea")

};
const formData = {};
const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextareaInput,1000));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
    e.target.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
}


 function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
      refs.email.value = JSON.parse(savedMessage).email;
      refs.message.value = JSON.parse(savedMessage).message;
  }
 }
function onTextareaInput(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
}

