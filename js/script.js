document.addEventListener('DOMContentLoaded', function(){
    var SegitigaBtn = document.querySelector('.SegitigaBtn');
    var luasSegitigaBtn = document.getElementById('luasSegitigaBtn');
    var luasSegitigaForm = document.getElementById('luasSegitigaForm');
    var kelilingSegitigaBtn = document.getElementById('kelilingSegitigaBtn');
    var kelilingSegitigaForm = document.getElementById('kelilingSegitigaForm');
    

    SegitigaBtn.addEventListener('click', function(){
        luasSegitigaBtn.classList.toggle('hidden');
        kelilingSegitigaBtn.classList.toggle('hidden');
        luasSegitigaForm.classList.add('hidden');
        kelilingSegitigaForm.classList.add('hidden');
    });

    luasSegitigaBtn.addEventListener('click', function() {
        luasSegitigaForm.classList.toggle('hidden');
        kelilingSegitigaForm.classList.add('hidden');
    });

    kelilingSegitigaBtn.addEventListener('click', function() {
        kelilingSegitigaForm.classList.toggle('hidden');
        luasSegitigaForm.classList.add('hidden');
    });
});

function hitungluasSegitiga(){
    alas1 = document.getElementById("alas1").value;
    tinggi1 = document.getElementById("tinggi1").value;
    if (alas1 == 0 || tinggi1 == 0){
        window.alert("Masukkan nilai yang valid");
        return;
    }
    luas1 = 1/2*alas1*tinggi1;
    document.getElementById("luas1").innerText = "Luas = 1/2 x a  x  t " + "\nLuas = 1/2 x " + alas1 + " x " + tinggi1 + "\n Luas = " + luas1 ;
}

function resetluasSegitiga(){
    if (document.getElementById("luas1").innerText == 0){
        window.alert("Lakukan perhitungan terlebih dahulu");
        return;
    }
    document.getElementById("alas1").value = "";
    document.getElementById("tinggi1").value = "";
    document.getElementById("luas1").innerText = "";
}

function hitungkelilingSegitiga(){
    s1 = parseFloat(document.getElementById("s1").value);
    s2 = parseFloat(document.getElementById("s2").value);
    s3 = parseFloat(document.getElementById("s3").value);
    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        window.alert("Masukkan nilai yang valid");
        return;
    }
    keliling1 = s1 + s2 + s3;
    document.getElementById("keliling1").innerText = "Keliling = S1 + S2 + S3 " + "\nKeliling = " + s1 + " + " + s2 + " + " + s3 + "\n Keliling = " + keliling1 ;
}

function resetkelilingSegitiga(){
    if (document.getElementById("keliling1").innerText == 0){
        window.alert("Lakukan perhitungan terlebih dahulu");
        return;
    }
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("keliling").innerText = "";
}


document.addEventListener('DOMContentLoaded', function(){
    var JajargenjangBtn = document.querySelector('.JajargenjangBtn');
    var luasJajargenjangBtn = document.getElementById('luasJajargenjangBtn');
    var luasJajargenjangForm = document.getElementById('luasJajargenjangForm');
    var kelilingJajargenjangBtn = document.getElementById('kelilingJajargenjangBtn');
    var kelilingJajargenjangForm = document.getElementById('kelilingJajargenjangForm');

    JajargenjangBtn.addEventListener('click', function(){
        luasJajargenjangBtn.classList.toggle('hidden');
        kelilingJajargenjangBtn.classList.toggle('hidden');
        luasJajargenjangForm.classList.add('hidden');
        kelilingJajargenjangForm.classList.add('hidden');
    });

    luasJajargenjangBtn.addEventListener('click', function(){
        luasJajargenjangForm.classList.toggle('hidden');
        kelilingJajargenjangForm.classList.add('hidden');
    });

    kelilingJajargenjangBtn.addEventListener('click', function(){
        kelilingJajargenjangForm.classList.toggle('hidden');
        luasJajargenjangForm.classList.add('hidden');
    });
});

function hitungluasJajargenjang(){
    alas2 = document.getElementById("alas2").value;
    tinggi2 = document.getElementById("tinggi2").value;
    if (alas2 == 0 || tinggi2 == 0){
        window.alert("Masukkan nilai yang valid");
        return;
    }
    luas2 = alas2*tinggi2;
    document.getElementById("luas2").innerText = "Luas = a  x  t  " + "\nLuas = " + alas2 + " x " + tinggi2 + "\nLuas = " + luas2;
}

function resetluasJajargenjang(){
    if (document.getElementById("luas2").innerText == 0){
        window.alert("Lakukan perhitungan terlebih dahulu");
        return;
    }
    alas2 = document.getElementById("alas2").value = "";
    tinggi2 = document.getElementById("tinggi2").value = "";
    luas2 = document.getElementById("luas2").innerText = "";
}

function hitungKelilingJajargenjang(){
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    if (isNaN(a) || isNaN(b)) {
        window.alert("Masukkan nilai yang valid");
        return;
    }
    keliling2 = a + a + b + b;
    document.getElementById("keliling2").innerText = "Keliling = a + a + b + b " + "\nKeliling = 2a + 2b " + "\nKeliling = " + "2 x " + a + " +" + " 2 x " + b + "\nKeliling = " + keliling2; 
}

function resetKelilingJajargenjang(){
    if (document.getElementById("keliling2").innerText == 0){
        window.alert("Lakukan perhitungan terlebih dahulu");
        return;
    }
    a = document.getElementById("a").value = "";
    b = document.getElementById("b").value = "";
    keliling2 = document.getElementById("keliling2").innerText = "";
}

