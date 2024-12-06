//Code for all pages-----------------------------------------------------------------------------------------------------

//Array for navigation links
const navLinksArr = [
    {
        text: 'Home',
        path: 'index.html',
    },
    {
        text: 'Products',
        path: 'products.html',
    },
    {
        text: 'Contact',
        path: 'contact.html',
    },
    {
        text: 'Author',
        path: 'author.html',
    }
]
//Dynamic creating  nav menu
function createNavLink(link){
    let htmlCode = `<li class="nav-item px-3">
    <a href="${link.path}" class="nav-link">${link.text}</a>
    </li>`;
    return htmlCode;
}
let navLink = '';

for(let link of navLinksArr){
    navLink += createNavLink(link);
}

document.querySelector('.navbar-nav').innerHTML += navLink;


//Dynamic creating footer links
function createFooterNav(link){
    let htmlCode = `<li class="nav-item mb-2"><a href="${link.path}" class="nav-link p-0 text-light">${link.text}</a></li>`;
    return htmlCode;
}
let footerNav = '';

for(let link of navLinksArr){
    footerNav += createFooterNav(link);
}
document.querySelector('#footernav').innerHTML += footerNav;

//Modals for Buy Now button
$(document).ready(function(){
     $(document).on('click', '.addToCart', function(){ 
    let productText = $(this).closest('.card').find('.card-title').text(); 
    $('#cart').html(productText + ' is added to cart');
    $('#addedToCart').modal('show'); 
    }); 
});

//Array with products
const productsArr = [
    {
        img: "img/galaxys24.webp",
        text: "Galaxy S24 ULTRA",
        price: 'PRICE: 1500$',
        type: 'Phones'
    },
    {
        img: "img/iphone15.webp",
        text: "Iphone 15 Pro 8GB",
        price: 'PRICE: 1400$',
        type: 'Phones'
    },
    {
        img: "img/zfold.webp",
        text: "Galaxy Z Fold5",
        price: 'PRICE: 1950$',
        type: 'Phones'
    },
    {
        img: "img/galaxys24+.webp",
        text: "Galaxy S24 +",
        price: 'PRICE: 1250$',
        type: 'Phones'
    },

    {
        img: "img/image655b1d576f271.webp",
        text: "LG UltraGear 27''",
        price: 'PRICE: 250$',
        type: 'Monitors'
    },
    {
        img: "img/image63dbbbaf8cf2e.webp",
        text: "LG 31.5'' VA",
        price: 'PRICE: 350$',
        type: 'Monitors'
    },
    {
        img: "img/image61cc543c85331.webp",
        text: 'AOC 31.5" VA',
        price: 'PRICE: 280$',
        type: 'Monitors'
    },
    {
        img: "img/image62835bec0a3fb.webp",
        text: 'PHILIPS 27" IPS',
        price: 'PRICE: 200$',
        type: 'Monitors'
    },
    {
        img: "img/image624b050d2ec6e.webp",
        text: 'ZEUS 19"',
        price: 'PRICE: 230$',
        type: 'Monitors'
    },
    {
        img: "img/image6529230c33c19.webp",
        text: 'BENQ 27" IPS',
        price: 'PRICE: 300$',
        type: 'Monitors'
    },
    {
        img: "img/image64cca9b24a43b.webp",
        text: 'BENQ 27" IPS',
        price: 'PRICE: 320$',
        type: 'Monitors'
    },
    {
        img: "img/image65dee7da8e2db.webp",
        text: 'ASUS TUF Gaming',
        price: 'PRICE: 400$',
        type: 'Monitors'
    },

    {
        img: "img/image658008011aff9.webp",
        text: 'Prime Lider Interface',
        price: 'PRICE: 800$',
        type: 'Computers'
    },
    {
        img: "img/image6567372c012b4.webp",
        text: 'Prime Pro Tensor',
        price: 'PRICE: 900$',
        type: 'Computers'
    },
    {
        img: "img/image6578743a6fe50.webp",
        text: 'Prime Pro Spectrum',
        price: 'PRICE: 700$',
        type: 'Computers'
    },
    {
        img: "img/image6571b751dae9e.webp",
        text: 'Prime Pro Athena',
        price: 'PRICE: 950$',
        type: 'Computers'
    },
    {
        img: "img/image655b0c165672e.webp",
        text: 'Prime Pro Atlas',
        price: 'PRICE: 600$',
        type: 'Computers'
    },
    {
        img: "img/image65814faf7958f.webp",
        text: 'Prime Pro Toxic',
        price: 'PRICE: 1100$',
        type: 'Computers'
    },
    {
        img: "img/image65afb362820c9.webp",
        text: 'Prime Pro Lambda',
        price: 'PRICE: 870$',
        type: 'Computers'
    },
    {
        img: "img/image65b250c2200d7.webp",
        text: 'Prime Pro Pure',
        price: 'PRICE: 650$',
        type: 'Computers'
    },

    {
        img: "img/image6502f3704ecf3.webp",
        text: 'LENOVO Gaming 3',
        price: 'PRICE: 700$',
        type: 'Laptops'
    },
    {
        img: "img/image651e87d9b294f.webp",
        text: 'HP 255 G8',
        price: 'PRICE: 500$',
        type: 'Laptops'
    },
    {
        img: "img/image64d096c617c34.webp",
        text: 'LENOVO Legion Pro',
        price: 'PRICE: 950$',
        type: 'Laptops'
    },
    {
        img: "img/image644b962f87656.webp",
        text: 'ACER Nitro 5',
        price: 'PRICE: 700$',
        type: 'Laptops'
    },
    {
        img: "img/image65672165169e4.webp",
        text: 'GIGABYTE AORUS',
        price: 'PRICE: 650$',
        type: 'Laptops'
    },
    {
        img: "img/image6543838402d65.webp",
        text: 'HP Pavilion',
        price: 'PRICE: 800$',
        type: 'Laptops'
    },
    {
        img: "img/image6544e329c01f3.webp",
        text: 'DELL Vostro',
        price: 'PRICE: 700$',
        type: 'Laptops'
    },
    {
        img: "img/image654df58dadd00.webp",
        text: 'HP 14',
        price: 'PRICE: 400$',
        type: 'Laptops'
    }
]

