const mainHeading=document.querySelector("#main-heading")
mainHeading.style.textAlign="right"
const basketHeading=document.querySelector("#basket-heading")
basketHeading.style.color="brown"
const fruits=document.querySelector(".fruits")
fruits.style.backgroungColor="grey"


const fruitItems=document.querySelectorAll(".fruit")
for (let i=0;i<fruitItems.length;i++){
  if(i%2==0){
      fruitItems[i].style.backgroundColor="lightgrey"
  }
  else{
    fruitItems[i].style.backgroundColor="brown"
    fruitItems[i].style.color="white"
  }
  fruitItems[i].style.listStyleType="none"
  fruitItems[i].style.padding="30px"
    fruitItems[i].style.margin="10px"
    fruitItems[i].style.borderRadius="5px"
  


  
}