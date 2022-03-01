let tempText = "";
function factoryMenu(recipe) {
  const { name, ingredients, time, description } = recipe;
  function getMenuFactoryDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "menuHold");
    const div = document.createElement("div");
    div.setAttribute("class", "menuText");
    const img = document.createElement("img");
    img.setAttribute("src", "asset/pictures/placeholder.png");
    const titleh2 = document.createElement("h2");
    titleh2.textContent = name;
    const timeh3 = document.createElement("h3");
    timeh3.textContent = time + " mn";
    const ingredientsdiv = document.createElement("div");
    const ingredienth3 = document.createElement("h3");
    for (let i = 0; i < ingredients.length; i++) {
      tempText += ingredients[i].ingredient;
      if (ingredients[i].quantity != null) {
        tempText += ": <i>" + ingredients[i].quantity + "</i>";
      }
      if (ingredients[i].unit != null) {
        tempText += " <i>" + ingredients[i].unit + "</i>";
      }
      tempText += "<br>";
    }
    ingredienth3.innerHTML = tempText;
    tempText = "";
    ingredientsdiv.appendChild(ingredienth3);
    const descriptionh4 = document.createElement("h4");
    descriptionh4.textContent = description;
    article.appendChild(img);
    div.appendChild(titleh2);
    div.appendChild(timeh3);
    div.appendChild(ingredientsdiv);
    div.appendChild(descriptionh4);
    article.appendChild(div);
    return article;
  }
  return { getMenuFactoryDOM };
}
