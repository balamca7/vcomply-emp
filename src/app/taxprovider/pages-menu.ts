import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/taxprov/dashboard',
     home: true,
  },
/*{
    title: 'Case Status',
    icon: 'ion-connection-bars',

        link: '/taxprov/case-status',

  },*/
   {
    title: 'Tax Filing',
    icon: 'ion-cash',
       children: [
                  {
                    title: 'General Infomation',
                    link: '/taxprov/generalInfo',
                  },
                  
                   {
                    title: 'Client Area',
                    link: '/taxprov/client-area',
                  },
                   {
                    title: 'Request on Client',
                    link: '/taxprov/privileges',
                  },
                  /*{
                    title: 'charts',
                    link: '/taxprov/charts/echarts',
                  },*/
              ],

  },
  {

    title: 'Message',
    icon: 'ion-email',

        link: '/taxprov/message',

  },
  {
    title: 'Settings',
    icon: 'ion-android-settings',
    children: [
      {
        title: 'Profile',
        link: '/taxprov/profile',

      },
      {
        title: 'Change Password',
        link: '/taxprov/change-password',
      },
    ],
  },
];
