export const apiInitProcessor = (meta, idNickName) => {
    const base = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
    }
    const body = idNickName ? {[idNickName]: meta.id} : meta
    const result = {
        ...base,
        body: JSON.stringify(body)
    }
    return result
}