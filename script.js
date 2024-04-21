function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function downCV(){
    const pdfUrl = 'assets/PLDS_CV.pdf';
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'PLDS_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function goToLinkdIn(){
    window.location="https://www.linkedin.com/in/philiplorenzdlsarmiento/"
}