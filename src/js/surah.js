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
                    <div class="mt-2">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deskripsi${dataSurah.nomor}">
                        Deskripsi
                      </button>
                      <div class="modal fade" id="deskripsi${dataSurah.nomor}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">${dataSurah.namaLatin}</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              ${dataSurah.deskripsi}
                            </div>
                          </div>
                        </div>
                      </div>

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