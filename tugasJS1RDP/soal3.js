function printSegitiga(n) {
    for (let i = n; i >= 1; i--) {
      let row = '';
      for (let j = i; j >= 1; j--) {
        row += j + ' ';
      }
      console.log(row);
    }
  }
  
  // Contoh pemanggilan fungsi
  printSegitiga(5);
  