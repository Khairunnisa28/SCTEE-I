function hitungLuas() {
    // Ambil nilai panjang dan lebar dari input
    var panjang = parseFloat(document.getElementById('panjang').value);
    var lebar = parseFloat(document.getElementById('lebar').value);
  
    // Hitung luas
    var luas = panjang * lebar;
  
    // Tampilkan hasil pada elemen dengan id "result"
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Luas Persegi Panjang: ' + luas;
  }
  