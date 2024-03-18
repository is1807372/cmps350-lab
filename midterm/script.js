document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/:id");
    let data;
    if (res.ok) {
      data = await res.json();
    }
    console.log(data);
  
    data.forEach((poki) => {
      const pokiDiv = document.createElement("div");
      pokiDiv.innerHTML = poki.cca3;
      document.querySelector("#facts").appendChild(pokiDiv);
    });

    document.querySelector("#more").addEventListener("click", () => {
        const img = document.createElement("img");
        img.src = `https://pokeapi.co/api/v2/pokemon/:id${Math.ceil(
          Math.random() * 100
        )}/400/400`;
        img.addEventListener("click", () => {
          img.parentNode.removeChild(img);
        });
        document.querySelector("#gallery").appendChild(img);
      });
  });
  
