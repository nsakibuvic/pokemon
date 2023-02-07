import { useState, useCallback } from "react";

export type RequestConfig = {
	url?: string;
	method?: string;
	headers?: Record<string, string>;
	body?: any;
};

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestConfig: RequestConfig) => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(requestConfig.url!, {
            method: requestConfig.method ? requestConfig.method : "GET",
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          });
      
          if (!response.ok) {
            throw new Error("Request failed!");
          }
      
          const data = await response.json();
          setIsLoading(false);
      
          return data;
        } catch (err: any) {
          setIsLoading(false);
          setError(err.message);
          throw err;
        }
      }, []);
	return {
		isLoading,
		error,
		sendRequest,
	};
};

export default useHttp;
