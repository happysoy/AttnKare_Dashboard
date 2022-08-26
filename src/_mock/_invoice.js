import { add } from 'date-fns';
import _mock from './_mock';
import { randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _invoices = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  createDate: add(new Date(), { days: index, hours: index }),
  dueDate: add(new Date(), { days: index + 15, hours: index }),
  status: randomInArray(['omissions', 'commissions', 'perseverations']),
  variables: randomInArray(['very elevated', 'elevated', 'high average', 'average', 'low']),
  invoiceFrom: {
    id: _mock.id(index),
    name: _mock.name.fullName(index),
  },
  invoiceTo: {
    id: _mock.id(index + 1),
    name: _mock.name.fullName(index + 1),
  },
  items: [...Array(3)].map((_, index) => ({
    id: _mock.id(index),
    quantity: 5,
    service: randomInArray(['1단계', '2단계', '3단계', '4단계', '5단계']),
  })),
}));
