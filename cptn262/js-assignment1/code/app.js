const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const coffeeBG = 'url(./img/coffee.jpg)'
const nasaBG = 'url(./img/nasa2.jpg)'
const sandBG = 'url(./img/sand.jpg)'
const plantBG = 'url(./img/plants.jpg)'
const sugarBG = 'url(./img/sugar_detox.jpg)'
const instagramBG = 'url(./img/ig-2.jpg)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green,
        background: coffeeBG
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black,
        background: nasaBG
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown,
        background: sandBG
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue,
        background: plantBG
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink,
        background: sugarBG
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue,
        background: instagramBG
    }
]

// Instructions
// Take the data above and display it as tiles on the page

const target = document.querySelector('#content');

let html = '';

for(object of data) {
   html  = html + `<div class="card" style="background-color:${object.color} ;background-image:${object.background}">
   <div class="over"></div>
   <h4 class="category">${object.topic}</h4>
   <h2 class="tag-line">${object.title}</h2>
   <a href="#" class="button">Read for ${object.price}</a>
   </div>`
}

target.innerHTML = html;


