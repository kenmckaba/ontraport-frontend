/*
 * What is going to be the output
 */
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

// KM: I assume the intent is to log the array, 1 value every 3 seconds
console.log('start')

if (true) {
  const arr = [10, 12, 15, 21];

  async function doIt() {
    return await new Promise((resolve) => {
      const process = (index) => {
        const f = () => {
          console.log('Index: ' + index + ', element: ' + arr[index]);
          if (index < arr.length - 1) {
            process(index + 1);
          } else {
            resolve(true);
          }
        };
        setTimeout(f, 3000);
      };
      process(0);
    });
  };

  doIt();

} else {

  const arr = [10, 12, 15, 21];
  for (var i = 0; i < arr.length; i++) {
    (function( _i ) {
      setTimeout(function() {
        console.log('Index: ' + _i + ', element: ' + arr[_i]);
      }, 5000);
    })(i)
  }
}
