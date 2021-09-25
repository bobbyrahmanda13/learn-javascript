//todo Tagged Templates
// const nama = "Bobby Rahmanda";
// const umur = 24;

//! argument baru pada modern javascript
//* namanya "res" parameter => bisa menampung seluruh expression yang ada pada template literals nya

//* cara penulisan parameter "res" => ...namaVariabelnya

//* parameter "strings" untuk mengambil string biasa dan ...values untuk mengambil expression yang ada pada template literals

// function coba(strings, ...values) {
//   return values;
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

//* contoh lain

// const nama = "Bobby Rahmanda";
// const umur = 24;

// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun. `;
// console.log(str);

// contoh lainnya => Highlight
const nama = "Bobby Rahmanda";
const umur = 24;
const email = "bobbyrahmanda1996@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}. `;
// console.log(str);
document.body.innerHTML = str;

//todo Kegunaan Lain Tag Template
//* Escaping / Sanitize HTML Tags
//# Contoh

// function sanitize(strings, ...values) {
//   return DOMPurify.sanitize(aboutMe);
// }
// const namaKamu = "Bobby Rahmanda";
// const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;

// const html = sanitize`<h3>${namaKamu}</h3>
// <p>${aboutMe}</p>`;
//! links => https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761

//* Translation and Internationalization
//# Contoh

const html = i18n`Hello ${namaKamu}, you have ${amount}:c in your bank account.`;
// hasil => Hallo Steffen, Sie haben US$ 1,250.33 auf Ihrem Bankkonto.
//! links => https://github.com/skolmer/es2015-i18n-tag

//* Styled Components
//# Contoh
// const title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palavioletred;
// `;
//! links => https://www.styled-components.com/docs/basics/#getting-started
