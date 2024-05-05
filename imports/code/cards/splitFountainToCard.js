


export function splitFountainToCards(scriptText) {

    const hasCardMarkers = scriptText.match(/\[\[\-\-\-\]\]/g)


    if (!hasCardMarkers) {

        return splitFountainToCardsNoMarkers(scriptText)
    }



    let cards = scriptText.split("[[---]]");

    const cardsOut = []
    cards.forEach(function (cardText, index) {
        if (!cardText) return
        const card = {
            text: cardText,
            // encText: CryptoJS.AES.encrypt(cardText, key).toString()
        }
        cardsOut.push(card);
    })

    cards.pop()
    if (cards[0] == "") cards.shift();
    return cards

}




export function splitFountainToCardsNoMarkers(scriptText) {
    // const key = _state.get().key
    // if (!key) {
    //     alert("no key found, cannot conitune")
    //     return
    // }
    /////////////////////// first split the entire script on new lines
    let scriptArr = scriptText.split(/\r?\n/);
    // itterate over lines
    // creating and pushing cards as needed
    let cards = [];
    let card = "";
    scriptArr.forEach(function (lineText, index) {
        // on match (new card)
        // push existing card text and start new one

        // ^\.\.


        if (lineText.match(/^INT|^\#|^EXT|^\./i) && !lineText.match(/^\.\./i)) {
            cards.push(card);
            card = "";
        }
        card += lineText + "\n";
    });
    cards.push(card);
    // we now have an array of cards containting text for each
    // lets create another array, this time with a json object
    // that containts the text AND encrypted text
    const cardsOut = []
    cards.forEach(function (cardText, index) {
        if (!cardText) return
        const card = {
            text: cardText,
            // encText: CryptoJS.AES.encrypt(cardText, key).toString()
        }
        cardsOut.push(card);
    })
    if (cards[0] == "") cards.shift();


    return cards

}