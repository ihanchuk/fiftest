export const dateToFormat = (timeString, sep) => {
    const tempDate = new Date(timeString);
    let dd = tempDate.getDate();
    let mm = tempDate.getMonth() + 1; //January is 0!
    
    const yyyy = tempDate.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    } 
    const res = `${dd}${sep}${mm}${sep}${yyyy}`;
    return res;
    
}