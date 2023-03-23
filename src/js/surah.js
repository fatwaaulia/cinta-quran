function surah() {
    const baseUrl = 'https://equran.id';
   
    const getSurah = () => {
      // membuat instance dari XMLHttpRequest
      const xhr = new XMLHttpRequest();
   
      //menetapkan callback jika response sukses dan error
      xhr.onload = function () {
        const responseJson = JSON.parse(this.responseText);
        
        if (responseJson.code != 200) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllSurah(responseJson.data);
        }
      };
   
      xhr.onerror = function () {
        showResponseMessage();
      };
   
      // Membuat GET request dan menetapkan target URL
      xhr.open('GET', `${baseUrl}/api/v2/surat`);
   
      // Mengirimkan request
      xhr.send();
    };


    
    
    /*
        jangan ubah kode di bawah ini ya!
    */
  
    const renderAllSurah = (data) => {
      const listSurahElement = document.querySelector('#listSurah');
      listSurahElement.innerHTML = '';
  
      data.forEach(dataSurah => {
        listSurahElement.innerHTML += `
        <div class="col-lg-3">
            <div class="card mb-3">
                <div class="card-header">
                    ${dataSurah.nomor}. ${dataSurah.namaLatin} (${dataSurah.arti})
                </div>
                <div class="card-body">
                    <table>
                        <tr>
                            <td>Jumlah Ayat</td>
                            <td>: ${dataSurah.jumlahAyat}</td>
                        </tr>
                        <tr>
                            <td>Tempat Turun</td>
                            <td>: ${dataSurah.tempatTurun}</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        `;
      });
    };
    getSurah();
  
    const showResponseMessage = (message = 'Ups something error') => {
      alert(message);
    };
  }
  
  export default surah;