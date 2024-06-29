const dateTimeFormatter = (dateTime, param) => {
    const date = new Date(dateTime);

    if(param === "date") return getDate(date);

    if(param === "time")return getTime(date);

    return `${getDate(date)} - ${getTime(date)}`
    
}

const getDate = dateTime => {
    const year = dateTime.getFullYear();
    const day = dateTime.getDate();
    let month = dateTime.getMonth();
    switch (month) {
        case 0:
            month = "January"
            break;
        case 1:
            month = "February"
            break;
        case 2:
            month = "March"
            break;
        case 3:
            month = "April"
            break;
        case 4:
            month = "May"
            break;
        case 5:
            month = "June"
            break;
        case 6:
            month = "July"
            break;
        case 7:
            month = "August"
            break;
        case 8:
            month = "September"
            break;
        case 9:
            month = "October"
            break;
        case 10:
            month = "November"
        case 11:
            month = "December"
            break;
        default:
            throw new Error("Invalid Month value")
    };

    return `${day} ${month} ${year}`;
};

const getTime = dateTime => {
    const hour = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    return `${hour}:${minutes}`;
};

const handleErrors = (errsArray, field) => {
    const errors = errsArray.filter(e => e.path === field);
    if(errors.length > 0){
        return (<span className="text-red-500 italic">{errors[0].msg}</span>)
    }
}

export{
    dateTimeFormatter,
    handleErrors
};