const listCategory = document.querySelector("#categories"); 
const itemCategory = listCategory.querySelectorAll("li.item"); 

for (const item of itemCategory) {
  
  const name = item.querySelector("h2").textContent; 
  const categoryElements = item.querySelectorAll("ul li");   
  const numberOfElements = categoryElements.length; 
  
console.log("Category " + name);
console.log("Number of categories: ", numberOfElements); 

}