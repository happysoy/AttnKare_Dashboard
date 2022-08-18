import _mock from './_mock';

// ----------------------------------------------------------------------

export const _bankingContacts = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  email: _mock.email(index),
  avatar: _mock.image.avatar(index),
}));

export const _bankingCreditCard = [
  {
    id: _mock.id(2),
    balance: 23432.03,
    cardType: 'mastercard',
    cardHolder: _mock.name.fullName(2),
    cardNumber: '**** **** **** 3640',
    cardValid: '11/22',
  },
  {
    id: _mock.id(3),
    balance: 18000.23,
    cardType: 'visa',
    cardHolder: _mock.name.fullName(3),
    cardNumber: '**** **** **** 8864',
    cardValid: '11/25',
  },
  {
    id: _mock.id(4),
    balance: 2000.89,
    cardType: 'mastercard',
    cardHolder: _mock.name.fullName(4),
    cardNumber: '**** **** **** 7755',
    cardValid: '11/22',
  },
];

export const _bankingRecentTransitions = [
  {
    id: _mock.id(2),
    name: _mock.name.fullName(2),
    type: 'Expenses',
    message: 'Payment for',
    category: '자동차 구매',
    date: 1659956398369,
    amount: 12000,
  },
  {
    id: _mock.id(3),
    name: _mock.name.fullName(3),
    type: 'Income',
    message: 'Receive point from',
    category: '탭 게임 완료',
    date: 1648956398369,
    amount: 3300,
  },
  {
    id: _mock.id(7),
    name: _mock.name.fullName(7),
    type: 'Receive',
    message: 'Payment for',
    category: '포인트 충전',
    date: 1642956398369,
    amount: 10000,
  },
  {
    id: _mock.id(4),
    name: _mock.name.fullName(4),
    type: 'Income',
    message: 'Receive point from',
    category: '방정리 게임 완료',
    date: 1638956398369,
    amount: 500,
  },
  {
    id: _mock.id(5),
    name: _mock.name.fullName(4),
    type: 'Income',
    message: 'Receive point from',
    category: '레이싱 게임 완료',
    date: 1635956398369,
    amount: 1200,
  },
  {
    id: _mock.id(6),
    name: null,
    type: 'Income',
    message: 'Receive point from',
    category: '레이싱 게임 완료',
    date: 1628956398369,
    amount: 1100,
  },
];
