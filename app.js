const container = document.getElementById("products");

db.collection("products").get().then(snapshot => {
  snapshot.forEach(doc => {
    const p = doc.data();

    container.innerHTML += `
      <div>
        <img src="${p.image}" width="150"/>
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button onclick="buyNow('${p.name}')">Buy Now</button>
      </div>
    `;
  });
});

function buyNow(product) {
  const number = "918099208149";
  const message = `I want to buy ${product}`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`);
}