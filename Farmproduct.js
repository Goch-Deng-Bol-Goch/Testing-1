function setUserCookie() {
  let cookies = document.cookie.split(";").map(c => c.trim());
  let visited = cookies.find(c => c.startsWith("visitedFarmFresh="));

  if (visited) {
    showGreeting("Welcome back to FarmFresh Market!");
  } else {
    document.cookie = "visitedFarmFresh=true; max-age=" + 7*24*60*60 + "; path=/";
    showGreeting("Welcome to FarmFresh Market!");
  }
}

function showGreeting(message) {
  let greetingDiv = document.createElement("div");
  greetingDiv.textContent = message;
  greetingDiv.style.position = "fixed";
  greetingDiv.style.top = "80px"; 
  greetingDiv.style.left = "50%";
  greetingDiv.style.transform = "translateX(-50%)";
  greetingDiv.style.background = "#a5d6a7";
  greetingDiv.style.color = "red";
  greetingDiv.style.padding = "10px 20px";
  greetingDiv.style.borderRadius = "8px";
  greetingDiv.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  greetingDiv.style.zIndex = "9999"; 
  greetingDiv.style.fontWeight = "600";
  greetingDiv.style.textAlign = "center";
  greetingDiv.style.opacity = "0";
  greetingDiv.style.transition = "opacity 0.5s";

  document.body.appendChild(greetingDiv);

  setTimeout(() => { greetingDiv.style.opacity = "1"; }, 100);

  setTimeout(() => { greetingDiv.style.opacity = "0"; }, 3100);

  setTimeout(() => { greetingDiv.remove(); }, 3600);
}

 function filterProducts() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const products = document.querySelectorAll("#productList .product-card");

    products.forEach(product => {
      const productName = product.querySelector("h3").textContent.toLowerCase();

      if (productName.includes(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }