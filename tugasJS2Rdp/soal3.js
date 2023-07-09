function cariDanUrutkan(nilaiAwal, nilaiAkhir, dataArray) {
  // Validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray > 5
  if (nilaiAwal >= nilaiAkhir || dataArray.length <= 5) {
    console.log("Validasi gagal: nilaiAwal harus lebih kecil dari nilaiAkhir dan jumlah dataArray harus lebih dari 5.");
    return;
  }

  // Mencari data di antara nilaiAwal dan nilaiAkhir
  const hasilPencarian = dataArray.filter((data) => data > nilaiAwal && data < nilaiAkhir);

  // Mengurutkan hasil pencarian
  hasilPencarian.sort((a, b) => a - b);

  // Menampilkan hasil pencarian ke layar/console
  console.log("Hasil Pencarian:");
  hasilPencarian.forEach((data) => {
    console.log(data);
  });
}

// Contoh penggunaan fungsi
const dataArray = [2, 5, 8, 10, 15, 20, 25, 30];
cariDanUrutkan(5, 25, dataArray);
