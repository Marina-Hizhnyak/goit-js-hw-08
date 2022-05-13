import throttle from 'lodash.throttle';
import "../css/common.css"
import "../css/01-gallery.css"


const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea")

};
const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextareaInput,1000));

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
  const email = refs.email.value;
  const message = refs.message.value;
  console.log({ email, message });
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
}

 function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

     
   if (savedMessage) {

    const tempMailData = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
  const tempMessageData = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;

  refs.email.value = tempMailData;
  refs.message.value = tempMessageData;
    }  
 }
function onTextareaInput(e) {

  const email = refs.email.value;
  const message = refs.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

