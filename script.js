const series = {
  nocturnes: {
    titre: "Nocturnes",
    images: [
      {
        src: "images/nocturnes/01.jpg",
        titre: "Le Silence",
        infos: "Huile sur toile — 80x60 cm — 2024"
      },
      {
        src: "images/nocturnes/02.jpg",
        titre: "Bleu profond",
        infos: "Huile sur toile — 100x80 cm — 2024"
      }
    ]
  },

  jardins: {
    titre: "Les Jardins",
    images: [
      {
        src: "images/jardins/01.jpg",
        titre: "Printemps",
        infos: "Huile sur toile"
      }
    ]
  }
};

// récupérer série dans URL
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");

const data = series[nom];

if (data) {
  document.getElementById("titre").textContent = data.titre;

  const galerie = document.getElementById("galerie");

  data.images.forEach(img => {
    const div = document.createElement("div");
    div.className = "image";

    div.innerHTML = `
      <img src="${img.src}" onclick="openLightbox('${img.src}')">
      <div class="caption">
        <strong>${img.titre}</strong><br>
        ${img.infos}
      </div>
    `;

    galerie.appendChild(div);
  });
}

function openLightbox(src) {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  box.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


// ===== MENU MOBILE =====

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && sidebar) {

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

}
