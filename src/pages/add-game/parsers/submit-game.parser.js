export const gameDataParser =  (data, feldsToParse) => {
    const result= {};
    feldsToParse.forEach( (field) =>{
        result[field]=data[field].value
    });

    return result;
}