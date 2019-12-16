export const toCurrency = (ammount) => {
    if(ammount) {
        return Number(ammount)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        return 'N/A'
    }
}