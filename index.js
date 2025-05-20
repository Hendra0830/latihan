 console.log('*HALLO SAYA HENDRA*')
const inputUser = require("readline");

const human = inputUser.createInterface({
  input: process.stdin,
  output: process.stdout
});

human.question("Masukkan sebuah angka!: ", function(input) {
  const angka = parseInt(input);

  if (isNaN(angka)) {
    console.log("YANG BENER AJA ITU BUKAN ANGKA!");
  } else if (angka % 2 === 0) {
    console.log(angka + " adalah bilangan genap.");
  } else {
    console.log(angka + " adalah bilangan ganjil.");
  }

  human.close();
});
