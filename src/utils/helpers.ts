interface IResponse<T> {
  data: T | null;
  status: number;
}

const responseConverter = <T>(status: number, data: any): IResponse<T> => {
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

  const data = response.json();

  return responseConverter(response.status, data);
};

export const getRequest = async <T>(url: string, token?: string): Promise<IResponse<T>> => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  const data = response.json();

  return responseConverter(response.status, data);
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

  const data = response.json();

  return responseConverter(response.status, data);
};