//Dynamic creating product cards
function createProducts(product){
    let htmlCode = `<div class='col-sm-6 col-lg-3 mb-3'>
            <div style="margin:0 5px" class='card h-100'>
              <img src="${product.img}" class="card-img-top w-50 mx-auto mb-5 mt-2" alt="img"/>
              <div class="card-body">
                <h5 class="card-title">${product.text}</h5>
                <p class="card-text">${product.price}</p>
                <button class="btn btn-primary addToCart">BUY NOW</button>
              </div>
            </div>
          </div>`
    return htmlCode;
}

let products = '';

for(let product of productsArr){
    products += createProducts(product);
}

//Email RegExp
$(document).ready(emailRegEx);

function emailRegEx(){
    var email = $('.email'); 
    var emailRegExp = /^[\w\d\.]+@[\w\d\.]+\.[a-zA-Z\d]{2,}$/;
    email.on('blur', function() { var emailValue = $(this).val();
        if (!emailRegExp.test(emailValue)){ 
            $('.emailErrMsg').html(' email is not correct').css({'color':'red'}); 
            $(this).css({"border":"1px solid red"});
            setTimeout(function(){
                $(email).css({"border":"1px solid black"});
                $(email).val('');
                $('.emailErrMsg').html('');
            }, 3000);
        } 
        else{ 
            $('.emailErrMsg').html('');
            $('.sub').on('click', function(){
                $('#joinToday').modal('hide');
                $('#discConfirm').modal('show');
            })
        }
    }); 
}


//Page path name
let pathNameArray = window.location.pathname.split('/')

let pathName = '/'+pathNameArray[pathNameArray.length-1]


if(pathName == '/')
    pathName = '/index.html'

//Code for index.html-----------------------------------------------------------------------------------------------------
if(pathName == '/index.html'){

//Array for categories
const categoriesArr = [
    {
        text: 'Phones',
        img: 'img/phone.webp',
        path: 'products.html#Phones'
    },
    {
        text: 'Laptops',
        img: 'img/laptop.webp',
        path: 'products.html#Laptops'
    },
    {
        text: 'Computers',
        img: 'img/pc.webp',
        path: 'products.html#Computers'
    },
    {
        text: 'Monitors',
        img: 'img/monitor.webp',
        path: 'products.html#Monitors'
    }
]

//Dynamic creating category cards
function createCategories(category){
    let htmlCode = `<div class="col-sm-6 col-md-3">
            <div class="card align-items-center mb-3">
              <img src="${category.img}" alt="${category.img}" class="img-fluid w-40 py-3"/>
              <h5 class="text-center">${category.text}</h5>
              <a href="${category.path}" class="btn btn-sm btn-outline-primary my-2 viewMore" role="button">view more</a>
            </div>
          </div>`
    return htmlCode;
}

let categories = '';

for(let category of categoriesArr){
    categories += createCategories(category);
}

document.querySelector('#categoriesAll').innerHTML += categories;

//Countdown timer for discount
const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('#timer').innerHTML = days + "d: " + hours + "h: "
  + minutes + "m: " + seconds + "s ";
}, 1000);


//Latest products cards
const latestProducts = productsArr.slice(-8);

let ltproducts = '';

for(let ltproduct of latestProducts){
    ltproducts += createProducts(ltproduct);
}

document.querySelector('#latest').innerHTML += ltproducts;



