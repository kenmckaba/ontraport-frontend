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

const arr = [10, 12, 15, 21];

const process = (index) => {
  const f = () => {
    console.log('Index: ' + index + ', element: ' + arr[index]);
    if (index < arr.length - 1) {
      process(index + 1);
    }
  };

  setTimeout(() => f(), 3000);
};

process(0);
