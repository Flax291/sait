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

const checkName = () => {
    // TODO: Вернуть true если правильное имя, иначе false
}

const badName = () => {
    // TODO: действие при неправильном имени, вывести сообщение под или над полем инпута
    document.getElementById("error-name").textContent = "Некорректное имя";
}

const checkMail = () => {
    // TODO: Вернуть true если правильная почта, иначе false
}

const badMail = () => {
    // TODO: действие при неправильном имени, вывести сообщение под или над полем инпута
    document.getElementById("error-mail").textContent = "Некорректная почта";
}

const badResponse = () => {
    // TODO: действие при ошибке запроса, например интернета нет
    document.getElementById("error-response").textContent = "Произошла непредвиденная ошибка";
}
const goodResponse = () => {
    // TODO: действие при хорошем ответе
    // Вот тут можно уже и кнопку спрятать и сказать чтобы спам проверили 
}

const sendMail = () => {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;

    if (checkName(name)) {
        badName();
    }
    if (checkMail(mail)) {
        badMail();
    }

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://vr-days.onrender.com/post_mail?to=${mail}&name=${name}`);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status !== 200) {
            badResponse();
        }
        if (xhr.response == "OK")
            goodResponse();
    }

}


document.getElementById("send-btn").addEventListener("click", () => {
    sendMail();
});