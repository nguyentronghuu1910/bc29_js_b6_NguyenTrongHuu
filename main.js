// Bài tập 1:
var number = 0;
var tong = 0;
// while (tong < 10000){
// number++;
// tong += number;
// };
document.getElementById("btnKetQua1").onclick = function() {
        var gioiHan = document.getElementById("txtNumber").value * 1;
        while (tong < gioiHan) {
            number++;
            tong += number;
        }
        document.getElementById("txtFooter1").innerHTML = "Số nguyên dương nhỏ nhất là: " + number;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 2:
// var S = 0;
//  function tinhTong(n, x) {
//     for (let i = 1; i <= n; i++) {
//         S += Math.pow(x, i);
//         }
//     return S;
// }
document.getElementById("btnKetQua2").onclick = function() {
    var coSo = parseInt(document.getElementById("coSo").value * 1);
    var soMu = document.getElementById("soMu").value * 1;
    var sum = 0;

    function tinhTong(coSo, soMu) {
        for (var i = 1; i <= soMu; i++) {
            sum += Math.pow(coSo, i)
        }
        return sum;
    }
    sum = tinhTong(coSo, soMu);
    document.getElementById("txtFooter2").innerHTML = "Tổng của biểu thức với " + coSo + " và " + soMu + " là: " + sum;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Bài tập 3:
// function tinhGiaiThua(n) {
//     var a = 1;
//     for (var i = 1; i <= n; i++) {
//         a *= i;
//     };
//     return a;
// };
document.getElementById("btnKetQua3").onclick = function() {
    var nhapSoN = document.getElementById("nhapSoN").value * 1;
    var giaiThua = 1;

    for (var i = 1; i <= nhapSoN; i++) {
        giaiThua *= i;
    }
    document.getElementById("txtFooter3").innerHTML = " Giai thừa của " + nhapSoN + " : " + giaiThua;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Bài tập 4:
// var n = 12;
// for (let i = 1; i <= n; i++) {
//     if(i % 2 == 0) {
//         console.log(" Div chẵn " + i);
//     } else {
//         console.log(" Div lẻ " + i);
//     }
// }
document.getElementById("btnKetQua4").onclick = function() {
    var soThe = document.getElementById("soThe").value * 1;
    var result = "";
    for (var i = 1; i <= soThe; i++) {
        if (i % 2 == 0) {
            result += "<div>Div chẵn " + i + "</div>";
            document.getElementById("txtFooter4").innerHTML = result;
        } else {
            result += "<div>Div lẻ " + i + "</div>";
            document.getElementById("txtFooter4").innerHTML = result;
        }
    }
}