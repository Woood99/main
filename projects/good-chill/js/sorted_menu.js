document.querySelector('button#sort-asc').onclick = function () {
    sortList('data-price');
}
document.querySelector('button#sort-desc').onclick = function () {
    sortListDesc('data-price');
}
document.querySelector('button#sort-new').onclick = function () {
    sortList('data-new');
}
document.querySelector('button#sort-sale').onclick = function () {
    sortList('data-sale');
}


function sortList(sortType) {
    let items = document.querySelector('.products__inner-box');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.products__inner-box');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

