class CreateOneProduct{
  getProductItem(card){
    let element = document.createElement(card.tagName);
    if('className' in card){
      element.setAttribute('class', card.className)
    }
    if('textName' in card){
      element.innerHTML = card.textName;
    }
    if('backgroundImg' in card){
      element.setAttribute('src',card.backgroundImg);
    }
    if('id' in card){
      element.setAttribute('id', card.id);
    }
    return element;
  }
}

let createOneProduct = new CreateOneProduct('.container-counter', catalogProduct);