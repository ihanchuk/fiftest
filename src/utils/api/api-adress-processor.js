export const apiAdressProcessor = (entityType) => {
    const base = 'https://alphafx-code-test-api.herokuapp.com/api/'
    const resultUrl = `${base}${entityType}`;
    return resultUrl;
}