 module.exports =
function check(str, bracketsConfig) {
    console.log(str)
    let config = '';
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (!str.includes(bracketsConfig[i][0])) {
            bracketsConfig.splice(i, 1);
            i -= 1;
            continue;
        }
        config += bracketsConfig[i].join('');
    }
    console.log(config);
    let result = str;
    let temp = '';
    // function deleteBrackets()
    for (let i = 0; i < result.length; i++) {
        if (config.indexOf(result[i]) % 2 === 0) {
            let pos = config.indexOf(result[i]);
            // console.log(config[config.indexOf(result[i])]);
            // console.log(config[config.indexOf(result[i]) + 1]);
            if (temp.length !== 0 && (temp[temp.length - 1] === result[i]) && config[config.indexOf(result[i])] === config[config.indexOf(result[i]) + 1]) {
                temp = temp.slice(0, -1);
                result = result.slice(0, i - 1) + result.slice(i + 1);
                i -= 2;
            } else {
                temp += result[i];
            }
        } else {
            if (i > 0 && config.indexOf(temp[temp.length - 1]) === config.indexOf(result[i]) - 1) {
                temp = temp.slice(0, -1);
                result = result.slice(0, i - 1) + result.slice(i + 1);
                i -= 2;
            } else
                return false
        }
    }
    return result.length === 0 ? true : false;
}

// check('((()))()', [
//     ['(', ')']
// ]);

// check('||', [
//     ['|', '|']
// ]);

// check('111115611111111222288888822225577877778775555666677777777776622222', [
//     ['1', '2'],
//     ['3', '4'],
//     ['5', '6'],
//     ['7', '7'],
//     ['8', '8']
// ]);
