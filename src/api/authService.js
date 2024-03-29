import axios from 'axios';
import {
  URL_LOGIN
} from '../constant';

export async function singin(request) {
  try {
    const configuration = { method: { 'Content-Type': 'application/json' } };
    const response = await axios.post(
      `${URL_LOGIN}`,
      {
        username: request.username,
        password: request.password
      },
      configuration
    );
    
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: error.response };
  }
}