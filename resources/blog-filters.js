function showAll () {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'grid';
    }
}

function weeklyTips () {
    let cards = document.getElementsByClassName('card');
    let weeklyTipsItems = document.getElementsByClassName('weekly-tip');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    for (let i = 0; i < weeklyTipsItems.length; i++) {
        weeklyTipsItems[i].style.display = 'grid';
    }
}

function anotherCat() {
    let cards = document.getElementsByClassName('card');
    let anotherCatItems = document.getElementsByClassName('another-cat');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    for (let i = 0; i < anotherCatItems.length; i++) {
        anotherCatItems[i].style.display = 'grid';
    }
}