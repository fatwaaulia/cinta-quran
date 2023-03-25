function surah() {
    const urlAPI = 'https://equran.id';
   
    const getSurah = async() => {
        try {
            const response = await fetch(`${urlAPI}/api/v2/surat`);
            const responseJson = await response.json();
            if (responseJson.code != 200) {
              showResponseMessage(responseJson.message);
            } else {
                renderAllSurah(responseJson.data);
            }
        } catch (error) {
            alert('Ups something error');
        }
    };
  
    const renderAllSurah = (data) => {
        const listSurahElement = document.querySelector('#listSurah');
        listSurahElement.innerHTML = '';
    
        data.forEach(dataSurah => {
            const audioFull = JSON.stringify(dataSurah.audioFull,['01']);
            const urlAudio = audioFull.split(':"').pop().split('"')[0];
        listSurahElement.innerHTML += `
        <div class="col-xxl-4 col-xl-4 col-lg-4 konten">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-2 center">
                            ${dataSurah.nomor}
                        </div>
                        <div class="col-7">
                            <b>${dataSurah.namaLatin}</b> (${dataSurah.arti}) <br>
                            ${dataSurah.tempatTurun}, ${dataSurah.jumlahAyat} ayat
                        </audio>     
                        </div>
                        <div class="col-3">
                            ${dataSurah.nama} <br>
                            <a href="${urlAudio}">
                                <img src="https://cdn-icons-png.flaticon.com/512/0/375.png" style="width:20px;height: 20px;" alt="play">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      });
    };
    getSurah();
  }
  
  export default surah;