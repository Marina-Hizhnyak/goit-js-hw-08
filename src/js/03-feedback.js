import throttle from 'lodash.throttle';
import "../css/common.css"
import "../css/01-gallery.css"


const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea")

};
// const formData = {};
const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextareaInput,1000));

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(refs.form);
    formData.forEach((value, key) => {
        console.log({ key, value });
    });
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}


 function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

     
   if (savedMessage) {
       const getObject = JSON.parse(savedMessage);
       if (getObject) {
           Object.keys(getObject).forEach((key) => {
                refs.form.elements[key].value = getObject[key];
            });
        }
    }  
 }
function onTextareaInput(e) {

    const {name, value} = e.target
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    
}

