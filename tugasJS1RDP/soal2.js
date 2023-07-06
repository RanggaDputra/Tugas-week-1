// Mendapatkan input dari pengguna
let nilaiBahasaIndonesia = parseFloat(4);
let nilaiBahasaInggris = parseFloat(3);
let nilaiMatematika = parseFloat(1);
let nilaiIPA = parseFloat(2);

// Validasi nilai
if (isNaN(nilaiBahasaIndonesia) || isNaN(nilaiBahasaInggris) || isNaN(nilaiMatematika) || isNaN(nilaiIPA)) {
  console.log("Semua nilai harus diisi. Silakan refresh halaman dan coba lagi.");
} else {
  // Menghitung rata-rata
  let rataRata = (nilaiBahasaIndonesia + nilaiBahasaInggris + nilaiMatematika + nilaiIPA) / 4;
  
  // Menentukan grade
  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80 && rataRata <= 89) {
    grade = "B";
  } else if (rataRata >= 70 && rataRata <= 79) {
    grade = "C";
  } else if (rataRata >= 60 && rataRata <= 69) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  // Menampilkan hasil
  console.log("Rata-rata: " + rataRata.toFixed(2));
  console.log("Grade: " + grade);
}