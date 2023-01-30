let toSearch = [10, 20, 30, 40, 50, 60, 70, 80];
let lower = 0;
let upper = toSearch.length;
let midpoint = 0;
let found = false;
let toFind = 10;

while (found === false && lower <= upper) {
    midpoint = ~~(lower + upper);
    if (toFind == toSearch[midpoint]) {
        found = true;
        console.log(midpoint);
    } else if (toSearch[midpoint] < toFind) {
        lower = midpoint + 1;
    } else {
        upper = midpoint - 1;
    }
}
if (found === false){
    console.log(-1);
}