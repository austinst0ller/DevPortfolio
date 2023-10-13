let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    } else {
        document.body.classList.remove("dark-theme")
    }
}

// template id: template_67xg7yz
// service id: service_7mrazp4
// public key: 33qECyRNjTfpwpWX3

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_7mrazp4',
            'template_67xg7yz',
            event.target,
            '33qECyRNjTfpwpWX3'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service I use is temporarily unavailable. Please contact me directly at asv00.dev@gmail.com"
            )
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open";
}