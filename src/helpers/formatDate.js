import { format } from 'date-fns';

const formatDate = date => {
  return format(new Date(date), "P' 'p");
};

export default formatDate;
