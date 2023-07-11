// Contoh program untuk mendapatkan data dari API menggunakan Promise

// Fungsi untuk mendapatkan data dari API
function getDataFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulasi permintaan data ke API (dalam contoh ini menggunakan setTimeout)
      setTimeout(() => {
        const data = { id: 1, name: "John Doe", email: "johndoe@example.com" };
        // Mengembalikan data jika berhasil
        resolve(data);
        // Mengembalikan pesan error jika terjadi kesalahan
        // reject("Gagal mendapatkan data dari API");
      }, 2000); // Menggunakan timeout 2 detik sebagai contoh
    });
  }
  
  // Memanggil fungsi untuk mendapatkan data dari API
  getDataFromAPI()
    .then((data) => {
      console.log("Data yang berhasil didapatkan:", data);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });











    
    // Contoh program untuk membaca file menggunakan Promise

const fs = require('fs');

// Fungsi untuk membaca file
function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Memanggil fungsi untuk membaca file
const filePath = 'data.txt';

readFile(filePath)
  .then((data) => {
    console.log('Isi file:', data);
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });
