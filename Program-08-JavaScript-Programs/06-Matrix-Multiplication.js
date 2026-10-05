let A = [
    [1, 2],
    [3, 4]
];

let B = [
    [5, 6],
    [7, 8]
];

let result = [
    [0, 0],
    [0, 0]
];

for (let i = 0; i < 2; i++) {

    for (let j = 0; j < 2; j++) {

        for (let k = 0; k < 2; k++) {
            result[i][j] =
                result[i][j] + A[i][k] * B[k][j];
        }
    }
}

console.log("Result Matrix:");

for (let i = 0; i < 2; i++) {
    console.log(result[i].join(" "));
}