let i = parseInt(prompt("1-sonni kiriting: "));
let b = parseInt(prompt("2-sonni kiriting: "));

if (!isNaN(i) && !isNaN(b)) {
    if (i <= b) {
        for (let j = i; j <= b; j++) {
            if (j % 2 == 0) {
                console.log(j);
            }
        }
    } else {
        alert("Birinchi son ikkinchidan katta!");
    }
} else {
    alert("Raqamlarni kiriting!");
}
