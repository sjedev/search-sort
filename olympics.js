const bigArray = []

let itemsToSort = 10

for (i = 100; i <= 1000; i += 100) {
  itemsToSort = i
  makeBigArray(itemsToSort)
  timeSorts()
}



function timeSorts() {
  let start, end, millisecondsElapsed, temp
  let times = []
  console.log('Timing a sort of '+itemsToSort+' items')
  for (let i = 0; i < 3; i++) {
    start = performance.now();
    let temp = bigArray.slice()

    //comment out the line with the sort
    //you don't want to time
   bubbleSort(temp)
    //insertionSort(temp)


    end = performance.now();
    millisecondsElapsed = end - start;
    times.push(millisecondsElapsed)
    console.log("run " + (i + 1) + " " + itemsToSort + " items took " + millisecondsElapsed.toFixed(2) + ' m/s')
  }
  console.log('average time was ' + (times.reduce((total, el) => total + el) / times.length).toFixed(2) + ' m/s')
}

function bubbleSort(arr) {
  let n = 1
  let swap
  do {
    swap = false
    for (let i = 0; i < arr.length - n; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swap = true
      }
    }
    n++
  } while (swap == true)
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let c = i
    while (c > 0 && temp < arr[c - 1]) {
      arr[c] = arr[c - 1]
      c--
    }
    arr[c] = temp
  }
}


function makeBigArray(size) {
  for (let x = 0; x < size; x++) {
    bigArray.push(size-x)
  }
}