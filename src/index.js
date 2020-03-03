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