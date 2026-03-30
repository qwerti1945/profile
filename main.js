let number = document.getElementById("nomor");
let content = document.getElementById("content");
let btnTambah = document.getElementById("btnTambah");
let btnKurang = document.getElementById("btnKurang");
let img = document.createElement("img");
img.src =
  "https://media.tenor.com/nfdPxXyMoAUAAAAM/thiercelin-chinois-thiercelin-stef.gif";
let count = 0;

function tambah() {
  count++;
  number.innerText = count;

  if (count >= 10) {
    number.classList.add("text-red-600");
  }

  if (count == 15) {
    content.appendChild(img);
  }
}

function kurang() {
  count--;
  number.innerText = count;
}

btnTambah.addEventListener("click", () => {
  tambah();
});

btnKurang.addEventListener("click", () => {
  kurang();
});
