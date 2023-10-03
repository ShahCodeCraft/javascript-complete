const myObject = {
    js : "Javascript",
    cpp : "C++",
    rc : "Ruby",
    Swift : "Swift by apple"
}

for (const key in myObject) {
    // console.log(key)
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js","rb","py","java"];
for(const key in programming){
    // console.log(key)              // It will return key
    console.log(programming[key])    // It will return value
}