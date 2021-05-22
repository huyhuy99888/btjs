// Boolean 
var isMale = false;

// phép so sánh 
// == : chỉ so sánh giá trị 
var isEqual = 6 == 6;
// === : so sánh giá trị và kiểu dữ liệu luôn 
var isEqual = 6 === '6';

// != : so sánh khác 
var isDifference = 'A' != 'B';
// giá trị hoặc kiểu !==
var isDifference = 9 != '9';

// so sánh lớn hơn 
var isBigger = 5 > 9;
// so sánh lớn hơn hoặc bắng 
var isBiggerOrEqual = 9 >= 9;

// Phép luận lý ( LOGICAL OPERATOR): &&, || , !
// so sánh  trái sang phải,gặp false là dừng ngay và xuất ra false luôn.
var logicalOne = (14 > 5) && ('A' === 'A');
                //   true         true       => true && true: true 

// cái Và này chỉ cần có 1 cái false thì nó trả về False hết 
// đại khái là có so sánh 19 cái đi nữa đi 1 cái sai thì cũng sai hết 
 var logicalOne = (14 > 15) && ('A' === 'A');
                //   false         true       => False && true: false  


// phép || hoặc này chạy từ trái sang phải,ngược trên,này gặp đúng thôi là nó dừng lại xuất 
// ra true luôn 
var logicalOr = (14 > 15) || ('A' === 'A') || 3===4;
            //   false           true         false   => kq: true 

// thêm dấu chấm ! vào nó sẽ nghịch đảo cả nguyên kết quả bên trong lại             
var phepNghichDao = !((14 > 15) || ('A' === 'A') || 3===4); //=>false

// mix cả 3 phép lại thử 
var mix = (14 > 15) || ('A' === 'A') && !(20===21); //=>true

// console.log(mix);
// console.log(isEqual);
// console.log(isDifference);
console.log(phepNghichDao);


var result = false && 6;
console.log(result);
       
// hoặc gặp false chạy tiếp,nên ra sau nó trả lại con số cuối cùng,vì này ko phải bolen
// nên nó sẽ chạy từ đầu đến cuối 
// số 6 này ko phải là kiểu boleon nên nó nhả luôn ra số 6
var result = false || 6 || 10;
var result = false || true && 'ssss'; 
console.log(result);


var plus = false || true || 6;
console.log(plus);

// CẤU TRÚC ĐIỀU KIỆN 

// if 
var a = 3;
var b = 2;
if( a > b ){
    console.log('Điều Kiện Dúng!');
}

// if khi nào đúng nó mới chạy vô,rồi chạy tiếp dưới,còn sai thì nó chỉ chạy bên ngoài thôi 
if (!(a<b)){
    console.log('Điều kiện đúng!');
}

console.log('Điều Kiện Sai!');


// Bài Tập: Chuyển số âm -> dương (if)

var soAm = -1; // cái trừ 1 này là nhập vô,nếu dương thì nó ko chạy bên trong.
var soDuong;
if(soAm<0){
    soDuong = -soAm;
}
console.log(soDuong);


// if else 
// if(dk dung){

// } else{

// }

// Tìm số lớn nhất trong 2 số
// var a = 4;
// var b = 6;
// var bigger = 
// if(a<b){
//     console.log(a);
// } else {
//     console.log(b)
// }

// input: a,b;
// handle:
//  1.tạo ra biến a,b,max
//  2.tìm max: nếu a>b => a lớn nhất else b lớn nhất
// ouput: max
 
var a = 10;
var b = 15;
var max;

if (a > b){
    max = a;
} else{
    max =b;
}
console.log(max);


// Else if 
// if (dk){
// //code
// } else if (dk2) {
// //code
// } else if (dk3) {
//    //code 
// } else if (dk4) {
// //code
// } else {

// }

// tính điểm trung bình 
// input: họ tên,điểm toán,lý,hóa
// handle:
// 1.tạo biến hoTen , dToan , dHoa , xepLoai , dTrungBinhinh
// 2.Tinh diem tb: (dToan + dLy + dHoa)/3 
// 3.Xep loại học sinh
// output: điểm trung bình,xếp loại

var hoTen = 'Nguyen Duc Huy';
var dToan = 9;
var dLy = 6;
var dHoa = 7;
var dTrungBinh;
var xepLoai = '';

//tính trung bình 
dTrungBinh = (dToan + dLy + dHoa) / 3;

if(dTrungBinh >= 8.5){
    xepLoai = 'Gioi';
} else if(dTrungBinh >= 6.5 && dTrungBinh < 8.5) {
    xepLoai = 'Kha';
} else if (dTrungBinh >= 5 && dTrungBinh < 6.5){
    xepLoai = 'Trung Bình';
} else {
    xepLoai = 'Yeu'
}
console.log('Tên:', hoTen);
console.log('Điểm TB', dTrungBinh);
console.log('Xếp loại:', xepLoai);