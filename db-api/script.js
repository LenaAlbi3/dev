const containerEl = document.getElementById("character-container");
const paginationEl = document.getElementById("pagination-buttons")
const firstBtn = document.getElementById("first");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const lastBtn = document.getElementById("last");

// hacer esto para ver q funcione todo ok
// console.log(containerEl, firstBtn, prevBtn, nextBtn, lastBtn);

let currentUrl = "https://dragonball-api.com/api/characters";

// array de usuarios no puede ser i + 1 a menos q nunca vaya a cambiar, si es de usuarios NO
// pq se pueden dar de baja

async function fetchCharacter(url) {
    containerEl.innerHTML = `<p style="color: #fff;">Loading ...</p>`;
    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.length === 0){
            throw new Error("No se ha encontrado el o los personajes")
        }

        displayCharacter(data.items ?? data);
        // items puede ser indefinido o nulo
        // nulish coalescing
        // es como un operador or, si no es nulo o undefined lo uso
        
        if(data.links) {
            paginationEl.style.display = "block";
            updatePagination(data.links);
        } else {
            paginationEl.style.display = "none";
        }

    } catch(err) {
        paginationEl.style.display = "none";
        containerEl.innerHTML = `<p style="color: #fff;">${err}</p>`;
        console.error(err);
    }
}

function displayCharacter(characters) {
    containerEl.innerHTML = "";

    characters.forEach((char) => {
        const card = document.createElement("div");
        card.className = "character-card";
        // revisar variables pq si es con mayus no funciona
        card.innerHTML = ` 
        <img src=${char.image} alt="${char.name}"> 
        <h3>${char.name}</h3>
        <p>${char.race}</p>
        <p>${char.ki}</p>
        `;
        containerEl.appendChild(card);
    });


}

// ta bien pero hay otra forma
/*
function updatePagination(url) {
    firstBtn.addEventListener("click", () => {
        // al ser una funcion q ejecuta otra funcion es un callback
        fetchCharacter(url.first);
    })
    prevBtn.addEventListener("click", () => {
        fetchCharacter(url.previous);
    })
    nextBtn.addEventListener("click", () => {
        fetchCharacter(url.next);
    })
    lastBtn.addEventListener("click", () => {
        fetchCharacter(url.last);
    })
}
*/

// solo metodo dif pero hace lo mismo

function updatePagination(links){
    firstBtn.onclick = () => {
        fetchCharacter(links.first);
    };
    prevBtn.onclick = () => {
        fetchCharacter(links.previous);
    };
    nextBtn.onclick = () => {
        fetchCharacter(links.next);
    };
    lastBtn.onclick = () => {
        fetchCharacter(links.last);
    };
}

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        const query = searchInput.value.trim().toLowerCase();
        if (query == ""){
            fetchCharacter(currentUrl);
            return;
        }
        const allCharEl = document.querySelectorAll(".character-card")
        // const names = [...allH3El].map((h3) => h3.innerText.toLowerCase);
        allCharEl.forEach((el) => {
           const name = el.querySelector("h3").innerText.toLowerCase();
           if(name == query){
                containerEl.innerHTML = "";
                containerEl.appendChild(el);
                return;
           }
        })

        try{
            const urlToSearchByName = `${currentUrl}?name=${query}`;
            fetchCharacter(urlToSearchByName);
        }catch(err){
            containerEl.innerHTML = `<p style="color: #fff;">${err}</p>`;
            console.error(err);
        }
    }
})

fetchCharacter(currentUrl);