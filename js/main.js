'use strict';

// Tabs

let tabs = document.body.querySelector('.tabs');
let tabsContent = document.body.querySelector('.tabs-content');

tabs.addEventListener('click', function (e) {

    tabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    let attrCurTab = e.target.getAttribute('data-tab');

    tabsContent.querySelector('.active-desc').classList.remove('active-desc');
    tabsContent.querySelector(`[data-cont=${attrCurTab}]`).classList.add('active-desc');

})

// Work

let tabsWork = document.body.querySelector('.tabs-work');
let boxCellImg = document.body.querySelector('.box-cell');


tabsWork.addEventListener('click', function (e) {

    tabsWork.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');


    for (let item of boxCellImg.children) {
        item.hidden = true;
    }

    let attrCurTab = e.target.getAttribute('data');
    console.log(attrCurTab);
    let curCells = boxCellImg.querySelectorAll(`[data=${attrCurTab}]`);


    curCells.forEach((item) => {
        item.hidden = false;
        // console.log(item);
    })

    if (e.target.hasAttribute('data') === false) {
        for (let item of boxCellImg.children) {
            item.hidden = false;
        }
    };

})




// Masonry

console.log($('.grid'));
$('.grid').masonry({
    // options...
    // itemSelector: '.grid-item',
    // columnWidth: 360,
    // gutter: 'gutter-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',

});
// console.log($('.grid').children');

