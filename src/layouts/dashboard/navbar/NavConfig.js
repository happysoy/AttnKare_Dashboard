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
      {
        title: 'Overview',
        path: 'app',
        icon: <Iconify icon={'akar-icons:person'} width={25} height={25} />,
      },
      {
        title: '종합평가',
        path: 'total',
        icon: <Iconify icon={'tabler:device-desktop-analytics'} width={25} height={25} />,
      },
      { title: '포인트', path: 'cognitive', icon: <Iconify icon={'iconoir:coin'} width={25} height={25} /> },
    ],
  },
  {
    subheader: 'games',
    items: [
      { title: '탭', path: 'tab', icon: <Iconify icon={'fluent:board-split-28-regular'} width={25} height={25} /> },
      { title: '비즈', path: 'biz', icon: <Iconify icon={'ph:butterfly'} width={25} height={25} /> },
      { title: '방정리', path: 'room', icon: <Iconify icon={'carbon:clean'} width={25} height={25} /> },
      { title: '의미카드', path: 'card', icon: <Iconify icon={'bx:book-content'} width={25} height={25} /> },
      { title: '레이싱', path: 'racing', icon: <Iconify icon={'ant-design:car-outlined'} width={25} height={25} /> },
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
