let num = 17;
let prime = true;

if (num <= 1) {
    prime = false;
}

for (let i = 2; i < num; i++) {

    if (num % i === 0) {
        prime = false;
        break;
    }
}

if (prime) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is Not a Prime Number");
}