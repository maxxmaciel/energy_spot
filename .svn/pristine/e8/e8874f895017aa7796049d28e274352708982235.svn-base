import { AxiosError, AxiosResponse, Method } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { axiosGet, axiosPost } from '../Ajax';
import { loadOptions } from '@babel/core';

interface RequestParams {
  [key: string]: any;
}

export interface UseFetchDataResult<TData> {
  data: TData | undefined;
  loading: boolean;
  error: string | undefined;
}

const useFetchData = <TData>(
  url: string,
  method: Method = 'get',
  params?: RequestParams,
  shouldFetch: boolean = true
):UseFetchDataResult<TData> => {
  const [data, setData] = useState<TData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [invalidateKey, setInvalidateKey] = useState<number>(0);

  const prevShouldFetchRef = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    if (prevShouldFetchRef.current !== undefined && shouldFetch !== prevShouldFetchRef.current) {
      setInvalidateKey(prevKey => prevKey + 1);
    }
    prevShouldFetchRef.current = shouldFetch;
  }, [shouldFetch]);

  useEffect(() => {
    const fetchData = async () => {
      if (!shouldFetch) return;

      setLoading(true);
      try {
        const response: AxiosResponse<TData> =
          method === 'get'
            ? await axiosGet(url, params)
            : await axiosPost(url, params);

        setData(response.data);
        setError(undefined);
      } catch (error) {
        setError((error as AxiosError).message || 'Erro na requisição.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, JSON.stringify(params), invalidateKey, shouldFetch]);

  return { data, loading, error };
};

export default useFetchData;
