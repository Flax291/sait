const body = document.body;
const aboutBlock = document.getElementById("about-block");
const gallaryLabel = document.getElementById("gallery-label");
const speakers = document.getElementById("speakers");
const mapContacts = document.getElementById("map-contacts");


document.body.style = `background: rgb(59,16,84);
background: linear-gradient(45deg, rgba(59,16,84,1) 0%, rgba(11,22,61,1) 0%, rgba(11,85,82,1) 100%);`

document.addEventListener("scroll", (e) => {



    if (window.pageYOffset >= 0 && window.pageYOffset < 400) {
        aboutBlock.classList.add("active");
    } else {
        aboutBlock.classList.remove("active");
    }

    if (window.pageYOffset > 400 && window.pageYOffset < 1300) {
        speakers.classList.add("active");
    } else {
        speakers.classList.remove("active");
    }

    if (window.pageYOffset > 1000 && window.pageYOffset < 1800) {
        gallaryLabel.classList.add("active");
    } else {
        gallaryLabel.classList.remove("active");
    }

    if (window.pageYOffset > 1700 && window.pageYOffset < 2300) {
        mapContacts.classList.add("active");
    } else {
        mapContacts.classList.remove("active");
    }
    document.body.style = `background: rgb(59,16,84);
    background: linear-gradient(${45 + window.pageYOffset / 2500 * 100}deg, rgba(59,16,84,1) 0%, rgba(11,22,61,1) ${window.pageYOffset / 2500 * 100}%, rgba(11,85,82,1) 100%);`
});


aboutBlock.classList.add("active");


function sendMail(name, email) {
    Email.send({
        SecureToken: "0ee7d58d-8ed9-44a2-a5cc-41e4cc86a011",
        To: email,
        From: "fedorichev16@gmail.com",
        Subject: "This is the subject",
        Body: `<strong>${name}</strong>`
    }).then(
        message => alert(message)
    );
}

sendMail("lev", "fedorichev16@gmail.com");