// ===========================================
// todo => DOM Manipulation Part 1

// * element.innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Ini diisi Terserah</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello World";

// * element.style.<propertiCSS>
// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// * element.setAttribute(), element.getAttribute(), element.removeAttribute()
// Attribute => sesuatu yang menempel pada html, contoh = class,id,type,href,dll
// const judul = document.getElementsByTagName("h1")[0];
// menambahkan Attribute mengggunakan setAttribute()
// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");
// hasil => <a href="http://instagram.com/rahmanrvbr" id="link">Instagram Rahman</a>

// * mengambil isi dari Attribute menggunakan getAttribute()
// a.getAttribute("id");
// hasil => "link"
// a.getAttribute("href");
// hasil => "http://instagram.com/rahmanrvbr"
// judul.getAttribute("id");

// * menghilangkan sebuah Attribute menggunakan removeAttribute()
// judul.removeAttribute("id");
// hasil => <h1>Hello World</h1>
// a.removeAttribute("href");
// hasil => <a>Instagram Rahman</a>

// ! Note: setAttribute -> itu menimpa configurasi awal yang sudah ada, jadi jika configurasi awal nya itu adalah class="nama" maka jika di inputkan class="makan" maka hasilnya menjadi class="makan"

// * element.classList => gunanya untuk mengelola Attribute "class"
// const p2 = document.querySelector(".p2");
// Jenis classList :

// * element.classList.add(); => menambahkan class baru
// p2.classList.add("label");
// hasil=> <p class="p2 label">Paragraf 2</p>

// * element.classList.remove(); => menghapus class yang ada
// p2.classList.remove("label");
// hasil=> <p class="p2">Paragraf 2</p>

// * element.classList.toggle(); => sebuah element tidak mempunyai class tertentu maka dia akan menambahkan, jika element tersebut sudah punya toggle() akan menghilangkan class tersebut
// p2.classList.toggle("label");
// hasil => true => <p class="p2  label">Paragraf 2</p>
// p2.classList.toggle("label");
// hasil => false => <p class="p2">Paragraf 2</p>
// ! classList.togggle() => dapat menambah class baru jika belum ada, dan menghapus class yang ada jika nama dari class tersebut sama

// * element.classList.item(); => mengetahui class tertentu yang ada didalam sebuah element
// p2.classList.add("satu");
// p2.classList.add("dua");
// p2.classList.add("tiga");
// p2.classList.item(2);

// hasil => dua
// ! Note => classList.item(2) => 2 adalah index dari urutan class di mulai dari 0

// * element.classList.contains(); => mengecheck dalam sebuah element apakah dia punya class tertentu atau tidak
// p2.classList.contains("dua");
// hasil => true => class dengan nama "dua" ada
// p2.classList.contains("lima");
// hasil => false => class dengan nama "lima" tidak ada

// * element.classList.replace(); => mengganti class yang ada
// p2.classList.replace("tiga", "empat");
// hasil => <p class="p2 satu dua empat">Paragraf 2</p>

// ====================================================

// todo => DOM Manipulation Part 2

// * Menyisipkan Element HTML baru Ke Akhir Element dengan appendChild()

// Create New Element HTML
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// ! appendChild() =>  simpan ke akhir dari element tersebut / simpan ke akhir dari sebuah element parent(orangtua)

// * Menyisipkan element HTML Baru di Antara Element yang sudah ada

const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);
// ! insertBefore => simpan sebelum element apa di dalam element parent(orangtua)
// ! syntax insertBefore(Node baru, disimpan sebelum element apa)

// menghapus a href link / element Html / Node Html dengan parentNode.removeChild()
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// mengganti Element Html/Node HTML dengan parentNode.replaceChild()

// Tangkap Element yang akan di replace
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

// Create New Element HTML
const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru!");
h2Baru.appendChild(teksH2Baru);

// Mengganti p4 menjadi h2Baru
sectionB.replaceChild(h2Baru, p4);
