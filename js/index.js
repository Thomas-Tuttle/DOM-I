const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Navigation

let navOne = document.getElementsByTagName('a')[0];
navOne.innerText = siteContent['nav']['nav-item-1'];

let navTwo = document.getElementsByTagName('a')[1];
navTwo.innerText = siteContent['nav']['nav-item-2'];

let navThree = document.getElementsByTagName('a')[2];
navThree.innerText = siteContent['nav']['nav-item-3'];

let navFour = document.getElementsByTagName('a')[3];
navFour.innerText = siteContent['nav']['nav-item-4'];

let navFive = document.getElementsByTagName('a')[4];
navFive.innerText = siteContent['nav']['nav-item-5'];

let navSix = document.getElementsByTagName('a')[5];
navSix.innerText = siteContent['nav']['nav-item-6'];

let navSeven = document.createElement('a');
navSeven.setAttribute('href',"#");
navSeven.innerHTML = "Help";

document.getElementsByTagName('nav')[0].appendChild(navSeven);

let googleLink = "http://google.com";
let navEight = document.createElement('a');
navEight.setAttribute('href', googleLink);
navEight.innerHTML = "Google";

document.getElementsByTagName('nav')[0].prepend(navEight);

let navColor = document.querySelectorAll("a");

navColor.forEach (element => {
      element.style.color = 'green';
 });

  // Logo in Nav
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])

//Header Image

let titleH1 = document.getElementsByTagName('h1')[0];
titleH1.innerText = siteContent['cta']['h1'];

titleH1.style.transform = "rotate(-15deg)";


let domButton = document.getElementsByTagName("button")[0];
domButton.innerText = siteContent['cta']['button'];

domButton.style.transform = "rotate(-15deg)";
domButton.style.borderRadius = "15px";
domButton.style.boxShadow = "0px 0px 25px 3px black";
domButton.style.backgroundColor = "green";


let headerImage = document.getElementById("cta-img");
headerImage.setAttribute("src", siteContent["cta"]["img-src"]);

headerImage.style.borderRadius = "50%";
headerImage.style.boxShadow = "0px 0px 25px 3px black";

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", "img/mid-page-accent.jpg")
middleImage.style.borderRadius = "15px";
middleImage.style.boxShadow = "0px 0px 25px 3px black";

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerText = siteContent['main-content']['features-h4'];

let featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerText = siteContent['main-content']['features-content'];

let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerText = siteContent['main-content']['about-h4'];

let aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerText = siteContent['main-content']['about-content'];

let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerText = siteContent['main-content']['services-h4'];

let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerText = siteContent['main-content']['services-content'];

let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerText = siteContent['main-content']['product-h4'];

let productContent = document.getElementsByTagName('p')[3];
productContent.innerText = siteContent['main-content']['product-content'];

let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerText = siteContent['main-content']['vision-h4'];

let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerText = siteContent['main-content']['vision-content'];

// Contact Section

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerText = siteContent['contact']['contact-h4'];

let address = document.getElementsByTagName('p')[5];
address.innerText = siteContent['contact']['address'];

let phone = document.getElementsByTagName('p')[6];
phone.innerText = siteContent['contact']['phone'];

let email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];

let footer = document.getElementsByTagName('p')[8];
footer.innerText = siteContent['footer']['copyright'];

