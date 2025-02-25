
const formatName = (name: string): string => {
    const userNameArray = name.toLowerCase().split(" ");
    const newUserName = []
    userNameArray.forEach(value => newUserName.push(value.replace(value[0], value[0].toLocaleUpperCase())));
    return newUserName.join(" ");
}

export { formatName };