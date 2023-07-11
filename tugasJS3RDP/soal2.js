const getmonth = (callback) =>{
    setTimeout(()=>{
        let error = false
        let month = ['January','Februari','Maret']
        if(!error){
            callback(month)
        }else {
            callback(new Error("sorry data tidak terdeteksi"))
        }
    },4000)
}
getmonth((error, month) => {
    if (error) {
      console.error(error);
    } else {
      const monthsMapped = month.map((m) => m.toUpperCase());
      console.log(monthsMapped);
    }
  });