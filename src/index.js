 module.exports =
function check(str, bracketsConfig) {
    let defaultA = bracketsConfig.slice();
    let config = '';
    for (let i = 0; i < defaultA.length; i++) {
        if (!str.includes(defaultA[i][0])) {
            defaultA.splice(i, 1);
            i -= 1;
            continue;
        }
        config += defaultA[i].join('');
    }
    let result = str;
    let temp = '';
    for (let i = 0; i < result.length; i++) {
        if (config.indexOf(result[i]) % 2 === 0) {
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

// console.log(check('8888877878887777777888888887777777887887788788887887777777788888888887788888', [
//     ['1', '2'],
//     ['3', '4'],
//     ['5', '6'],
//     ['7', '7'],
//     ['8', '8']
// ]));

// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', [
//     ['1', '2'],
//     ['3', '4'],
//     ['5', '6'],
//     ['7', '7'],
//     ['8', '8']
// ]));
