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

// Pilates mobile nav accordion function
let pilatesMobNav = document.getElementById('pilates-mob-nav');
let pilatesPlus = document.getElementById('pilates-plus');
let pilatesMinus = document.getElementById('pilates-minus')

const togglePilatesAccordion = () => {
    if (pilatesMobNav.style.display === 'block') {
        pilatesMobNav.style.display = 'none';
        pilatesPlus.style.display = 'inline';
        pilatesMinus.style.display = 'none';
    } else {
        pilatesMobNav.style.display = 'block';
        pilatesPlus.style.display = 'none';
        pilatesMinus.style.display = 'inline';
    }
}

// Lg nav expand functions
let osteoLgNav = document.getElementById('osteo-lg-nav');
let osteoDown = document.getElementById('osteo-down');
let osteoUp = document.getElementById('osteo-up');
let pilatesLgNav = document.getElementById('pilates-lg-nav');
let pilatesDown = document.getElementById('pilates-down');
let pilatesUp = document.getElementById('pilates-up');

const toggleOsteoSubnav = () => {
    if (osteoLgNav.style.display === 'flex') {
        osteoLgNav.style.display = 'none';
        osteoDown.style.display = 'inline';
        osteoUp.style.display = 'none';
    } else {
        osteoLgNav.style.display = 'flex';
        pilatesLgNav.style.display = 'none';
        osteoDown.style.display = 'none';
        pilatesUp.style.display = 'none';
        osteoUp.style.display = 'inline';
        pilatesDown.style.display = 'inline';
    }
}

const togglePilatesSubnav = () => {
    if (pilatesLgNav.style.display === 'flex') {
        pilatesLgNav.style.display = 'none';
        pilatesDown.style.display = 'inline';
        pilatesUp.style.display = 'none';
    } else {
        pilatesLgNav.style.display = 'flex';
        osteoLgNav.style.display = 'none';
        pilatesDown.style.display = 'none';
        osteoUp.style.display = 'none';
        pilatesUp.style.display = 'inline';
        osteoDown.style.display = 'inline';
    }
}

// Google Maps
function initOsteoMap() {
    var osteo = {lat: 52.534, lng: -0.999};
    var osteoMap = new google.maps.Map(document.getElementById('home-map'), {zoom: 12, center: osteo});
    var marker = new google.maps.Marker({position: osteo, map: osteoMap});
}

function initPilatesMap() {
    var pilates = {lat: 52.534, lng: -0.931};
    var pilatesMap = new google.maps.Map(document.getElementById('pilates-map'), {zoom: 12, center: pilates});
    var marker = new google.maps.Marker({position: pilates, map: pilatesMap});
}

function initAboutMap() {
    var osteo = {lat: 52.534, lng: -0.999};
    var osteoMap = new google.maps.Map(document.getElementById('about-map'), {zoom: 12, center: osteo});
    var marker = new google.maps.Marker({position: osteo, map: osteoMap});
}

function initAppointmentsMaps() {
    var osteo = {lat: 52.534, lng: -0.999};
    var pilates = {lat: 52.534, lng: -0.931};
    var osteoMap = new google.maps.Map(document.getElementById('appointments-osteo-map'), {zoom: 12, center: osteo});
    var pilatesMap = new google.maps.Map(document.getElementById('appointments-pilates-map'), {zoom: 12, center: pilates});
    var osteoMarker = new google.maps.Marker({position: osteo, map: osteoMap});
    var pilatesMarker = new google.maps.Marker({position: pilates, map: pilatesMap});
}

// Modal
let modal = document.getElementById('takeoverModal');
let span = document.getElementById('close');

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.onreadystatechange = function() {
    let modalCookie = getCookie('modalCookie');
    if (modalCookie != 'read') {
        modal.style.display = 'block';
    }
}

span.onclick = function() {
    modal.style.display = 'none';
    document.cookie = 'modalCookie=read; path=/; max-age=3600';
}