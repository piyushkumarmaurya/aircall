import { BASE_URL } from '../utils/constants';

export async function getCallRecords() {
  const response = await fetch(`${BASE_URL}/activities`);
  const data = await response.json();
  return data;
}
