const test = new XMLHttpRequest();
test.open('GET', 'https://cdn.contentful.com/spaces/0zzdcurntd85/environments/master/entries/IDNEEDED?access_token=uxmGaM1JsB5TlwPlBJiUQpW5Gt2qLhV0DwAjiLlW-7A');
test.responseType = 'json'


test.onload = () => {
// console.lo
    let cardsInfo = test.response.items;
    let cardsPic = test.response.includes.Asset;

    console.log(test.response)



    let firstCardpic
    let secondCardpic
    let thirdCardpic
    let fourthCardpic
    let fifthCardpic


    let newAddfirstCardpic
    let newAddsecondCardpic
    let newAddthirdCardpic
    let newAddfourthCardpic


    let categoriesRow1pic
    let categoriesRow2pic
    let categoriesRow3pic
    let categoriesRow4pic
    let categoriesRow5pic
    let categoriesRow6pic



    let driedFruitCategory1Pic
    let driedFruitCategory2Pic
    let driedFruitCategory3Pic
    let driedFruitCategory4Pic
    let driedFruitCategory5Pic
    let driedFruitCategory6Pic
    let driedFruitCategory7Pic
    let driedFruitCategory8Pic
    let driedFruitCategory9Pic
    let driedFruitCategory10Pic
    let driedFruitCategory11Pic
    let driedFruitCategory12Pic





    let productPic

    cardsPic.map(card => {
        let cardFullInfo = Object.entries(card).flat(1)[3];
        let entrieId = Object.entries(cardFullInfo)[1][1];

        //get discountet goods pics
        switch (entrieId) {
            case '4Rxh5oBURbI0HxcapqnzPh':
                firstCardpic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '2Qn7gsnsqywXuJZl4KPaAS':
                secondCardpic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '4Uik7EzswR9piuCYRo8Ha8':
                thirdCardpic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '57o3n8LRwHSQvHTyqxYFkh':
                fourthCardpic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '4yfJqLE5t5p2h9giApGmYK':
                fifthCardpic = Object.entries(card).flat(1)[5].file.url;
                break;


            case '46hHZzOdyQNpiPzJGfhY4Q':
                newAddfirstCardpic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '1LY9hRoANdJpoUy7ppEh5w':
                newAddsecondCardpic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '1JrCMVTaLCQzv3eTb5kWC1':
                newAddthirdCardpic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '4eEBdcdhQXzpTeOcHcYb9o':
                newAddfourthCardpic = Object.entries(card).flat(1)[5].file.url;
                break;


            case '65A98k2h05aG1DKHIwDSj5':
                categoriesRow1pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '5PGQWDanrkzyKBow6beBbo':
                categoriesRow2pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '171D1PEriJ1sB9Qi5GS3V0':
                categoriesRow3pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '5N0WrPRmgZIxLzbA1dTYZY':
                categoriesRow4pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '49AlGImLYoDhYolLLzFS9c':
                categoriesRow5pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '1zRTDzIVL8jjda2BPsX3yS':
                categoriesRow6pic = Object.entries(card).flat(1)[5].file.url;
                break;




            case '58m5tJed1VJP41mirmRdWm':
                driedFruitCategory1Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '7jJYk98J065sLu884lOBBx':
                driedFruitCategory2Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '3PSr5WpTRDREjLivqh21lL':
                driedFruitCategory3Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '1JApfWl0AJS9ukOVaUjzwo':
                driedFruitCategory4Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '37CsNAROqfL8wOStTqhm3z':
                driedFruitCategory5Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '1sOTXVj4jSDqN06zCK1JRB':
                driedFruitCategory6Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '5v5jnPApgF2aWvE3nZZBoo':
                driedFruitCategory7Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '3CXc3JcUo2T9k1iZvNiISs':
                driedFruitCategory8Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '7sPuSaYvohL5OvPSKYwjVg':
                driedFruitCategory9Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '7uidiVqxPXu5c2SF1tMT4t':
                driedFruitCategory10Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '1sNTHeBJns28fNd51A2On2':
                driedFruitCategory11Pic = Object.entries(card).flat(1)[5].file.url;
                break;
            case '498Ru2BUp3Dx23FSO0MaAf':
                driedFruitCategory12Pic = Object.entries(card).flat(1)[5].file.url;
                break;




            case '0STbpKbyJHG4nA1qSHe42':
                productPic = Object.entries(card).flat(1)[5].file.url;
                break;
        }
    })

    let firstCard
    let secondCard
    let thirdCard
    let fourthCard
    let fifthCard


    let newAddfirstCard
    let newAddsecondCard
    let newAddthirdCard
    let newAddfourthCard

    let categoriesRow1
    let categoriesRow2
    let categoriesRow3
    let categoriesRow4
    let categoriesRow5
    let categoriesRow6


    let driedFruitCategory1
    let driedFruitCategory2
    let driedFruitCategory3
    let driedFruitCategory4
    let driedFruitCategory5
    let driedFruitCategory6
    let driedFruitCategory7
    let driedFruitCategory8
    let driedFruitCategory9
    let driedFruitCategory10
    let driedFruitCategory11
    let driedFruitCategory12



    let product
    cardsInfo.map(card => {
        //id of all entries
        let cardFullInfo = Object.entries(card).flat(1)[3];
        let entrieId = Object.entries(cardFullInfo)[1][1];
        console.log(Object.entries(card).flat(1)[5]);
        // let entrieId = Object.entries(card).flat(1)[3].id;

        //get discountet goods data
        switch (entrieId) {
            case '3W1mo4INgacA6wjZbQO8DR':
                firstCard = Object.entries(card).flat(1)[5];
                break;
            case '3G1yiAbTmzTvNaLuyk3NyH':
                secondCard = Object.entries(card).flat(1)[5];
                break;
            case '5GY5wQHvsqqObcNhKrep7h':
                thirdCard = Object.entries(card).flat(1)[5];
                break;
            case '6bc7NiKfRhSxBHsipFETn0':
                fourthCard = Object.entries(card).flat(1)[5];
                break;
            case '3auRJhF0w8V23DYX82Be9C':
                fifthCard = Object.entries(card).flat(1)[5];
                break;


            case 'jMdIfaQPDSvUFCqbsxNiV':
                newAddfirstCard = Object.entries(card).flat(1)[5];
                break;
            case '2DQSV4rjB6wWb1x0s6hPCm':
                newAddsecondCard = Object.entries(card).flat(1)[5];
                break;
            case '6sovyByVQTCsEmQMcLzUvd':
                newAddthirdCard = Object.entries(card).flat(1)[5];
                break;
            case '2NgFeRUz3lwsJanW1Cyz04':
                newAddfourthCard = Object.entries(card).flat(1)[5];
                break;


            case '1gJCq044CpmFVRIQ77awyP':
                categoriesRow1 = Object.entries(card).flat(1)[5];
                break;
            case '1WT7qVPyUAioaMOXbjOABm':
                categoriesRow2 = Object.entries(card).flat(1)[5];
                break;
            case '2cxRmnYIlthzObngp8MTIU':
                categoriesRow3 = Object.entries(card).flat(1)[5];
                break;
            case '1mFoJ6a72cWDDuG3IEMVpp':
                categoriesRow4 = Object.entries(card).flat(1)[5];
                break;
            case '2Wnf99NYmLaPLk3XTSrDcd':
                categoriesRow5 = Object.entries(card).flat(1)[5];
                break;
            case '1jHeMYIxVgS2GBcatJl3qo':
                categoriesRow6 = Object.entries(card).flat(1)[5];
                break;




            case '3TXNefOaoYktmAu8y3p7PL':
                driedFruitCategory1 = Object.entries(card).flat(1)[5];
                break;
            case '1NBJaS0k0U4HdF8kVfp4az':
                driedFruitCategory2 = Object.entries(card).flat(1)[5];
                break;
            case '7LKGTOILCNotIgQJUonuFC':
                driedFruitCategory3 = Object.entries(card).flat(1)[5];
                break;
            case '6sjjgtHX6JGoaAm2TdfDIC':
                driedFruitCategory4 = Object.entries(card).flat(1)[5];
                break;
            case '4aubhcfKHdlDpo4h8Vx6wm':
                driedFruitCategory5 = Object.entries(card).flat(1)[5];
                break;
            case '45E70FqGHPRkux7k37EUmO':
                driedFruitCategory6 = Object.entries(card).flat(1)[5];
                break;
            case '72TmgMOvIXRP8DKzBxwwn8':
                driedFruitCategory7 = Object.entries(card).flat(1)[5];
                break;
            case '5gqz3avSDYGYwtVpoiH0nQ':
                driedFruitCategory8 = Object.entries(card).flat(1)[5];
                break;
            case '596RHk1o52aZxxU39Pqj18':
                driedFruitCategory9 = Object.entries(card).flat(1)[5];
                break;
            case '4GM4cXQF1jWj3Lo0qU9z06':
                driedFruitCategory10 = Object.entries(card).flat(1)[5];
                break;
            case '5VKZqFfldgJW7G5qDnL1ae':
                driedFruitCategory11 = Object.entries(card).flat(1)[5];
                break;
            case '3jv7mHz0OslKfgWWwQGkTo':
                driedFruitCategory12 = Object.entries(card).flat(1)[5];
                break;




            case '5mvkZ6KDEbJUEC3o1SJgJV':
                product = Object.entries(card).flat(1)[5];
                break;
        }
    })




    //'https:' + asset.fields.file.url

    //discount goods start
    const smallCardsInfo = [
        {
            image: `https:${firstCardpic}`,
            currentRate: `${firstCard.currentRate}`,
            onSale: true,
            productName: `${firstCard.productName}`,
            oldPrice: `${firstCard.oldPrice}`,
            newPrice: `${firstCard.salePrice}`,
            weight: `${firstCard.weight}`,
        },
        {
            image: `https:${secondCardpic}`,
            currentRate: `${secondCard.currentRate}`,
            onSale: true,
            productName: `${secondCard.productName}`,
            oldPrice: `${secondCard.oldPrice}`,
            newPrice: `${secondCard.salePrice}`,
            weight: `${secondCard.oldPrice}`,
        },
        {
            image: `https:${thirdCardpic}`,
            currentRate: `${thirdCard.currentRate}`,
            onSale: true,
            productName: `${thirdCard.productName}`,
            oldPrice: `${thirdCard.oldPrice}`,
            newPrice: `${thirdCard.salePrice}`,
            weight: `${thirdCard.oldPrice}`,
        },
        {
            image: `https:${fourthCardpic}`,
            currentRate: `${fourthCard.currentRate}`,
            onSale: true,
            productName: `${fourthCard.productName}`,
            oldPrice: `${fourthCard.oldPrice}`,
            newPrice: `${fourthCard.salePrice}`,
            weight: `${fourthCard.oldPrice}`,
        },
        {
            image: `https:${fifthCardpic}`,
            currentRate: `${fifthCard.currentRate}`,
            onSale: true,
            productName: `${fifthCard.productName}`,
            oldPrice: `${fifthCard.oldPrice}`,
            newPrice: `${fifthCard.salePrice}`,
            weight: `${fifthCard.oldPrice}`,
        }
    ]
    //discount goods end


    //new addition start
    const newAdditionSmallCardsInfo = [
        {
            image: `https:${newAddfirstCardpic}`,
            currentRate: `${newAddfirstCard.currentRate}`,
            onSale: false,
            productName: `${newAddfirstCard.productName}`,
            price: `${newAddfirstCard.price}`,
            weight: `${newAddfirstCard.weight}`,
        },
        {
            image: `https:${newAddsecondCardpic}`,
            currentRate: `${newAddsecondCard.currentRate}`,
            onSale: false,
            productName: `${newAddsecondCard.productName}`,
            price: `${newAddsecondCard.price}`,
            weight: `${newAddsecondCard.weight}`,
        },
        {
            image: `https:${newAddthirdCardpic}`,
            currentRate: `${newAddthirdCard.currentRate}`,
            onSale: false,
            productName: `${newAddthirdCard.productName}`,
            price: `${newAddthirdCard.price}`,
            weight: `${newAddthirdCard.weight}`,
        },
        {
            image: `https:${newAddfourthCardpic}`,
            currentRate: `${newAddfourthCard.currentRate}`,
            onSale: false,
            productName: `${newAddfourthCard.productName}`,
            price: `${newAddfourthCard.price}`,
            weight: `${newAddfourthCard.weight}`,
        },
        {
            image: `https:${newAddfirstCardpic}`,
            currentRate: `${newAddfirstCard.currentRate}`,
            onSale: false,
            productName: `${newAddfirstCard.productName}`,
            price: `${newAddfirstCard.price}`,
            weight: `${newAddfirstCard.weight}`,
        }
    ]
    //new addition end

    const categoriesInfo = [
        {
            image: `https:${categoriesRow1pic}`,
            text: `${categoriesRow1.tittle}`,
            id: '0',
        },
        {
            image: `https:${categoriesRow2pic}`,
            text: `${categoriesRow2.tittle}`,
            id: '1',
        },
        {
            image: `https:${categoriesRow3pic}`,
            text: `${categoriesRow3.tittle}`,
            id: '2',
        },
        {
            image: `https:${categoriesRow4pic}`,
            text: `${categoriesRow4.tittle}`,
            id: '3',
        },
        {
            image: `https:${categoriesRow5pic}`,
            text: `${categoriesRow5.tittle}`,
            id: '4',
        },
        {
            image: `https:${categoriesRow6pic}`,
            text: `${categoriesRow6.tittle}`,
            id: '5',
        },
    ]

    const driedFruits = [
        {
            image: `https:${driedFruitCategory1Pic}`,
            currentRate: `${driedFruitCategory1.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory1.productName}`,
            oldPrice: `${driedFruitCategory1.oldPrice}`,
            price: `${driedFruitCategory1.price}`,
            newPrice: `${driedFruitCategory1.salePrice}`,
            weight: `${driedFruitCategory1.weight}`,
            id: '00',

        },
        {
            image: `https:${driedFruitCategory2Pic}`,
            currentRate: `${driedFruitCategory2.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory2.productName}`,
            oldPrice: `${driedFruitCategory2.oldPrice}`,
            price: `${driedFruitCategory2.price}`,
            newPrice: `${driedFruitCategory2.salePrice}`,
            weight: `${driedFruitCategory2.weight}`,
            id: '01',
        },
        {
            image: `https:${driedFruitCategory3Pic}`,
            currentRate: `${driedFruitCategory3.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory3.productName}`,
            oldPrice: `${driedFruitCategory3.oldPrice}`,
            price: `${driedFruitCategory3.price}`,
            newPrice: `${driedFruitCategory3.salePrice}`,
            weight: `${driedFruitCategory3.weight}`,
            id: '02',
        },
        {
            image: `https:${driedFruitCategory4Pic}`,
            currentRate: `${driedFruitCategory4.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory4.productName}`,
            oldPrice: `${driedFruitCategory4.oldPrice}`,
            price: `${driedFruitCategory4.price}`,
            newPrice: `${driedFruitCategory4.salePrice}`,
            weight: `${driedFruitCategory4.weight}`,
            id: '03',
        },
        {
            image: `https:${driedFruitCategory5Pic}`,
            currentRate: `${driedFruitCategory5.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory5.productName}`,
            oldPrice: `${driedFruitCategory5.oldPrice}`,
            price: `${driedFruitCategory5.price}`,
            newPrice: `${driedFruitCategory5.salePrice}`,
            weight: `${driedFruitCategory5.weight}`,
            id: '04',
        },
        {
            image: `https:${driedFruitCategory6Pic}`,
            currentRate: `${driedFruitCategory6.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory6.productName}`,
            oldPrice: `${driedFruitCategory6.oldPrice}`,
            price: `${driedFruitCategory6.price}`,
            newPrice: `${driedFruitCategory6.salePrice}`,
            weight: `${driedFruitCategory6.weight}`,
            id: '05',
        },
        {
            image: `https:${driedFruitCategory7Pic}`,
            currentRate: `${driedFruitCategory7.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory7.productName}`,
            oldPrice: `${driedFruitCategory7.oldPrice}`,
            price: `${driedFruitCategory7.price}`,
            newPrice: `${driedFruitCategory7.salePrice}`,
            weight: `${driedFruitCategory7.weight}`,
            id: '06',
        },
        {
            image: `https:${driedFruitCategory8Pic}`,
            currentRate: `${driedFruitCategory8.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory8.productName}`,
            oldPrice: `${driedFruitCategory8.oldPrice}`,
            price: `${driedFruitCategory8.price}`,
            newPrice: `${driedFruitCategory8.salePrice}`,
            weight: `${driedFruitCategory8.weight}`,
            id: '07',
        },
        {
            image: `https:${driedFruitCategory9Pic}`,
            currentRate: `${driedFruitCategory9.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory9.productName}`,
            oldPrice: `${driedFruitCategory9.oldPrice}`,
            price: `${driedFruitCategory9.price}`,
            newPrice: `${driedFruitCategory9.salePrice}`,
            weight: `${driedFruitCategory9.weight}`,
            id: '08',
        },
        {
            image: `https:${driedFruitCategory10Pic}`,
            currentRate: `${driedFruitCategory10.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory10.productName}`,
            oldPrice: `${driedFruitCategory10.oldPrice}`,
            price: `${driedFruitCategory10.price}`,
            newPrice: `${driedFruitCategory10.salePrice}`,
            weight: `${driedFruitCategory10.weight}`,
            id: '09',
        },
        {
            image: `https:${driedFruitCategory11Pic}`,
            currentRate: `${driedFruitCategory11.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory11.productName}`,
            oldPrice: `${driedFruitCategory11.oldPrice}`,
            price: `${driedFruitCategory11.price}`,
            newPrice: `${driedFruitCategory11.salePrice}`,
            weight: `${driedFruitCategory11.weight}`,
            id: '10',
        },
        {
            image: `https:${driedFruitCategory12Pic}`,
            currentRate: `${driedFruitCategory12.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory12.productName}`,
            oldPrice: `${driedFruitCategory12.oldPrice}`,
            price: `${driedFruitCategory12.price}`,
            newPrice: `${driedFruitCategory12.salePrice}`,
            weight: `${driedFruitCategory12.weight}`,
            id: '11',
        },

    ]

    const alsoLike = [
        {
            image: `https:${driedFruitCategory3Pic}`,
            currentRate: `${driedFruitCategory3.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory3.productName}`,
            oldPrice: `${driedFruitCategory3.oldPrice}`,
            price: `${driedFruitCategory3.price}`,
            newPrice: `${driedFruitCategory3.salePrice}`,
            weight: `${driedFruitCategory3.weight}`,
            id: '001',

        },
        {
            image: `https:${driedFruitCategory4Pic}`,
            currentRate: `${driedFruitCategory4.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory4.productName}`,
            oldPrice: `${driedFruitCategory4.oldPrice}`,
            price: `${driedFruitCategory4.price}`,
            newPrice: `${driedFruitCategory4.salePrice}`,
            weight: `${driedFruitCategory4.weight}`,
            id: '002',
        },
        {
            image: `https:${driedFruitCategory5Pic}`,
            currentRate: `${driedFruitCategory5.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory5.productName}`,
            oldPrice: `${driedFruitCategory5.oldPrice}`,
            price: `${driedFruitCategory5.price}`,
            newPrice: `${driedFruitCategory5.salePrice}`,
            weight: `${driedFruitCategory5.weight}`,
            id: '003',
        },
        {
            image: `https:${driedFruitCategory7Pic}`,
            currentRate: `${driedFruitCategory7.currentRate}`,
            onSale: true,
            productName: `${driedFruitCategory7.productName}`,
            oldPrice: `${driedFruitCategory7.oldPrice}`,
            price: `${driedFruitCategory7.price}`,
            newPrice: `${driedFruitCategory7.salePrice}`,
            weight: `${driedFruitCategory7.weight}`,
            id: '007',
        },]

    const categoriesHTML = (image, text, id) => {
        return `
                    <div class="row" id="${id}">
                        <div class="icon">
                            <img src="${image}" alt="">
                        </div>
                        <div class="text">${text}</div>
                    </div>`
    };
    const categoriesMenu = categoriesInfo.map(card => categoriesHTML(card.image, card.text, card.id)).join('');
    const categoriesPlace = document.getElementById('categoriesPlace');
    categoriesPlace.innerHTML = categoriesMenu;



    const smallCardHTML = (image, currentRate, productName, price, oldPrice, newPrice, weight, id) => {
        return `<div class="card" id="${id}">
                    <div class="header">
                        <div class="pic">
                            <img src="${image}" alt="">
                        </div>
                        <div class="info">
                            <div class="rate">
                                <div class="icon">
                                    <img src="./Images/icons/rateStar.png" alt="">
                                </div>

                                <div class="grate"><span>${currentRate}</span>/5</div>
                            </div>

                            <div class="sale" id="onSale">ON SALE</div>
                        </div>
                    </div>

                    <div class="name">${productName}</div>

                    <div class="cta">
                        <div class="btn">
                            <div class="add">Add</div>
                            <div class="plus">+</div>
                        </div>

                        <div class="pricesPace">
                            <div class="price" id="priceId">$ ${price}</div>
                            <div class="oldPrice" id="oldPriceId">${oldPrice}</div>
                            <div class="newPrice" id="newPriceId">$ ${newPrice}</div>
                            <!-- <div class="weight">/${weight}g</div>-->
                            <div class="weight">/500g</div>
                        </div>
                    </div>
                </div>`
    }


    const allCards = smallCardsInfo.map(card =>smallCardHTML(card.image, card.currentRate, card.productName, card.oldPrice, card.newPrice, card.weight)).join('');

    const allCardsPlace = document.getElementById('allCardsPlace');
    allCardsPlace.insertAdjacentHTML('beforeend', allCards)


    const driedFruitsCards = driedFruits.map(card => smallCardHTML(card.image, card.currentRate, card.productName, card.oldPrice, card.newPrice, card.price, card.weight, card.id)).join('');
    const driedFruitsCategoryDiv = document.getElementById('driedFruitsCategoryDiv');
    driedFruitsCategoryDiv.insertAdjacentHTML('beforeend', driedFruitsCards)


    const alsoLikeCards = alsoLike.map(card => smallCardHTML(card.image, card.currentRate, card.productName, card.oldPrice, card.newPrice, card.price, card.weight, card.id)).join('');
    const peopleAlsoLikeIt = document.getElementById('peopleAlsoLikeIt');
    peopleAlsoLikeIt.insertAdjacentHTML('beforeend', alsoLikeCards)




    const nawAdditionAllCards = newAdditionSmallCardsInfo.map(card => {
        // if (card.onSale === false) {

            // document.getElementById('onSale').style.display = 'none';
            // document.getElementById('oldPriceId').style.display = 'none';
            // document.getElementById('newPriceId').style.display = 'none';
        // }
        // } else document.getElementById('onSale').style.display = 'flex';
        return smallCardHTML(card.image, card.currentRate, card.productName, card.price, card.weight)
    }).join('');

    // console.log(nawAdditionAllCards.join(''))
    // console.log(document.getElementById('onSale'))





    const nawAdditionAllCardsPlace = document.getElementById('newAdditions');
    nawAdditionAllCardsPlace.insertAdjacentHTML('beforeend', nawAdditionAllCards)




    const productCardData = [
        {
            category: `${categoriesRow5.tittle}`,
            selectedproductName: ``,
            image: `https:${productPic}`,
            currentRate: `${product.currentRate}`,
            title: `${product.tittle}`,
            composition: `${product.compostition}`,
            country: `${product.country}`,
            brand: `${product.brand}`,
            price: `${product.price}`,
            weight: `${product.weight}`,
            description: ``,
        }
    ]
    
    const productCardHTML = (category, selectedproductName, image, currentRate, title,composition,country, brand, price, weight,description) => {
        return `<section class="productInfo">
                    <div class="way">Homepage / ${category} /${selectedproductName}</div>
    
                    <div class="mainContent">
                        <div class="left">
                            <div class="row1">
                                <div class="icon">
                                    <img src="./Images/icons/arrow_back.svg" alt="">
                                </div>
                                <div class="text">To ${category}</div>
                            </div>
    
                            <div class="image">
                                <img src="${image}" alt="">
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
                                    <div class="tottal">Tottal: $<span id="tottal">10.80</span></div>
                                    <div class="priceFor">$ <span id="price">${price}</span> / <span id="weight">${weight}</span>g</div>
                                </div>
    
                                <div class="choose">
                                    <div class="sumb">–</div>
                                    <div class="amount"><span id="number">1</span> kg</div>
                                    <div class="sumb">+</div>
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
    
    
    const productCardInfo = productCardData.map(card => productCardHTML(card.category, card.selectedproductName, card.image, card.currentRate, card.title, card.composition, card.country, card.brand, card.price, card.weight, card.description)).join('');
    const productCardPlace = document.querySelector('.productCard')
    productCardPlace.insertAdjacentHTML('afterbegin', productCardInfo)

}

test.send()




const categoriesBtn = document.getElementById('categoriesBtn');
// categoriesBtn.addEventListener('click', showCategories);

// function showCategories() {
//     let categories = document.getElementById('categoriesPlace')
//     if (categories.getAttribute('style') === null) {
//         categories.style.display = 'flex'
//     } else if (categories.getAttribute('style') === 'display: none;') {
//         categories.style.display = 'flex'
//     } else {
//         categories.style.display = 'none'
//     };





// categoriesBtn.addEventListener('click', showCategories);
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



    //doesn't work
    const driedFruits = document.getElementById('4')
    driedFruits.addEventListener('click', openCategory);
    function openCategory() {
        document.querySelector('.driedFruitCategory').style.display = 'block'
        document.querySelector('.homePage').style.display = 'none'
    }



    const apricCard = document.getElementById('05')
    console.log(apricCard)
    apricCard.addEventListener('click', showFullInfo);
    function showFullInfo() {
        document.querySelector('.driedFruitCategory').style.display = 'none'
        document.querySelector('.productCard').style.display = 'block'
    }
}

// const driedFruits = document.getElementById('test')
//     driedFruits.addEventListener('click', openCategory);
//     function openCategory() {
//         document.querySelector('.driedFruitCategory').style.display = 'block'
//         document.querySelector('.homePage').style.display = 'none'
//     }

const logo = document.getElementById('logo')
logo.addEventListener('click', backToHomePage);
function backToHomePage() {
    document.querySelector('.driedFruitCategory').style.display = 'none'
    document.querySelector('.homePage').style.display = 'block'
}





//doesn't work
// const apricCard = document.getElementById('05')
// console.log(apricCard)
// apricCard.addEventListener('click', showFullInfo);
// function showFullInfo() {
//     document.querySelector('.driedFruitCategory').style.display = 'none'
//     document.querySelector('.productCard').style.display = 'block'
// }












// const productCardData = [
//     {
//         category: `${categoriesRow1.tittle}`,
//         selectedproductName: ``,
//         image: `https:${productPic}`,
//         currentRate: `${productPic.currentRate}`,
//         title: `${productPic.tittle}`,
//         composition: `${productPic.composition}`,
//         country: `${productPic.country}`,
//         brand: `${productPic.brand}`,
//         price: `${productPic.price}`,
//         weight: `${productPic.weight}`,
//         description: ``,
//     }
// ]

// const productCardHTML = (category, selectedproductName, image, currentRate, title,composition,country, brand, price, weight,description) => {
//     return `<section class="productInfo">
//                 <div class="way">Homepage / ${category} /${selectedproductName}</div>

//                 <div class="mainContent">
//                     <div class="left">
//                         <div class="row1">
//                             <div class="icon">
//                                 <img src="./Images/icons/arrow_back.svg" alt="">
//                             </div>
//                             <div class="text">To ${category}</div>
//                         </div>

//                         <div class="image">
//                             <img src="${image}" alt="">
//                         </div>

//                         <div class="row2">
//                             <div class="h4">Customers rewiew</div>
//                             <div class="grade">
//                                 <div class="stars">
//                                     <img src="./Images/icons/rateStar.png" alt="">
//                                     <img src="./Images/icons/rateStar.png" alt="">
//                                     <img src="./Images/icons/rateStar.png" alt="">
//                                     <img src="./Images/icons/rateStar.png" alt="">
//                                     <img src="./Images/icons/rateStar.png" alt="">
//                                 </div>
//                                 <div class="amount"><span>${currentRate}</span>/5</div>
//                                 <div class="text">(9 reviews)</div>
//                             </div>
//                         </div>

//                         <div class="reviewCards">
//                             <div class="card">
//                                 <div class="row">
//                                     <div class="reviewerName">Alexander</div>
//                                     <div class="commas">
//                                         <img src="./Images/icons/commas.png" alt="">
//                                     </div>
//                                 </div>
//                                 <div class="text">This apricots are very deautiful to look at and quite appetizing.</div>
//                                 <div class="dataAndRate">
//                                     <div class="data">February 10, 2021</div>
//                                     <div class="rate">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/lightStar.png" alt="">
//                                     </div>
//                                 </div>
//                             </div>

//                             <div class="card">
//                                 <div class="row">
//                                     <div class="reviewerName">Christine</div>
//                                     <div class="commas">
//                                         <img src="./Images/icons/commas.png" alt="">
//                                     </div>
//                                 </div>
//                                 <div class="text">I eat it instead of candy, add it to yogurt and porridge!<br>Very healthy
//                                     and tasty</div>
//                                 <div class="dataAndRate">
//                                     <div class="data">January 25, 2021</div>
//                                     <div class="rate">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                     </div>
//                                 </div>
//                             </div>

//                             <div class="card">
//                                 <div class="row">
//                                     <div class="reviewerName">Andrew</div>
//                                     <div class="commas">
//                                         <img src="./Images/icons/commas.png" alt="">
//                                     </div>
//                                 </div>
//                                 <div class="text">Thanks to the store for the fast delivery!</div>
//                                 <div class="dataAndRate">
//                                     <div class="data">January 20, 2021</div>
//                                     <div class="rate">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                         <img src="./Images/icons/greyStar.png" alt="">
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="btn">
//                             <div class="icon">
//                                 <img src="./Images/icons/loading.png" alt="">
//                             </div>
//                             <div class="text">Show all</div>
//                         </div>
//                     </div>



//                     <div class="right">
//                         <div class="h2">${title}</div>

//                         <div class="delivInfo">
//                             <div class="inStock">
//                                 <div class="text">In stock</div>
//                                 <div class="icon">
//                                     <img src="./Images/icons/inStoke.png" alt="">
//                                 </div>
//                             </div>
//                             <div class="text">Delivery 1-3 business days</div>
//                         </div>

//                         <div class="info">
//                             <div class="column">
//                                 <div class="name">Composition:</div>
//                                 <div class="name">Country:</div>
//                                 <div class="name">Brand:</div>
//                             </div>
//                             <div class="column">
//                                 <div class="text">${composition}</div>
//                                 <div class="text">${country}</div>
//                                 <div class="text">${brand}</div>
//                             </div>

//                         </div>

//                         <div class="purchase">
//                             <div class="price">
//                                 <div class="tottal">Tottal: $<span id="tottal">10.80</span></div>
//                                 <div class="priceFor">$ <span id="price">${price}</span> / <span id="weight">${weight}</span>g</div>
//                             </div>

//                             <div class="choose">
//                                 <div class="sumb">–</div>
//                                 <div class="amount"><span id="number">1</span> kg</div>
//                                 <div class="sumb">+</div>
//                             </div>

//                             <div class="addBtn">
//                                 <div class="text">Add to cart</div>
//                                 <div class="icon">
//                                     <img src="./Images/icons/whitePlus.png" alt="">
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="h3">Description:</div>

//                         <div class="description">${description}</div>

//                         <div class="vitamins">
//                             <div class="square">B1</div>
//                             <div class="rhombus">B2</div>
//                             <div class="circle">C</div>
//                             <div class="triangle">A</div>
//                             <div class="triangleReverse">E</div>
//                         </div>

//                         <div class="otherInfo">
//                             <div class="row">
//                                 <div class="text">Nutritional value:</div>
//                                 <div class="icon">
//                                     <img src="./Images/icons/smArrdown.svg" alt="">
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="text">Vitamins</div>
//                                 <div class="icon">
//                                     <img src="./Images/icons/smArrdown.svg" alt="">
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="text">Minerals</div>
//                                 <div class="icon">
//                                     <img src="./Images/icons/smArrdown.svg" alt="">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>`
// }


// const productCardInfo = productCardData.map(card => productCardHTML(card.category, card.selectedproductName, card.image, card.currentRate, card.title, card.composition, card.country, card.brand, card.price, card.weight, card.description)).join('');
// const productCardPlace = document.querySelector('.productCard')
// productCardPlace.insertAdjacentHTML('afterbegin', productCardInfo)



