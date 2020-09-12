import { fromUnixTime, format } from 'date-fns';

export const formatDate = (unixTime: number): string => {
  return format(fromUnixTime(unixTime), 'dd.MM.yyyy');
}