//Join today modal
$(window).on('load',function(){
    $('#joinToday').modal('show');
})

}

//Code for products.html-----------------------------------------------------------------------------------------------------
else if(pathName == '/products.html'){

//Dynamic creating sort list(select)
document.querySelector('#products').innerHTML = products;

var optionArr = new Array('Default', 'Laptops', 'Phones', 'Computers', 'Monitors');

var sort = document.querySelector('#sort');
for(let i = 0; i < optionArr.length; i++){
    var option = document.createElement('option');
    var optContent = document.createTextNode(optionArr[i]);
    option.value = optionArr[i];
    option.appendChild(optContent);
    sort.appendChild(option);
}

var ourProducts = document.querySelector('#ourProducts');

//Device type sorting option
sort.addEventListener('change', productSort);
function productSort(){
    let filteredProducts = ''; 
    for(let product of productsArr){ 
        if(sort.value == 'Laptops' && product.type.includes(sort.value)){
            filteredProducts += createProducts(product); 
            ourProducts.innerHTML = sort.value;
        }
        else if(sort.value == 'Phones' && product.type.includes(sort.value)){
            filteredProducts += createProducts(product);
            ourProducts.innerHTML = sort.value;
        } 
        else if(sort.value == 'Computers' && product.type.includes(sort.value)){
            filteredProducts += createProducts(product);
            ourProducts.innerHTML = sort.value;
        }
        else if(sort.value == 'Monitors' && product.type.includes(sort.value)){
            filteredProducts += createProducts(product);
            ourProducts.innerHTML = sort.value;
        }
        else if(sort.value == 'Default'){
            filteredProducts += createProducts(product);
            ourProducts.innerHTML = 'Our Products';
        }
    } 
    document.querySelector('#products').innerHTML = filteredProducts;
}

}

//Code for contact.html-----------------------------------------------------------------------------------------------------
else if(pathName == '/contact.html'){

//Const variables for form elements
    const firstName = $('#firstName');
    const lastName = $('#lastName');
    const mail = $('#mail');
    const phoneNumber = $('#phoneNumber');
    const country = $('#country');
    const address = $('#adress');
    const chbAgree = $('#chbAgree');
    const submitButton = $('#submitButton');

//RegExp for form elements
    const firstNameReg = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})*$/;
    const lastNameReg = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})*$/;
    const mailReg = /^[\w\d\.]+@[\w\d\.]+\.[a-zA-Z\d]{2,}$/;
    const phoneNumberReg = /^(\+)?[0-9]{7,15}$/;

//Form validation function
    $(submitButton).on('click', function(){
        if(!firstNameReg.test(firstName.val())){
            $('.nameErrMsg').html(' First Name is not valid');
            $('.nameErrMsg').css({"color":"red"});
            $(firstName).css({"border":"1px solid red"});
        }
        else{
            $('.nameErrMsg').html('');
            $(firstName).css({"border":"1px solid black"});
        }

        if(!lastNameReg.test(lastName.val())){
            $('.lnameErrMsg').html(' Last Name is not valid');
            $('.lnameErrMsg').css({"color":"red"});
            $(lastName).css({"border":"1px solid red"});
        }
        else{
            $('.lnameErrMsg').html('');
            $(lastName).css({"border":"1px solid black"});
        }
        if(!mailReg.test(mail.val())){
            $('.mailErrMsg').html(' Email is not valid');
            $('.mailErrMsg').css({"color":"red"});
            $(mail).css({"border":"1px solid red"});
        }
        else{
            $('.mailErrMsg').html('');
            $(mail).css({"border":"1px solid black"});
        }
        if(!phoneNumberReg.test(phoneNumber.val())){
            $('.phoneErrMsg').html(' Phone is not valid');
            $('.phoneErrMsg').css({"color":"red"});
            $(phoneNumber).css({"border":"1px solid red"});
        }
        else{
            $('.phoneErrMsg').html('');
            $(phoneNumber).css({"border":"1px solid black"});
        }
        if(country.val() == ''){
            $('.countryErrMsg').html(' Country/City is not valid');
            $('.countryErrMsg').css({"color":"red"});
            $(country).css({"border":"1px solid red"});
        }
        else{
            $('.countryErrMsg').html('');
            $(country).css({"border":"1px solid black"});
        }
        if(address.val() == ''){
            $('.addressErrMsg').html(' Address is not valid');
            $('.addressErrMsg').css({"color":"red"});
            $(address).css({"border":"1px solid red"});
        }
        else{
            $('.addressErrMsg').html('');
            $(address).css({"border":"1px solid black"});
        }
        if(!chbAgree.is(':checked')){
            $('.chbErrMsg').html(' You must Agree with terms and conditions');
            $('.chbErrMsg').css({"color":"red"});
        }
        else{
            $('.chbErrMsg').html('');
        }
    })

}


