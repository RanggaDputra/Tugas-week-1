function PijarFood(harga, voucher, jarak, pajak) {
    let harga_total = harga;
    let potongan = 0;
    let biaya_antar = 0;
    let pajak_total = 0;
  
    if (voucher === "PIJARFOOD5" && harga >= 50000) {
      potongan = Math.min(harga * 0.5, 50000);
    } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
      potongan = Math.min(harga * 0.6, 30000);
    }
  
    if (jarak > 2) {
      biaya_antar = 5000 + (jarak - 2) * 3000;
    }
  
    if (pajak) {
      pajak_total = harga_total * 0.05;
    }
  
    let subtotal = harga_total - potongan + biaya_antar + pajak_total;
  
    console.log("Harga:", harga_total);
    console.log("Potongan:", potongan);
    console.log("Biaya Antar:", biaya_antar);
    console.log("Pajak:", pajak_total);
    console.log("SubTotal:", subtotal);
  }
  
  // Contoh pemanggilan fungsi:
  PijarFood(75000, "PIJARFOOD5", 5, true);
  