const baseUrl = "http://localhost:9005";

const getResponseJson = async (response: Response) => {
  return await response.json();
};

export const HttpRequest = {
  get: async (url: string, options?: RequestInit) => {
    const response = await fetch(`${baseUrl}/${url}`, options);
    return await getResponseJson(response);
  },

  post: async (
    url: string,
    data: { [key: string | number]: any } | any[],
    options?: RequestInit
  ) => {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
    return await getResponseJson(response);
  },

  put: async (
    url: string,
    data: { [key: string | number]: any } | any[],
    options?: RequestInit
  ) => {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
    return await getResponseJson(response);
  },

  delete: async (url: string, options?: RequestInit) => {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: "DELETE",
      ...options,
    });
    return await getResponseJson(response);
  },
};
