const cekharikerja = (day) =>{
    return new Promise((resolve,reject)=>
    {setTimeout(() => {
        const dataDay =['Senin','Selasa','Rabu','Kamis','Jumat']
        let cek = dataDay.find((item)=>{
            return item === day
        })
        if(cek){
            resolve(cek)
        }else{
            reject(new Error('Hari ini bukan hari kerja'))
        }
    }, 3000)
    ;})
}

// cekharikerja('sabtu')
// .then((result) =>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })

async function tes(day) {
    try {
      const result = await cekharikerja(day)
      console.log(result); // Tidak akan dieksekusi dalam contoh ini
    } catch (error) {
      console.log(error); // Output: Hari ini bukan hari kerja.
    }
  }
  tes('minggu')