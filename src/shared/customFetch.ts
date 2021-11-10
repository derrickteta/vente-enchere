export const customFetch = {
  get: (url: string) => {
    return fetch(url).then((res) => res.json());
  },

  post: (url: string, data: unknown) => {
    return fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },
};
