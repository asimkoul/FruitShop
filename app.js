const heading=document.createElement("h3")
const headingText=document.createTextNode("Buy high quality organic fruits online")
heading.appendChild(headingText);
heading.style.fontStyle="italic";
const div=document.getElementsByTagName("div")
const firstDiv=div[0]
firstDiv.appendChild(heading)

const para=document.createElement("p")
const paraText=document.createTextNode("Total fruits: 4")
para.appendChild(paraText);
const secondDiv=div[1]
secondDiv.appendChild(para)

const fruits=document.querySelector(".fruits")
secondDiv.insertBefore(para,fruits)
para.id="fruits-total"