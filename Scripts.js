addition.onclick = function() {
    let a = prompt("Enter a number:");
    let b = prompt("Enter a number:");
    let c = Number(a) + Number(b);
    alert(c);
}
subtraction.onclick = function() {
    let a = prompt("Enter a number:");
    let b = prompt("Enter a number:");
    let c = Number(a) - Number(b);
    alert(c);
}
multiplication.onclick = function() {
    let a = prompt("Enter a number:");
    let b = prompt("Enter a number:");
    let c = Number(a) * Number(b);
    alert(c);
}
division.onclick = function() {
    let a = prompt("Enter a number:");
    let b = prompt("Enter a number:");
    let c = Number(a) / Number(b);
    alert(c);
}
power.onclick = function() {
    let a = prompt("Enter a number:");
    let b = prompt("Enter a power you want to raise to:");
    let c = Number(a) ** Number(b);
    alert(c);
}
root.onclick = function() {
    let a = prompt("Enter a number:");
    let c = Math.sqrt(a);
    alert(c);
}
sinus.onclick = function() {
    let a = prompt("Enter a number (in degrees):");
    if (a == 0) {
        alert("0");
    } else if (a == 30) {
        alert("1/2");
    } else if (a == 45) {
        alert("√2/2");
    } else if (a == 60) {
        alert("√3/2");
    } else if (a == 90) {
        alert("1");
    } else if (a == 120) {
        alert("√3/2");
    } else if (a == 135) {
        alert("√2/2");
    } else if (a == 150) {
        alert("1/2");
    } else if (a == 180) {
        alert("0");
    } else if (a == 210) {
        alert("-1/2");
    } else if (a == 225) {
        alert("-√2/2");
    } else if (a == 240) {
        alert("-√3/2");
    } else if (a == 270) {
        alert("-1");
    } else if (a == 300) {
        alert("-√3/2");
    } else if (a == 315) {
        alert("-√2/2");
    } else if (a == 330) {
        alert("-1/2");
    } else if (a == 360) {
        alert("0");
    } else {
        let c = Math.sin(a);
        alert(c);
    }
}
cosinus.onclick = function() {
    let a = prompt("Enter a number (in degrees)");
    if (a == 0) {
        alert("1");
    } else if (a == 30) {
        alert("√3/2");
    } else if (a == 45) {
        alert("√2/2");
    } else if (a == 60) {
        alert("1/2");
    } else if (a == 90) {
        alert("0");
    } else if (a == 120) {
        alert("-1/2");
    } else if (a == 135) {
        alert("-√2/2");
    } else if (a == 150) {
        alert("-√3/2");
    } else if (a == 180) {
        alert("-1");
    } else if (a == 210) {
        alert("-√3/2");
    } else if (a == 225) {
        alert("-√2/2");
    } else if (a == 240) {
        alert("-1/2");
    } else if (a == 270) {
        alert("0");
    } else if (a == 300) {
        alert("1/2");
    } else if (a == 315) {
        alert("√2/2");
    } else if (a == 330) {
        alert("√3/2");
    } else if (a == 360) {
        alert("1");
    } else {
        let c = Math.cos(a)
        alert(c);
    }
}
tangens.onclick = function() {
    let a = prompt("Enter a number (in degrees)");
    if (a == 0) {
        alert("0");
    } else if (a == 30) {
        alert("1/√3");
    } else if (a == 45) {
        alert("1");
    } else if (a == 60) {
        alert("√3");
    } else if (a == 90) {
        alert("-");
    } else if (a == 120) {
        alert("-√3");
    } else if (a == 135) {
        alert("-1");
    } else if (a == 150) {
        alert("-1/√3");
    } else if (a == 180) {
        alert("0");
    } else if (a == 210) {
        alert("1/√3");
    } else if (a == 225) {
        alert("1");
    } else if (a == 240) {
        alert("√3");
    } else if (a == 270) {
        alert("-");
    } else if (a == 300) {
        alert("-√3");
    } else if (a == 315) {
        alert("-1");
    } else if (a == 330) {
        alert("-1/√3");
    } else if (a == 360) {
        alert("0");
    } else {
        let c = Math.tan(a);
        alert(c);
    }
}
cotangens.onclick = function() {
    let a = prompt("Enter a number (in degrees)");
    if (a == 0) {
        alert("-");
    } else if (a == 30) {
        alert("√3");
    } else if (a == 45) {
        alert("1");
    } else if (a == 60) {
        alert("1/√3");
    } else if (a == 90) {
        alert("0");
    } else if (a == 120) {
        alert("-1/√3");
    } else if (a == 135) {
        alert("-1");
    } else if (a == 150) {
        alert("-√3");
    } else if (a == 180) {
        alert("-");
    } else if (a == 210) {
        alert("√3");
    } else if (a == 225) {
        alert("1");
    } else if (a == 240) {
        alert("1/√3");
    } else if (a == 270) {
        alert("0");
    } else if (a == 300) {
        alert("-1/√3");
    } else if (a == 315) {
        alert("-1");
    } else if (a == 330) {
        alert("-√3");
    } else if (a == 360) {
        alert("-");
    } else {
        let c = Math.sin(a)/Math.cos(a);
        alert(c);
    }
}