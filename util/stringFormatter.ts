
const formatName = (name: string): string => {
    const userNameArray = name.toLowerCase().split(" ");
    const newUserName = []
    userNameArray.forEach(value => newUserName.push(value.replace(value[0], value[0].toLocaleUpperCase())));
    return newUserName.join(" ");
}

const formatDateTime = (date: Date): { date: string, time: string } => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    return {
        date: `${year}-${month}-${day}`,
        time: `${hours}:${minutes}`
    };
}

export { formatName, formatDateTime };