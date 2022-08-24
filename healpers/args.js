
export const getAtgs = (args) => {
    const res = {};
    const [executer, file, ...rest] = args;
    rest.forEach((i, index, array) => {
        if (i.charAt(0) == '-') {
            if (index == array.length - 1) {
                res[i.substring(1)] = true;
            } else if (array[index + 1].charAt(0) !== '-') {
                res[i.substring(1)] = array[index + 1]
            } else {
                res[i.substring(1)] = true; 
            }
        }
    })
    return res
}