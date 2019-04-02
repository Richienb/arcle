const assert = (func: any, exp: any) => {
    if (func === exp) console.log(`TEST SUCCESS: ${func} is ${exp}`)
    else console.error(`TEST ERROR: ${func} is not ${exp}`)
}
