// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'information',
    items: [
      { title: 'Overview', path: 'app', icon: ICONS.dashboard },
      { title: '진단', path: 'prescription', icon: ICONS.ecommerce },
      { title: '치료', path: 'treatment', icon: ICONS.analytics },
      { title: '인지기능', path: 'cognitive', icon: ICONS.banking },
    ],
  },
  {
    subheader: 'games',
    items: [
      { title: '종합평가', path: 'total', icon: ICONS.dashboard },
      { title: '탭', path: 'tab', icon: ICONS.dashboard },
      { title: '비즈', path: 'biz', icon: ICONS.ecommerce },
      { title: '방정리', path: 'room', icon: ICONS.analytics },
      { title: '의미카드', path: 'card', icon: ICONS.banking },
      { title: '레이싱', path: 'racing', icon: ICONS.banking },
    ],
  },

  // {
  //   subheader: 'management',
  //   items: [
  //     // USER
  //     {
  //       title: 'user',
  //       path: 'dashboard/app',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'profile', path: 'dashboard/app' },
  //         { title: 'cards', path: 'dashboard/app' },
  //         { title: 'list', path: 'dashboard/app' },
  //       ],
  //     },
  //   ],
  // },
];

export default navConfig;
