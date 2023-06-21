import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const buttonSubmit = document.querySelector("button");

// запись данных из инпутов в local storage
form.addEventListener("input", throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify({
        email: emailInput.value,
        message: messageInput.value,
    }));
    buttonSubmit.disabled = !(emailInput.value && messageInput.value);
}, 500));

//создание переменной, где будет получать данные из локального хранилища по ключу
const saveData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (saveData) { 
    emailInput.value = saveData.email;
    messageInput.value = saveData.message;
    buttonSubmit.disabled = !(emailInput.value && messageInput.value);
}

form.addEventListener("submit", event => {
    event.preventDefault()

    console.log({ email: emailInput.value, message: messageInput.value })
    
    form.reset()

    localStorage.removeItem("feedback-form-state")

    buttonSubmit.disabled = true;
})