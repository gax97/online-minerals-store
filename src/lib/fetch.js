const fetchService = config => {
  return fetch(config).then(res => res.json());
};

export default fetchService;
