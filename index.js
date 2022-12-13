const body = document.body;
const aboutBlock = document.getElementById("about-block");
const gallaryLabel = document.getElementById("gallery-label");
const speakers = document.getElementById("speakers");
const mapContacts = document.getElementById("map-contacts");
const application = document.getElementById("application");


document.body.style = `background: rgb(59,16,84);
background: linear-gradient(45deg, rgba(59,16,84,1) 0%, rgba(11,22,61,1) 0%, rgba(11,85,82,1) 100%);`

setInterval(() => {

    const y = window.pageYOffset;

    if (window.screen.width < 700) {

    } else {

        if (y >= 0 && y < 400) {
            aboutBlock.classList.add("active");
        } else {
            aboutBlock.classList.remove("active");
        }

        if (y > 400 && y < 1300) {
            speakers.classList.add("active");
        } else {
            speakers.classList.remove("active");
        }

        if (y > 1000 && y < 1900) {
            gallaryLabel.classList.add("active");
        } else {
            gallaryLabel.classList.remove("active");
        }

        if (y > 1700 && y < 2400) {
            application.classList.add("active");
        } else {
            application.classList.remove("active");
        }

        if (y > 2400 && y < 3300) {
            mapContacts.classList.add("active");
        } else {
            mapContacts.classList.remove("active");
        }
    }

    document.body.style = `background: rgb(59,16,84);
    background: linear-gradient(${45 + y / 2500 * 100}deg, rgba(59,16,84,1) 0%, rgba(11,22,61,1) ${y / 2500 * 100}%, rgba(11,85,82,1) 100%);`
}, 100);


aboutBlock.classList.add("active");
if (window.screen.width < 700) {
    aboutBlock.classList.add("active");
    speakers.classList.add("active");
    gallaryLabel.classList.add("active");
    application.classList.add("active");
    mapContacts.classList.add("active");

}

const getCount = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://vr-days.onrender.com/get_count');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status !== 200) { // HTTP ошибка?
            // обработаем ошибку
            alert('Ошибка: ' + xhr.status);
        }
        document.getElementById("application-label-count").textContent = xhr.response;
    }
}

getCount();

const checkName = (name) => {
    const nameRegex = /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/;
    const prov = nameRegex.test(name);
    if (name.length < 3 || prov === false) {
        return false;
    } else {
        return true;
    }

}

const badName = (name) => {
    // TODO: действие при неправильном имени, вывести сообщение под или над полем инпута
    document.getElementById("error-name").textContent = "Некорректное имя";
}

const checkMail = (email) => {
    const emailRegex = /^(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,}$/;
    const mpr = emailRegex.test(email);
    if (email.length < 6 || mpr === false) {
        return false;
    } else {
        return true;
    }
    // TODO: Вернуть true если правильная почта, иначе false
}

const badMail = (email) => {
    // TODO: действие при неправильном имени, вывести сообщение под или над полем инпута
    document.getElementById("error-mail").textContent = "Некорректная почта";

}

const badResponse = () => {
    // TODO: действие при ошибке запроса, например интернета нет
    const mas = document.getElementById("error-response").textContent = "Что-то произошло не так,но мы уже с этим разбираемся♥";

}
const goodResponse = () => {
    // TODO: действие при хорошем ответе Мы вас ждем!Проверяйте вкладку "спам"!
    document.getElementById("welcome").textContent = "Мы вас ждем!Проверяйте вкладку спам!";
    document.getElementById("error-mail").textContent = "";
    document.getElementById("error-response").textContent = "";
    document.getElementById("error-name").textContent = "";
    document.getElementById("error-response").textContent = "";
}

const sendMail = () => {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;

    ocument.getElementById("welcome").textContent = "";
    document.getElementById("error-mail").textContent = "";
    document.getElementById("error-response").textContent = "";
    document.getElementById("error-name").textContent = "";
    document.getElementById("error-response").textContent = "";

    if (!checkName(name)) {
        badName();
        return;
    }
    if (!checkMail(mail)) {
        badMail();
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://vr-days.onrender.com/post_mail?to=${mail}&name=${name}`);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status !== 200 || xhr.response == "Fail") {
            badResponse();
        }
        if (xhr.response == "OK") {
            goodResponse();
        }
    }

}


document.getElementById("send-btn").addEventListener("click", () => {
    sendMail();
});