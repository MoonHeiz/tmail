interface IResponse<T> {
  data: T | null;
  status: number;
}

const responseConverter = <T>(status: number, data: T): IResponse<T> => {
  if (status < 200 && status > 206) {
    return {
      data: null,
      status,
    };
  }

  return { data, status };
};

export const postRequest = async <T>(url: string, body: any, token?: string): Promise<IResponse<T>> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(body),
  });

  const data = (await response.json()) as T;

  return responseConverter<T>(response.status, data);
};

export const getRequest = async <T>(url: string, token?: string): Promise<IResponse<T>> => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  const data = (await response.json()) as T;

  return responseConverter<T>(response.status, data);
};

export const deleteRequest = async <T>(url: string, id: string, token: string): Promise<IResponse<T>> => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  const data = (await response.json()) as T;

  return responseConverter<T>(response.status, data);
};

export const generateHash = (length: number = 5) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.apply(0, Array(length))
    .map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
    .join('');
};
