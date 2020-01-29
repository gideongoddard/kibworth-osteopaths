// Mobile menu function
let mobileNav = document.getElementById('mobile-nav');
let bars = document.getElementById('bars');
let times = document.getElementById('times');

const toggleMenu = () => {
    if (mobileNav.style.display === 'grid') {
        mobileNav.style.display = 'none';
        bars.style.display = 'inline';
        times.style.display = 'none';
    } else {
        mobileNav.style.display = 'grid';
        bars.style.display = 'none';
        times.style.display = 'inline';
    }
}

// Osteo mobile nav accordion function
let osteoMobNav = document.getElementById('osteo-mob-nav');
let plus = document.getElementById('osteo-plus');
let minus = document.getElementById('osteo-minus')

const toggleAccordion = () => {
    if (osteoMobNav.style.display === 'block') {
        osteoMobNav.style.display = 'none';
        plus.style.display = 'inline';
        minus.style.display = 'none';
    } else {
        osteoMobNav.style.display = 'block';
        plus.style.display = 'none';
        minus.style.display = 'inline';
    }
}

// Osteo lg nav hover function
let osteoLgNav = document.getElementById('osteo-lg-nav');
let osteoDown = document.getElementById('osteo-down');
let osteoUp = document.getElementById('osteo-up');

const toggleOsteoSubnav = () => {
    if (osteoLgNav.style.display === 'flex') {
        osteoLgNav.style.display = 'none';
        osteoDown.style.display = 'inline';
        osteoUp.style.display = 'none';
    } else {
        osteoLgNav.style.display = 'flex';
        osteoDown.style.display = 'none';
        osteoUp.style.display = 'inline';
    }
}

// Google Maps
function initMap() {
    var kibworthOsteopaths = {lat: 52.533, lng: -0.998};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 9, center: kibworthOsteopaths});
    var marker = new google.maps.Marker({position: kibworthOsteopaths, map: map});
}