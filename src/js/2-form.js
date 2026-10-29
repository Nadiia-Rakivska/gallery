
// Оголоси поза будь-якими функціями об’єкт formData з полями email та message,
// які спочатку мають порожні рядки як значення: { email: "", message: "" }.
// Використовуй метод делегування для відстеження змін у формі через подію input.
// Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище.
//  Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй
//  їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, що обидва поля форми заповнені. Якщо будь-яке з
//  полів (властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields».
// Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями,
// очисти локальне сховище, об’єкт formData і поля форми.



const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector('[name="email"]');
const msgEl = document.querySelector('[name="message"]');


const formData={
  email: "",
   message: ""
}
formEl.addEventListener('input', e=>{
  if (e.target.nodeName!=="INPUT"&&e.target.nodeName!=="TEXTAREA")return;
  formData.email=e.currentTarget.elements.email.value;
  formData.message=e.currentTarget.elements.message.value;


const jsonFormData = JSON.stringify(formData);

localStorage.setItem("feedback-form-state", jsonFormData);




})
window.addEventListener("DOMContentLoaded",e=>{
const data = localStorage.getItem("feedback-form-state");
if (data) {
const res = JSON.parse(data);

formData.email=res.email;
formData.message=res.message;


emailEl.value = formData.email;
msgEl.value = formData.message;
}


})
//  Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями,
// очисти локальне сховище, об’єкт formData і поля форми.
formEl.addEventListener("submit",e=>{
  e.preventDefault();
 if (formData.email.trim()===""||formData.message.trim()==="") {
  alert("Fill please all fields")
  return
 }
console.log(formData);
localStorage.removeItem("feedback-form-state")
formData.email="";
formData.message="";

formEl.reset();

})