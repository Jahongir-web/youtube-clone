

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
    channelItemHeading: `Fenomen`,
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

var recommendedObjects = [
  {
    recommendedItemImg: `https://picsum.photos//540/250`,
    recommendedItemHeading: `Dude You Re Getting A Telescope`,
    recommendedItemInfo: `80k views  ·  2 months ago`,
    recommendedItemName: `Gussie French`,
    recommendedVideoDuration: `8:45`
  },
  {
    recommendedItemImg: `https://picsum.photos//541/250`,
    recommendedItemHeading: `Happy New Year`,
    recommendedItemInfo: `95k views  ·  4 months ago`,
    recommendedItemName: `Ozodbek Nazarbekov`,
    recommendedVideoDuration: `6:36`
  },
  {
    recommendedItemImg: `https://picsum.photos//542/250`,
    recommendedItemHeading: `A Brief History Of Creation`,
    recommendedItemInfo: `180k views  ·  5 days ago`,
    recommendedItemName: `Dollie Blair`,
    recommendedVideoDuration: `5:19`
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
  $_(`.video-duration`, elChannelItem).textContent = channelObject.recommendedVideoDuration;

  elChannelTemplateFragment.appendChild(elChannelItem);

});

$_(`.channel__list`).appendChild(elChannelTemplateFragment);



var elRecommendedTemplate = $_(`.recommended-template`).content;
var elRecommendedTemplateFragment = document.createDocumentFragment();

recommendedObjects.forEach (function(recommendedObject){
  var elRecommendedItem = elRecommendedTemplate.cloneNode(true);

  $_(`.recommended__item-img`, elRecommendedItem).src = recommendedObject.recommendedItemImg;
  $_(`.recommended__item-heading`, elRecommendedItem).textContent = recommendedObject.recommendedItemHeading;
  $_(`.recommended__item-info`, elRecommendedItem).textContent = recommendedObject.recommendedItemInfo;
  $_(`.recommended__item-name`, elRecommendedItem).textContent = recommendedObject.recommendedItemName;
  $_(`.recommended_video-duration`, elRecommendedItem).textContent = recommendedObject.recommendedVideoDuration;

  elRecommendedTemplateFragment.appendChild(elRecommendedItem);

});

$_(`.recommended__list`).appendChild(elRecommendedTemplateFragment);


/* <li class="recommendet__item">
   <a href="https://youtube.com" target="_blank" class="recommendet__item-link">
   <img class="recommendet__item-img" src="./img/recommend-img-1.jpg" alt="imwidth="540" height="250">
   <h4 class="recommendet__item-heading">Dude You Re Getting A Telescope</h4>
   <div class="recommendet__item-infobox">
    <span class="recommendet__item-info">80k views  ·  3 months ago</span>
              <span class="recommendet__item-name">Dollie Blair</span>
   </div>
  <span class="recommendet__video-duration">4:15</span>
  </a>
 </li> */