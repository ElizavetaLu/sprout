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
    let fullProductsInfoArray = []

    allData.map(elem => {
        if (elem.sys.contentType.sys.id === 'pipkaStore') {
            categoriesArray.push(elem.fields)
        } else if (elem.sys.contentType.sys.id === 'smallProductCard') {
            fullProductsInfoArray.push(elem)
        }
    })


    //create categories menu
    const categoriesHTML = (icon, tittle) => {
        return `
                    <div class="row" id="popUpcategor${tittle}">
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
    categoriesBtn.addEventListener('click', showCategories);

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





    //Open clicked category
    document.querySelectorAll('div[id^=popUpcategor]').forEach(elem => elem.addEventListener('click', openCategory))
    function openCategory() {
        const category = this.getAttribute('id');
        const nameOfChosenCategory = category.slice(12).toLowerCase();

        function addEventListenerOnCardAndButton() {
            const allButtons = document.querySelectorAll('#addingButton')
            document.querySelectorAll('div[id^=smallCard]').forEach(card => card.onclick = showFullInfo)
            allButtons.forEach(elem => elem.addEventListener('click', addProduct))
        }

        if (nameOfChosenCategory === 'nuts') {
            createAndSortAllCards('nutsAllCards', nutsArray, 'placeForSelectedCategory')
            addEventListenerOnCardAndButton()

        } else if (nameOfChosenCategory === 'fruits') {
            createAndSortAllCards('fruitsAllCards', fruitsArray, 'placeForSelectedCategory')
            addEventListenerOnCardAndButton()

        } else if (nameOfChosenCategory === 'dried fruits') {
            createAndSortAllCards('driedFruitsAllCards', driedFruitsArray, 'placeForSelectedCategory')
            addEventListenerOnCardAndButton()

        } else if (nameOfChosenCategory === 'legumes') {
            createAndSortAllCards('legumesAllCards', legumesArray, 'placeForSelectedCategory')
            addEventListenerOnCardAndButton()


        } else if (nameOfChosenCategory === 'berries') {
            createAndSortAllCards('berriesAllCards', discountedGoodsArray, 'placeForSelectedCategory')
            addEventListenerOnCardAndButton()
        }

        document.querySelector('.driedFruitCategory').style.display = 'block'
        document.querySelector('.productCard').style.display = 'none'
        document.querySelector('.homePage').style.display = 'none'
    }










    //show mobilemenu with categories
    const mobileCategories = document.getElementById('mobileCategories');
    mobileCategories.addEventListener('click', showCategories);


    //get back on home page 
    const logo = document.getElementById('logo')
    logo.addEventListener('click', backToHomePage);
    function backToHomePage() {
        document.querySelector('.driedFruitCategory').style.display = 'none'
        document.querySelector('.productCard').style.display = 'none'
        document.querySelector('.homePage').style.display = 'block'
    }

    // sort cards according to their tag 
    let discountedGoodsArray = [];
    let newAdditionArray = [];
    let driedFruitsArray = [];
    let peopleAlsoLikeArray = [];
    let nutsArray = [];
    let fruitsArray = [];
    let berriesArray = [];
    let legumesArray = [];

    fullProductsInfoArray.map(element => {
        const cardsTags = element.metadata.tags
        cardsTags.map(elem => {
            if (elem.sys.id === 'newAddition') {
                newAdditionArray.push(element.fields)
            } else if (elem.sys.id === 'driedFruits') {
                driedFruitsArray.push(element.fields)
            } else if (elem.sys.id === 'discountedGoods') {
                discountedGoodsArray.push(element.fields)
            } else if (elem.sys.id === 'fruits') {
                fruitsArray.push(element.fields)
            } else if (elem.sys.id === 'nuts') {
                nutsArray.push(element.fields)
            } else if (elem.sys.id === 'peopleAlsoLike') {
                peopleAlsoLikeArray.push(element.fields)
            } else if (elem.sys.id === 'berries') {
                berriesArray.push(element.fields)
            } else if (elem.sys.id === 'legumes') {
                legumesArray.push(element.fields)
            }

        })

    })



    const smallCardHTML = (card) => {
        const {
            productName,
            productPicture,
            currentRate,
            oldPrice,
            salePrice,
            price,
            weight,
            onSale
        } = card

        let first = `<div class="card" id="smallCard${productName}">
                    <div class="header">
                        <div class="pic">
                            <img src="http:${productPicture}" alt="">
                        </div>
                        <div class="info">
                            <div class="rate">
                                <div class="icon">
                                    <img src="./Images/icons/rateStar.png" alt="">
                                </div>
                                <div class="grate"><span>${currentRate}</span>/5</div>
                            </div>`

        if (onSale) {
            first += `<div class="sale" id="onSale${productName}">ON SALE</div>
                        </div>
                    </div>
                            <div class="name">${productName}</div>
                            <div class="cta">
                            <button class="btn" id="addingButton">
                                <div class="add">Add</div>
                                <div class="plus">+</div>
                            </button>
                            <div class="pricesPace">
                                <div class="oldPrice" id="oldPriceId${productName}">${oldPrice}</div>
                                <div class="newPrice" id="newPriceId${productName}">$ ${salePrice}</div>
                            `

        } else {
            first += `</div>
                </div>
                    <div class="name">${productName}</div>
                    <div class="cta">
                    <button class="btn" id="addingButton">
                        <div class="add">Add</div>
                        <div class="plus">+</div>
                    </button>
                <div class="pricesPace">
                    <div class="price" id="priceId${productName}">$ ${'' + price}</div>
                `
        }
        let second = `               <div class="weight">/${weight}g</div>
                                </div>
                            </div>
                        </div>`

        return first + second
    }


    createAndSortAllCards('driedFruitsAllCards', discountedGoodsArray, 'allCardsPlace')
    createAndSortAllCards('newAdditionAllCards', newAdditionArray, 'newAdditions')
    // createAndSortAllCards('peopleAlsoLikeAllCards', peopleAlsoLikeArray, 'peopleAlsoLikeIt')


    function createAndSortAllCards(allCards, arrayWithCardsData, cardsDisplayId) {
        //create and inner cards on their places
        allCards = arrayWithCardsData.map(card => smallCardHTML(card)).join('');
        document.getElementById(cardsDisplayId).innerHTML = allCards
    }



    const productInCartHTML = (card) => {
        const {
            productPicture,
            productName,
            price
        } = card
        return `<div class="card">
                    <div class="pic">
                        <img src="http:${productPicture}" alt="">
                    </div>
                    
                        <div class="productInfo">
                            <div class="name">${productName}</div>
                            <div class="weight">
                                <div class="sumb" id="minusInCart">-</div>
                                <div class="amount"><span id="chosenAmountInCart">0.5</span> kg</div>
                                <div class="sumb plus"id="plusInCart">+</div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="icon" id="delete">
                                <img src="./Images/icons/cross.png" alt="">
                            </div>
                            <div class="tottal">$ <span id="tottalInCart">${price}</span></div>
                        </div>
          
                </div>`
    }
    const placeForSelectedProducts = document.getElementById('placeForSelectedProducts');



    let selectedProductsId = []
    let selectedProductsData = []

    //add event listener on adding product buttons
    const allButtons = document.querySelectorAll('#addingButton')

    let placeForCurrentAmount = document.getElementById('amoutOfproductsInCart')
    let currentAmount = Number(document.getElementById('amoutOfproductsInCart').innerText)


    allButtons.forEach(elem => elem.addEventListener('click', addProduct))
    function addProduct(e) {
        currentAmount += 1
        placeForCurrentAmount.innerText = currentAmount

        e.stopPropagation()

        const clickedProductId = (this.parentNode.parentNode.getAttribute('id'))

        selectedProductsId.push(clickedProductId)

        fullProductsInfoArray.map(elem => {

            if (elem.fields.productName === clickedProductId.slice(9)) {
                placeForSelectedProducts.insertAdjacentHTML('afterbegin', productInCartHTML(elem.card))
            }
        })

    }




    //show cart content 
    const cart = document.getElementById('cart');
    const cartInfo = document.getElementById('selectedProducts');

    cart.addEventListener('click', showCart);
    function showCart() {
        if (cartInfo.getAttribute('style') === null) {
            cartInfo.style.display = 'flex'
        } else if (cartInfo.getAttribute('style') === 'display: none;') {
            cartInfo.style.display = 'flex'
        } else {
            cartInfo.style.display = 'none'
        };
    }







    document.querySelectorAll('div[id^=smallCard]').forEach(card => card.onclick = showFullInfo)
    function showFullInfo() {
        const cardId = this.getAttribute('id')
        fullProductsInfoArray.map(elem => {
            if (cardId.slice(9) === elem.fields.productName) {
                document.querySelector('.homePage').style.display = 'none'
                document.querySelector('.productCard').style.display = 'block'

                const productCardPlace = document.querySelector('.productCard')
                productCardPlace.innerHTML = productCardHTML('Dried fruits', elem.fields.productPicture, elem.fields.currentRate, elem.fields.productName, elem.fields.composition, elem.fields.country, elem.fields.brand, elem.fields.price, elem.fields.weight, elem.fields.description)
            }

        })

    }


    const productCardHTML = (product) => {
        const {
            category,
            productPicture,
            currentRate,
            productName,
            composition,
            country,
            brand,
            price,
            weight,
            description
        } = product
        return `<section class="productInfo">
                <div class="way">Homepage / ${category} /${productName}</div>

                <div class="mainContent">
                    <div class="left">
                        <div class="row1">
                            <div class="icon">
                                <img src="./Images/icons/arrow_back.svg" alt="">
                            </div>
                            <div class="text">To ${category}</div>
                        </div>

                        <div class="image">
                            <img src="http:${productPicture}" alt="">
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
                        <div class="h2">${productName}</div>

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
                                <div class="tottal">Tottal: $<span id="tottalPrice">${price * 2}</span></div>
                                <div class="priceFor">$ <span id="productPriceForX">${price}</span> / <span id="weight">${weight}</span>g</div>
                            </div>

                            <div class="choose">
                                <div class="sumb" id="minus">–</div>
                                <div class="amount"><span id="number">1</span> kg</div>
                                <div class="sumb" id="plus">+</div>
                            </div>

                            <div class="addBtn" id="addToCartButton">
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



    function addProduct(e) {

        currentAmount += 1
        placeForCurrentAmount.innerText = currentAmount
        e.stopPropagation()
        const clickedProductId = (this.parentNode.parentNode.getAttribute('id'))


        fullProductsInfoArray.map(elem => {



            if (elem.fields.productName === clickedProductId.slice(9)) {
                selectedProductsId.map(element => {
                    if (element === clickedProductId) {
                        console.log('already added')
                    }
                })
                selectedProductsId.push(clickedProductId)
                selectedProductsData.push(elem.fields)

                console.log(Number(document.getElementById('subtotal').innerHTML))
                let subtotalPlace = document.getElementById('subtotal')
                let subtotal = Number(document.getElementById('subtotal').innerHTML)

                subtotal +=elem.fields.price
                subtotalPlace.textContent = subtotal.toFixed(2)


                let card = elem.fields
                placeForSelectedProducts.insertAdjacentHTML('afterbegin', productInCartHTML(card))


                // count tottal price of product
                const tottalPricePlace = document.getElementById('tottalInCart')
                let tottalPrice = Number(document.getElementById('tottalInCart').innerText)

                const price = elem.fields.salePrice
                let selectedWeightPlace = document.getElementById('chosenAmountInCart')
                let selectedWeight = Number(document.getElementById('chosenAmountInCart').innerText)


                const minus = document.getElementById('minusInCart')
                minus.addEventListener('click', decrement)
                function decrement() {
                    if (selectedWeight) {
                        tottalPrice -= price
                        selectedWeight -= 0.5
                        selectedWeightPlace.textContent = selectedWeight.toFixed(1)
                        tottalPricePlace.textContent = tottalPrice.toFixed(2)
                    } else return

                }

                const plus = document.getElementById('plusInCart')
                plus.addEventListener('click', increment)
                function increment() {
                    tottalPrice += price
                    selectedWeight += 0.5
                    selectedWeightPlace.textContent = selectedWeight.toFixed(1)
                    tottalPricePlace.textContent = tottalPrice.toFixed(2)
                }



                const delBut = document.getElementById('delete')
                delBut.addEventListener('click', deleteCard)
                function deleteCard() {
                    this.parentNode.parentNode.remove()
                    currentAmount -= 1
                    placeForCurrentAmount.innerText = currentAmount
                }


            }
        })

    }

    function showFullInfo() {
        const cardId = this.getAttribute('id')

        fullProductsInfoArray.map(elem => {
            if (cardId.slice(9) === elem.fields.productName) {
                document.querySelector('.homePage').style.display = 'none'
                document.querySelector('.driedFruitCategory').style.display = 'none'
                document.querySelector('.productCard').style.display = 'block'
                let product = elem.fields
                const productCardPlace = document.querySelector('.productCard')
                productCardPlace.innerHTML = productCardHTML(product)
            }

        })

        //add to cart
        const addProductButton = document.getElementById('addToCartButton')
        addProductButton.addEventListener('click', addCurrentProduct)
        function addCurrentProduct() {
            console.log('click')
        }


        // count tottal price of 1 product
        const tottalPricePlace = document.getElementById('tottalPrice')
        let tottalPrice = Number(document.getElementById('tottalPrice').innerText)

        const price = Number(document.getElementById('productPriceForX').innerText)

        let selectedWeightPlace = document.getElementById('number')
        let selectedWeight = Number(document.getElementById('number').innerText)


        const minus = document.getElementById('minus')
        minus.addEventListener('click', decrement)
        function decrement() {
            if (selectedWeight) {
                tottalPrice -= price
                selectedWeight -= 0.5
                selectedWeightPlace.textContent = selectedWeight.toFixed(1)
                tottalPricePlace.textContent = tottalPrice.toFixed(2)
            } else return

        }

        const plus = document.getElementById('plus')
        plus.addEventListener('click', increment)
        function increment() {
            tottalPrice += price
            selectedWeight += 0.5
            selectedWeightPlace.textContent = selectedWeight.toFixed(1)
            tottalPricePlace.textContent = tottalPrice.toFixed(2)
        }



    }
}
xhr.send()