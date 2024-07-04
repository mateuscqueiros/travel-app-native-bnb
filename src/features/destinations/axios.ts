import { axios } from '@/lib/axios';
import { DestinationType } from './destinations.types';

export function getDestinations() {
  return axios.get<DestinationType[]>('/destinations').then((res) => res.data);
}
