import { useState, useCallback } from "react";
import { apiAdressProcessor, apiInitProcessor } from "../../utils/api";

export const UseSetData = () => {
  const [isSending, setIsSending] = useState(false);
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const sendRequest = useCallback(async (url, data) => {
    if (isSending) return;

    const api = apiAdressProcessor(url);
    const fetchInit = apiInitProcessor(null, null, data);

    setIsSending();
    setResponse();
    setError();

    fetch(api, fetchInit)
      .then(res => res.json())
      .then(json => {
        setIsSending(false);
        console.log('Response catched::', json)
        json.data ? setResponse(json.data) : setResponse([]);
      })
      .catch(err => {
        setError(`API Error :: ${err}`);
        setIsSending(false);
        console.log('Error catched::', err)
      });

  }, [isSending]); 

  return [isSending, error, response, sendRequest];
};
