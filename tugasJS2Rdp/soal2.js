const name = [
    "Abigail","Alexandra","Alison",
    "Amanda","Angela","Bella",
    "Carol","Caroline","Carolyn",
    "Deirdre","Diana","Elizabeth",
    "Ella","Faith","Olivia","Penelope"
  ];
  
  function searchName(keyword, limit, callback) {
    const matches = name.filter((n) => n.toLowerCase().includes(keyword.toLowerCase()));
    const results = matches.slice(0, limit);
    callback(results);
  }
  
  function callback(result) {
    console.log(result);
  }
  
  searchName("an", 3, callback);
  