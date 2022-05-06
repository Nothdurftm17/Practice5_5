const isValid = (s) => {
    var openArr = [];
    var closedArr = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
            openArr.push(s[i])
        }
        else {
            closedArr.push(s[i])
        }
    }
    console.log("Open Arr: ", openArr)
    console.log("Closed Arr: ", closedArr)
    console.log("=====================================")

    if (openArr.length !== closedArr.length) {
        console.log("They aren't even the same length!")
        return false
    }
    console.log("There are the same amount of opening and closing brackets")
    for (var j = 0; j < openArr.length; j++) {
        console.log(openArr[j])
        for (var k = closedArr.length - 1; k >= 0; k--) {
            console.log(closedArr[k])
            if (openArr[j] === "[" && closedArr[k] === "]" || openArr[j] === "(" && closedArr[k] === ")" || openArr[j] === "{" && closedArr[k] === "}") {
                console.log("built the same")
                j++
                console.log(openArr[j])
            }
            else {
                console.log("they are built different!")
                return false
            }
        }
    }
    return true
}
console.log(isValid(["[", "{", "(", ")", "}", "]",]))

