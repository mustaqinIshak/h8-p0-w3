var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr) {
    arr.splice(1, arr.length-1, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro") 

    console.log(arr)

    let tanggal = arr[3].split("/")
    switch(tanggal[1]){
        case '01' : {
            console.log("Januari")
            break
        }
        case '02' : {
            console.log("Februari")
            break
        }
        case '03' : {
            console.log("Maret")
            break
        }
        case '04' : {
            console.log("April")
            break
        }
        case '05' : {
            console.log("Mei")
            break
        }
        case '06' : {
            console.log("Juni")
            break
        }
        case '07' : {
            console.log("Juli")
            break
        }
        case '08' : {
            console.log("Agustus")
            break
        }
        case '09' : {
            console.log("September")
            break
        }
        case '10' : {
            console.log("Oktober")
            break
        }
        case '11' : {
            console.log("November")
            break
        }
        case '12' : {
            console.log("Desember")
            break
        }
        default : {
            console.log("angka yang anda masukkan tidak tersedia dalam daftar bulan")
        }
    }
    let descendingTanggal = arr[3].split("/")
    console.log(descendingTanggal.sort(function(a, b){return b-a}))

    let formatTanggal = tanggal.join("-")
    console.log(formatTanggal)

    let nama = arr[1].split(" ").join(" ")
    if(nama.length > 15){
        console.log(nama.slice(0,15))
    } else {
        console.log(nama)
    }
    
    
    


}

dataHandling2(input);