const menuArticle = document.querySelector(".menuArticles");
function displayMenu(recipeBuild) {
  menuArticle.innerHTML = "";
  recipeBuild.forEach((_recipe) => {
    //Launch menu factory
    const menuModel = factoryMenu(_recipe);
    const menuCardDOM = menuModel.getMenuFactoryDOM();
    menuArticle.appendChild(menuCardDOM);
  });
}
