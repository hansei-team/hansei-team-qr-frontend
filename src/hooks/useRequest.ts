import { useState } from 'react';

export const useRequest = <A extends unknown, T extends unknown>(
  callback: (args: A) => Promise<T> | T,
  options?: {
    onSuccess?: (data: NonNullable<T>) => void;
    onError?: (error: any) => void;
  }
) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<T>();
  const [errorData, setErrorData] = useState<any>();

  const mutate = async (args: A) => {
    setIsLoading(true);

    try {
      const response = await callback(args);
      setIsSuccess(true);
      setData(response);
      if (options?.onSuccess) options.onSuccess(response!);
    } catch (error) {
      setIsError(true);
      setErrorData(error);
      if (options?.onError) options.onError(error);
    }

    setIsLoading(false);
    return data;
  };

  return { isError, isLoading, isSuccess, data, error: errorData, mutate };
};
