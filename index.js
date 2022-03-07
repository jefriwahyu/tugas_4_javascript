var siswa1 = 165;
var siswa2 = 175;
var siswa3 = 185;

function tinggiSiswa1(){
  if (siswa1>siswa2) {
    console.log("Siswa pertama lebih tinggi dari siswa kedua");
  }else if (siswa1>siswa3) {
    console.log("Siswa pertama lebih tinggi dari siswa ketiga");
  }else {
    console.log("Siswa pertama tidak lebih tinggi dari siswa kedua dan ketiga");
  }
}

tinggiSiswa1()

function tinggiSiswa2(){
  if (siswa2>siswa1) {
    console.log("Siswa kedua lebih tinggi dari siswa pertama");
  }else if (siswa2>siswa3) {
    console.log("Siswa kedua lebih tinggi dari siswa ketiga");
  }else {
    console.log("Siswa kedua tidak lebih tinggi dari siswa pertama");
  }
}

tinggiSiswa2()

function tinggiSiswa3(){
  if (siswa3<siswa1) {
    console.log("Siswa ketiga tidak lebih tinggi dari siswa pertama");
  }else if (siswa3>siswa2) {
    console.log("Siswa ketiga lebih tinggi dari siswa kedua dan juga siswa pertama");
  }else {
    console.log("Siswa ketiga tidak lebih tinggi dari siswa pertama dan ketiga");
  }
}

tinggiSiswa3()

function hasil(){
  console.log(siswa3);
  console.log(siswa2);
  console.log(siswa1);
}

hasil()
