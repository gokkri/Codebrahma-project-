var target = 1;

var givenArray = [1, 2, 3, 4];

var count = 0

givenArray.forEach(element => {
    var first = element
    givenArray.forEach(second => {output = second-first;
        if (output == target){count ++};
    })
})

console.log(count);
