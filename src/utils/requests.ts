interface IResponse<T> {
  data: T | null;
  status: number;
}

const responseConverter = <T>(status: number, data: T): IResponse<T> => {
  if (status < 200 || status > 206) {
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
  let data = null;
  if (response.headers.get('content-type')?.startsWith('text/html')) {
    data = await response.text();
  } else {
    data = await response.json();
  }

  return responseConverter<T>(response.status, data as T);
};

export const deleteRequest = async (url: string, id: string, token: string): Promise<IResponse<null>> => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return responseConverter<null>(response.status, null);
};
