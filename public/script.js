console.log("Script loaded");

whereAmI();

function checkURL(url){
    //console.log(`Checking URL: ${url}`);

    const home = url.includes('index.html');
    const about = url.includes('about');
    const blog = url.includes('blog');
    const contact = url.includes('contact');

    /* Debugging logs 
    console.log(`Home check: ${home}`);
    console.log(`About check: ${about}`);
    console.log(`Blog check: ${blog}`);
    console.log(`Contact check: ${contact}`);
    */

    switch(true) {
        case home:
            placeHereText('home');
            break;
        case about:
            placeHereText('about');
            break;
        case blog:
            placeHereText('blog');
            break;
        
        case contact:
            placeHereText('contact');
            break;
        default:
            placeHereText('home');
            break;
        }
    }

function placeHereText(className) {
    const span = document.querySelector(`.${className}`);
    if (span) {
        span.textContent = ' (you are here)';
    }
}

function whereAmI() {
    const url = window.location.href.toLowerCase() ;
    checkURL(url);
}

