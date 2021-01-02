

var $_ = function (selector, node = document) {    // hujjatdan biror elementni tanlab beruvchi funksiya.
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text){
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute(`class`, elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
}

var headerMenu = $_(`.header-site__menu-btn`);
var navbar = $_(`.site-nav`);

headerMenu.addEventListener(`click`, function(evt){
  navbar.classList.toggle(`d-none`);
});


var channelObjects = [
  {
    channelItemImg: `https://picsum.photos//250/150`,
    channelItemHeading: `A Brief History Of Creation`,
    channelItemInfo: `80k views  ·  3 days ago`,
    channelItemName: `Dollie Blair`,
    videoDuration: `4:15`
  },
  {
    channelItemImg: `https://picsum.photos//251/150`,
    channelItemHeading: `Happy New Year`,
    channelItemInfo: `95k views  ·  4 days ago`,
    channelItemName: `Dollie Blair`,
    videoDuration: `6:36`
  },
  {
    channelItemImg: `https://picsum.photos//252/150`,
    channelItemHeading: `A Brief History Of Creation`,
    channelItemInfo: `180k views  ·  5 days ago`,
    channelItemName: `Dollie Blair`,
    videoDuration: `5:19`
  },
  {
    channelItemImg: `https://picsum.photos//253/150`,
    channelItemHeading: `Tarkan Gulumse Kaderine`,
    channelItemInfo: `20k views  ·  1 days ago`,
    channelItemName: `Dollie Blair`,
    videoDuration: `4:15`
  },
  {
    channelItemImg: `https://picsum.photos//254/150`,
    channelItemHeading: `A Brief History Of Creation`,
    channelItemInfo: `65k views  ·  2 days ago`,
    channelItemName: `Dollie Blair`,
    videoDuration: `3:11`
  }
];


var elChannelTemplate = $_(`.channel-template`).content;
var elChannelTemplateFragment = document.createDocumentFragment();

channelObjects.forEach (function(channelObject){
  var elChannelItem = elChannelTemplate.cloneNode(true);

  $_(`.channel__item-img`, elChannelItem).src = channelObject.channelItemImg;
  $_(`.channel__item-heading`, elChannelItem).textContent = channelObject.channelItemHeading;
  $_(`.channel__item-info`, elChannelItem).textContent = channelObject.channelItemInfo;
  $_(`.channel__item-name`, elChannelItem).textContent = channelObject.channelItemName;
  $_(`.video-duration`, elChannelItem).textContent = channelObject.videoDuration;

  elChannelTemplateFragment.appendChild(elChannelItem);

});

$_(`.channel__list`).appendChild(elChannelTemplateFragment);


/* <li class="channel__item">
<a href="https://youtube.com" class="channel__item-link">
<img class="channel__item-img" src="./img/video-img-1.jpg" alt="image" width="250" height="150">
<h4 class="channel__item-heading">A Brief History Of Creation</h4>
<div class="channel__item-infobox">
  <span class="channel__item-info">80k views  ·  3 days ago</span>
  <span class="channel__item-name">Dollie Blair</span>
</div>
<span class="video-duration">4:15</span>
</a>
</li> */