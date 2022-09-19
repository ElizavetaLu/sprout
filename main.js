const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cdn.contentful.com/spaces/0zzdcurntd85/environments/master/entries?access_token=neIGcUuH8EjUwy_1S0W2bEn6x57csac-KdsYsaBy1tY');
xhr.responseType = 'json'


xhr.onload = () => {


    //add img url to every obj and push them into arr
    let allData = []
    xhr.response.items.map(element => {
        allData.push(element)
    })
    xhr.response.includes.Asset.map(element => {
        allData.map(elem => {
            if (elem.fields.image.sys.id === element.sys.id) {
                elem.fields.productPicture = element.fields.file.url
            }
        })
    })





    //getting only data with special content type
    let categoriesArray = []
    let smallCardsMETADATAarray = []

    allData.map(elem => {
        if (elem.sys.contentType.sys.id === 'pipkaStore') {
            categoriesArray.push(elem.fields)
        } else if (elem.sys.contentType.sys.id === 'smallProductCard') {
            smallCardsMETADATAarray.push(elem)
        }
    })


    //create categories menu
    const categoriesHTML = (icon, tittle) => {
        return `
                    <div class="row" id="${tittle}">
                        <div class="icon">
                            <img src="http:${icon}" alt="">
                        </div>
                        <div class="text">${tittle}</div>
                    </div>`
    };
    const categoriesMenu = categoriesArray.map(card => categoriesHTML(card.productPicture, card.tittle, card.tittle)).join('');
    const categoriesPlace = document.getElementById('categoriesPlace');
    categoriesPlace.innerHTML = categoriesMenu;

    //show menu with categories
    const categoriesBtn = document.getElementById('categoriesBtn');
    categoriesBtn.addEventListener('mouseenter', showCategories);
    function showCategories() {
        let categories = document.getElementById('categoriesPlace')
        if (categories.getAttribute('style') === null) {
            categories.style.display = 'flex'
        } else if (categories.getAttribute('style') === 'display: none;') {
            categories.style.display = 'flex'
        } else {
            categories.style.display = 'none'
        };
    }


    //show mobilemenu with categories
    const mobileCategories = document.getElementById('mobileCategories');
    mobileCategories.addEventListener('click', showCategories);

    

    //show products of (ONLY 1 FOR NOW) cliked category
    const driedFruits = document.getElementById('Dried fruits')
    driedFruits.addEventListener('click', openCategory);
    function openCategory() {
        document.querySelector('.driedFruitCategory').style.display = 'block'
        document.querySelector('.homePage').style.display = 'none'
    }

    //get back on home page 
    const logo = document.getElementById('logo')
    logo.addEventListener('click', backToHomePage);
    function backToHomePage() {
        document.querySelector('.driedFruitCategory').style.display = 'none'
        document.querySelector('.homePage').style.display = 'block'
    }








    let discountedGoodsArray = []
    let newAdditionArray = []
    let driedFruitsArray = []
    let peopleAlsoLikeArray = []


    // sort cards according to their tag 
    smallCardsMETADATAarray.map(elem => {
        const specificCardId = elem.metadata.tags[0].sys.id

        if (specificCardId === 'newAddition') {
            newAdditionArray.push(elem.fields)
        } else if (specificCardId === 'driedFruits') {
            driedFruitsArray.push(elem.fields)
        } else if (specificCardId === 'discountedGoods') {
            discountedGoodsArray.push(elem.fields)
        }


        if (elem.metadata.tags.length === 2) {
            if (elem.metadata.tags[1].sys.id === 'peopleAlsoLike') {
                peopleAlsoLikeArray.push(elem.fields)
            }

        }

    })



    const smallCardHTML = (icon, currentRate, productName, price, oldPrice, salePrice, weight) => {

        return `<div class="card" id="${productName}">
                    <div class="header">
                        <div class="pic">
                            <img src="http:${icon}" alt="">
                        </div>
                        <div class="info">
                            <div class="rate">
                                <div class="icon">
                                    <img src="./Images/icons/rateStar.png" alt="">
                                </div>

                                <div class="grate"><span>${currentRate}</span>/5</div>
                            </div>

                            <div class="sale" id="onSale${productName}">ON SALE</div>
                        </div>
                    </div>

                    <div class="name">${productName}</div>

                    <div class="cta">
                        <div class="btn">
                            <div class="add">Add</div>
                            <div class="plus">+</div>
                        </div>

                        <div class="pricesPace">
                            <div class="price" id="priceId${productName}">$ ${price}</div>
                            <div class="oldPrice" id="oldPriceId${productName}">${oldPrice}</div>
                            <div class="newPrice" id="newPriceId${productName}">$ ${salePrice}</div>
                            <div class="weight">/${weight}g</div>
                        </div>
                    </div>
                </div>`
    }

    //getting all cards that aren't on sale
    let notOnSaleCards = []

    createAndSortAllCards('discountedGoodallCards', discountedGoodsArray, 'allCardsPlace')
    createAndSortAllCards('newAdditionallCards', newAdditionArray, 'newAdditions')
    createAndSortAllCards('driedFruitsAllCards', driedFruitsArray, 'driedFruitsCategoryDiv')
    createAndSortAllCards('peopleAlsoLikeCards', peopleAlsoLikeArray, 'peopleAlsoLikeIt')


    function createAndSortAllCards(allCards, arrayWithCardsData, cardsDisplayId) {
        allCards = arrayWithCardsData.map(card => {
            if (!card.onSale) {
                notOnSaleCards.push(card.productName)
            }
            return smallCardHTML(card.productPicture, card.currentRate, card.productName, card.price, card.oldPrice, card.salePrice, card.weight)
        }).join('');
        document.getElementById(cardsDisplayId).insertAdjacentHTML('beforeend', allCards)


        notOnSaleCards.forEach(elem => {
            document.getElementById(`onSale${elem}`).style.display = 'none';
            document.getElementById(`oldPriceId${elem}`).style.display = 'none';
            document.getElementById(`newPriceId${elem}`).style.display = 'none';
            document.getElementById(`priceId${elem}`).style.display = 'flex';

        })
    }






    const apricCard = document.getElementById('Gold apricots Jumbo<br>Limited edition')
    apricCard.addEventListener('click', showFullInfo);
    function showFullInfo() {
        document.querySelector('.driedFruitCategory').style.display = 'none'
        document.querySelector('.productCard').style.display = 'block'
    }








    let productInfo = (allData.find(elem => elem.sys.contentType.sys.id === 'product')).fields


    const productCardHTML = (category, image, currentRate, title, composition, country, brand, price, weight, description) => {
        return `<section class="productInfo">
                <div class="way">Homepage / ${category} /${title}</div>

                <div class="mainContent">
                    <div class="left">
                        <div class="row1">
                            <div class="icon">
                                <img src="./Images/icons/arrow_back.svg" alt="">
                            </div>
                            <div class="text">To ${category}</div>
                        </div>

                        <div class="image">
                            <img src="http:${image}" alt="">
                        </div>

                        <div class="row2">
                            <div class="h4">Customers rewiew</div>
                            <div class="grade">
                                <div class="stars">
                                    <img src="./Images/icons/rateStar.png" alt="">
                                    <img src="./Images/icons/rateStar.png" alt="">
                                    <img src="./Images/icons/rateStar.png" alt="">
                                    <img src="./Images/icons/rateStar.png" alt="">
                                    <img src="./Images/icons/rateStar.png" alt="">
                                </div>
                                <div class="amount"><span>${currentRate}</span>/5</div>
                                <div class="text">(9 reviews)</div>
                            </div>
                        </div>

                        <div class="reviewCards">
                        <div class="bg"></div>
                            <div class="card">
                                <div class="row">
                                    <div class="reviewerName">Alexander</div>
                                    <div class="commas">
                                        <img src="./Images/icons/commas.png" alt="">
                                    </div>
                                </div>
                                <div class="text">This apricots are very deautiful to look at and quite appetizing.</div>
                                <div class="dataAndRate">
                                    <div class="data">February 10, 2021</div>
                                    <div class="rate">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/lightStar.png" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="row">
                                    <div class="reviewerName">Christine</div>
                                    <div class="commas">
                                        <img src="./Images/icons/commas.png" alt="">
                                    </div>
                                </div>
                                <div class="text">I eat it instead of candy, add it to yogurt and porridge!<br>Very healthy
                                    and tasty</div>
                                <div class="dataAndRate">
                                    <div class="data">January 25, 2021</div>
                                    <div class="rate">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="row">
                                    <div class="reviewerName">Andrew</div>
                                    <div class="commas">
                                        <img src="./Images/icons/commas.png" alt="">
                                    </div>
                                </div>
                                <div class="text">Thanks to the store for the fast delivery!</div>
                                <div class="dataAndRate">
                                    <div class="data">January 20, 2021</div>
                                    <div class="rate">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                        <img src="./Images/icons/greyStar.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="btn">
                            <div class="icon">
                                <img src="./Images/icons/loading.png" alt="">
                            </div>
                            <div class="text">Show all</div>
                        </div>
                    </div>



                    <div class="right">
                        <div class="h2">${title}</div>

                        <div class="delivInfo">
                            <div class="inStock">
                                <div class="text">In stock</div>
                                <div class="icon">
                                    <img src="./Images/icons/inStoke.png" alt="">
                                </div>
                            </div>
                            <div class="text">Delivery 1-3 business days</div>
                        </div>

                        <div class="info">
                            <div class="column">
                                <div class="name">Composition:</div>
                                <div class="name">Country:</div>
                                <div class="name">Brand:</div>
                            </div>
                            <div class="column">
                                <div class="text">${composition}</div>
                                <div class="text">${country}</div>
                                <div class="text">${brand}</div>
                            </div>

                        </div>

                        <div class="purchase">
                            <div class="price">
                                <div class="tottal">Tottal: $<span id="tottalPrice">10.80</span></div>
                                <div class="priceFor">$ <span id="productPriceForX">${price}</span> / <span id="weight">${weight}</span>g</div>
                            </div>

                            <div class="choose">
                                <div class="sumb" id="minus">–</div>
                                <div class="amount"><span id="number">1</span> kg</div>
                                <div class="sumb" id="plus">+</div>
                            </div>

                            <div class="addBtn">
                                <div class="text">Add to cart</div>
                                <div class="icon">
                                    <img src="./Images/icons/whitePlus.png" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="h3">Description:</div>

                        <div class="description">${description}</div>

                        <div class="vitamins">
                            <div class="square">B1</div>
                            <div class="rhombus">B2</div>
                            <div class="circle">C</div>
                            <div class="triangle">A</div>
                            <div class="triangleReverse">E</div>
                        </div>

                        <div class="otherInfo">
                            <div class="row">
                                <div class="text">Nutritional value:</div>
                                <div class="icon">
                                    <img src="./Images/icons/smArrdown.svg" alt="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="text">Vitamins</div>
                                <div class="icon">
                                    <img src="./Images/icons/smArrdown.svg" alt="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="text">Minerals</div>
                                <div class="icon">
                                    <img src="./Images/icons/smArrdown.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
    }


    const productCardPlace = document.querySelector('.productCard')
    productCardPlace.insertAdjacentHTML('afterbegin', productCardHTML('Dried fruits', productInfo.productPicture, productInfo.currentRate, productInfo.tittle, productInfo.compostition, productInfo.country, productInfo.brand, productInfo.price, productInfo.weight, productInfo.description.content[0].content[0].value)
    )



    //count tottal price of product
    const tottalPricePlace = document.getElementById('tottalPrice')
    let tottalPrice = Number(document.getElementById('tottalPrice').innerHTML)

    const price = Number(document.getElementById('productPriceForX').innerHTML)
    
    let selectedWeightPlace = document.getElementById('number')
    let selectedWeight = Number(document.getElementById('number').innerHTML)


    const minus = document.getElementById('minus')
    minus.addEventListener('click', decrement)
    function decrement() {
        if (selectedWeight) {
            tottalPrice -= price
            selectedWeight -=0.5
        selectedWeightPlace.textContent = selectedWeight.toFixed(1)
            tottalPricePlace.textContent = tottalPrice.toFixed(2)
        } else return

    }

    const plus = document.getElementById('plus')
    plus.addEventListener('click', increment)
    function increment() {
        tottalPrice += price
        selectedWeight +=0.5
        selectedWeightPlace.textContent = selectedWeight.toFixed(1)
        tottalPricePlace.textContent = tottalPrice.toFixed(2)
    }

}

xhr.send()




