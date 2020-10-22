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

// Work Filter

let tabsWork = document.body.querySelector('.tabs-work');
let boxCellImg = document.body.querySelector('.box-cell');

tabsWork.addEventListener('click', function (e) {

    tabsWork.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    for (let item of boxCellImg.children) {
        item.hidden = true;
    }

    let attrCurTab = e.target.getAttribute('data');
    let curCells = boxCellImg.querySelectorAll(`[data=${attrCurTab}]`);

    curCells.forEach((item) => {
        item.hidden = false;
    })

    if (!e.target.hasAttribute('data')) {
        for (let item of boxCellImg.children) {
            item.hidden = false;
        }
    };
})

// Work Loaded

let imgsPath1 = [
    {
        src: "./img/graphic design/graphic-design4.jpg",
        data: "graphic-design",
        p: 'Graphic Design',
    },
    {
        src: "./img/graphic design/graphic-design5.jpg",
        data: "graphic-design",
        p: 'Graphic Design',
    },
    {
        src: "./img/graphic design/graphic-design6.jpg",
        data: "graphic-design",
        p: 'Graphic Design',
    },
    {
        src: "./img/landing page/landing-page4.jpg",
        data: "landing-page",
        p: 'Landing Pages',
    },
    {
        src: "./img/landing page/landing-page5.jpg",
        data: "landing-page",
        p: 'Landing Pages',
    },
    {
        src: "./img/landing page/landing-page6.jpg",
        data: "landing-page",
        p: 'Landing Pages',
    },
    {
        src: "./img/web design/web-design4.jpg",
        data: "web-design",
        p: 'Web Design',
    },
    {
        src: "./img/web design/web-design5.jpg",
        data: "web-design",
        p: 'Web Design',
    },
    {
        src: "./img/web design/web-design6.jpg",
        data: "web-design",
        p: 'Web Design',
    },
    {
        src: "./img/wordpress/wordpress4.jpg",
        data: "wordpress",
        p: 'Wordpress',
    },
    {
        src: "./img/wordpress/wordpress5.jpg",
        data: "wordpress",
        p: 'Wordpress',
    },
    {
        src: "./img/wordpress/wordpress6.jpg",
        data: "wordpress",
        p: 'Wordpress',
    },
];

let imgsPath2 = [
    {
        src: "./img/graphic design/graphic-design7.jpg",
        data: "graphic-design",
        p: 'Graphic Design',
    },
    {
        src: "./img/graphic design/graphic-design8.jpg",
        data: "graphic-design",
        p: 'Graphic Design',
    },
    {
        src: "./img/graphic design/graphic-design9.jpg",
        data: "graphic-design",
        p: 'Graphic Design',
    },
    {
        src: "./img/landing page/landing-page7.jpg",
        data: "landing-page",
        p: 'Landing Pages',
    },
    {
        src: "./img/landing page/landing-page1.jpg",
        data: "landing-page",
        p: 'Landing Pages',
    },
    {
        src: "./img/landing page/landing-page2.jpg",
        data: "landing-page",
        p: 'Landing Pages',
    },
    {
        src: "./img/web design/web-design7.jpg",
        data: "web-design",
        p: 'Web Design',
    },
    {
        src: "./img/web design/web-design2.jpg",
        data: "web-design",
        p: 'Web Design',
    },
    {
        src: "./img/web design/web-design3.jpg",
        data: "web-design",
        p: 'Web Design',
    },
    {
        src: "./img/wordpress/wordpress7.jpg",
        data: "wordpress",
        p: 'Wordpress',
    },
    {
        src: "./img/wordpress/wordpress8.jpg",
        data: "wordpress",
        p: 'Wordpress',
    },
    {
        src: "./img/wordpress/wordpress9.jpg",
        data: "wordpress",
        p: 'Wordpress',
    },
];

let newImgWork1 = [];
let newImgWork2 = [];

imgsPath1.forEach((elem) => {
    newImgWork1.push(`<div class="cell" data="${elem.data}"><img src="${elem.src}" alt="img-work"><div class="hover-info row align-items--center"><img src="./img/work/icon.png" alt="icon"><p class="hover-info-general highlighted">Creative design</p><p class="hover-info-group">${elem.p}</p></div></div>`);
});

imgsPath2.forEach((elem) => {
    newImgWork2.push(`<div class="cell" data="${elem.data}"><img src="${elem.src}" alt="img-work"><div class="hover-info row align-items--center"><img src="./img/work/icon.png" alt="icon"><p class="hover-info-general highlighted">Creative design</p><p class="hover-info-group">${elem.p}</p></div></div>`);
});

function showLoader(id) {
    document.querySelector(id).style.display = 'inline-block';
};

function hideLoader(id) {
    document.querySelector(id).style.display = 'none';
};

$('#btn-work-loaded').one('click', firstClick);

function firstClick(evt) {

    evt.preventDefault();
    showLoader('#loaded-work');

    setTimeout(() => {
        hideLoader('#loaded-work');

        $('.box-cell').append(newImgWork1.join(""));

        $(this).click(function (evt) {

            evt.preventDefault();
            showLoader('#loaded-work');

            setTimeout(() => {
                hideLoader('#loaded-work');

                $('.box-cell').append(newImgWork2.join(""));
                $(this).detach();
            }, 2000);
        });
    }, 2000);
};

// Masonry

let $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
});

$grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
});

// Masonry loaded

let newMasonryImg = [
    {
        src: "./img/gallery/3.jpg",
    },
    {
        src: "./img/gallery/ia-Pools-1 1.svg",
    },
    {
        src: "./img/gallery/2-city.jpg",
    },
];

$('#btn-gallery-loaded').on('click', (e) => {

    e.preventDefault();
    showLoader('#loaded-gallery');

    setTimeout(() => {
        hideLoader('#loaded-gallery');
        addImgMasonry();
    }, 2000);
});

function addImgMasonry() {

    newMasonryImg.forEach((item) => {
        let el = document.createElement('img');
        el.className = 'grid-item';
        el.src = item.src;
        $('.grid').append(el).
            masonry('appended', el);
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}