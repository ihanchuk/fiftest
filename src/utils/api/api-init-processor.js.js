export const apiInitProcessor = (meta, idNickName, data) => {
  let body;
  let result;
  const base = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (!data) {
    body = idNickName ? { [idNickName]: meta.id } : meta;
  } else {
    body = data;
  }
  result = { ...base, body: JSON.stringify(body) };
  return result;
};
