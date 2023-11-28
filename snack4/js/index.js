
const a = ["a","b","c"];
const b = [1, 2, 3];

let c = [];

if(a.length != b.length) {

} else {
    b.forEach((Element, index) => {
        c.push(a[index], Element);
    })
    console.log(c);
}


