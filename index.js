const body = document.body;
const aboutBlock = document.getElementById("about-block");
const gallaryLabel = document.getElementById("gallery-label");
const speakers = document.getElementById("speakers");
const mapContacts = document.getElementById("map-contacts");
const application = document.getElementById("application");


document.body.style = `background: rgb(59,16,84);
background: linear-gradient(45deg, rgba(59,16,84,1) 0%, rgba(11,22,61,1) 0%, rgba(11,85,82,1) 100%);`

document.addEventListener("scroll", (e) => {
    const y = window.pageYOffset;


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

    if (y > 2400 && y < 3000) {
        mapContacts.classList.add("active");
    } else {
        mapContacts.classList.remove("active");
    }
    document.body.style = `background: rgb(59,16,84);
    background: linear-gradient(${45 + y / 2500 * 100}deg, rgba(59,16,84,1) 0%, rgba(11,22,61,1) ${y / 2500 * 100}%, rgba(11,85,82,1) 100%);`
});


aboutBlock.classList.add("active");

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