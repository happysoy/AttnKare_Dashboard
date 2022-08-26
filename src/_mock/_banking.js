import _mock from './_mock';

// ----------------------------------------------------------------------

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
