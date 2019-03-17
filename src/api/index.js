 import API from '../config/api';

export const GET = path => fetch(`${API.basePath}${path}?api_key=${API.key}`).then(resp => resp.json());
