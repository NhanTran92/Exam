// Sửa lại Question1 của Exercise5 theo Promise
// function multiply(a: number, b: number = 1) {
//     console.log(a * b);
//   }
//   console.log(5, 3);
//   console.log(5);
// function exercise1(a: number, b: number = 1) {
//   let exercise1 = new Promise((resovle, reject) => {
//     if (a == -0) {
//       reject("Không được nhập số -0");
//     } else {
//       resovle(`Kết quả phép tính là ${a * b}`);
//     }
//   });
//   return console.log(exercise1);
// }
// exercise1(-5);
// function number_a(a: number) {
//   let exercise_a = new Promise((resovle, reject) => {
//     if (a == -0) {
//       reject("Không được nhập số -0");
//     } else {
//       resovle("Mời nhập số b hoặc để trống");
//     }
//   });
//   return console.log(exercise_a);
// }
// function number_b( b: number = 1) {
//   return b;
// }
function motilply() {
    function number_a(a) {
        let exercise_a = new Promise((resovle, reject) => {
            if (a == -0) {
                reject("Không được nhập số -0");
            }
            else {
                resovle("Mời nhập số b hoặc để trống");
            }
        });
        return console.log(exercise_a);
    }
    function number_b(b = 1) {
        return b;
    }
}
motilply();
