import axios from 'axios';
import {
  URL_INITIAL_DATA,
  URL_BALANCE,
  URL_DELETE_BALANCE_ID,
  URL_SAVE_BALANCE
} from '../constant';

export async function initialData(request) {
  try {
    const configuration = { method: { 'Content-Type': 'application/json' } };
    const response = await axios.post(
      `${URL_INITIAL_DATA}`,
      {},
      configuration
    );
    
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: error.response };
  }
}

export async function getBalance(request) {
  try {
    const { token } = request;
    const configuration = { method: { 'Content-Type': 'application/json'} };
    const response = await axios.get(
      `${URL_BALANCE}/${token}`,
      {},
      configuration
    );

    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: error.response };
  }
}

export async function deleteBalanceById(request) {
  try {
    const { token, id } = request;
    const configuration = { method: { 'Content-Type': 'application/json' } };
    const response = await axios.delete(
      `${URL_DELETE_BALANCE_ID}/${token}/${id}`,
      {},
      configuration
    );

    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: error.response };
  }
}

export async function saveBalance(request) {
  try {
    const { token, item } = request;
    const configuration = { method: { 'Content-Type': 'application/json' } };
    const response = await axios.post(
      `${URL_SAVE_BALANCE}/${token}`,
      {
        item
      },
      configuration
    );
    
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: error.response };
  }
}