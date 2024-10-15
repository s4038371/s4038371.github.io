const gameBoard = document.getElementById("gameBoard");
let currentImage = "TeddyBear.jpg";

//The function of this section is to divide the image into 16 parts and randomly arrange them in disorder.
//I'm sorry, I don't know how to randomly arrange these images, so the randomly arranged part was obtained by searching on Google.
function initGame() {
  gameBoard.innerHTML = "";
  const indices = Array.from({ length: 16 }, (_, i) => i);
  shuffle(indices);

  indices.forEach((i) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.backgroundImage = `url('${currentImage}')`;
    tile.style.backgroundPosition = `${-(i % 4) * 135}px ${-Math.floor(i / 4) * 135}px`;
    tile.setAttribute("data-index", i);
    tile.draggable = true;
    gameBoard.appendChild(tile);
  });

  addDragAndDrop();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//This section is about adding the function of dragging and dropping images and swapping their positions after being dragged and dropped
function addDragAndDrop() {
  let draggedTile = null;

  document.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("dragstart", () => {
      draggedTile = tile;
    });

    tile.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    tile.addEventListener("drop", () => {
      if (draggedTile !== tile) {
        const draggedIndex = draggedTile.getAttribute("data-index");
        const targetIndex = tile.getAttribute("data-index");

        [draggedTile.style.backgroundPosition, tile.style.backgroundPosition] =
          [tile.style.backgroundPosition, draggedTile.style.backgroundPosition];

        draggedTile.setAttribute("data-index", targetIndex);
        tile.setAttribute("data-index", draggedIndex);
      }
    });
  });
}

document.getElementById("resetButton").addEventListener("click", initGame);

//This section adds the function of a dropdown menu and allows it to control the switching of images
dropdownToggle.addEventListener("click", () => {
    dropdownContent.style.display =
      dropdownContent.style.display === "none" ? "block" : "none";
  });
  
  document.querySelectorAll(".dropdown-content a").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      currentImage = item.getAttribute("data-image");
      initGame(); 
      dropdownContent.style.display = "none";
    });
  });

initGame();