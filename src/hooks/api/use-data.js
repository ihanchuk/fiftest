import { useEffect, useState } from "react";
import { apiAdressProcessor, apiInitProcessor } from "../../utils/api";

export const useData = (entityType, id, idNickname) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const api = apiAdressProcessor(entityType);
    const fetchInit = apiInitProcessor({ id }, idNickname);

    fetch(api, fetchInit)
      .then(res => res.json())
      .then(json => {
        setLoading(false);
        json.data ? setResponse(json.data) : setResponse([]);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [entityType, id, idNickname]);
  return [response, loading, error];
};
