// function increase(number, callback) {
//   setTimeout(() => {
//     const result = number + 10;
//     if (callback) {
//       callback(result);
//     }
//   }, 1000);
// }
// console.log("작업 시작");
// increase(0, (result) => {
//   console.log(result);
//   increase(result, (result) => {
//     console.log(result);
//     increase(result, (result) => {
//       console.log(result);
//       increase(result, (result) => {
//         console.log(result);
//         console.log("작업 완료");
//       });
//     });
//   });
// });
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    //resolve는 성공 reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        //50보다 높으면 에러 발생시키기
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); //number 값에 +10 후 성공처리
    }, 1000);
  });
  return promise;
}
async function runTasks() {
  try {
    //트라이 캐치 사용해서 에러처리
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
runTasks();
// increase(0)
//   .then((number) => {
//     //Promise에서 resolve된 값은 .then을 통해 받아올 수 있음
//     console.log(number);
//     return increase(number); //Promise를 리턴하면
//   })
//   .then((number) => {
//     //또 .then으로 처리 가능
//     console.log(number);
//     return increase(number); //Promise를 리턴하면
//   })
//   .then((number) => {
//     console.log(number);
//     return increase(number); //Promise를 리턴하면
//   })
//   .then((number) => {
//     console.log(number);
//     return increase(number); //Promise를 리턴하면
//   })
//   .then((number) => {
//     console.log(number);
//     return increase(number); //Promise를 리턴하면
//   })
//   .catch((e) => {
//     //도중에 에러가 발생한다면 .catch를 통헤 알 수 있음
//     console.log(e);
//   });
