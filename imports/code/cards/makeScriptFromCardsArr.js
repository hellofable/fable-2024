export const makeScriptFromCardsArr = function (cardsArr) {
    let html = ""
    cardsArr.forEach(card => {
        html = html + "<card>"
        html = html + card
        html = html + "</card>"
    });

    return html
}