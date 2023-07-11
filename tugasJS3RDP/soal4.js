fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    // Mengambil semua name
    const names = data.map(user => user.name);
    
    // Menampilkan semua name
    names.forEach(name => {
      console.log(name);
    });
  })
  .catch(error => {
    console.log('Terjadi kesalahan:', error);
  });
