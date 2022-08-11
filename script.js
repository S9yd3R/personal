console.clear()
const card = document.querySelector(".card")

const onClick = (event) => {
  const target = event.target.className 
  
  if(target === "card") {
    card.style.cssText = "background: red" 
  } else if (target === "card-list-item"  || target === "card-list") {
    alert("Start animation")
  }
}

// Event Listeners
card.addEventListener('click', onClick);

