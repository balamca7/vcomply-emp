import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/hr/dashboard',
     home: true,
  },
{
    title: 'Case Status',
    icon: 'ion-connection-bars',

        link: '/hr/case-status',

  },
  {
    title: 'Questionairre',
    icon: 'ion-ios-list-outline',
       link: '/hr/questionnaire-checklist',

  },
   {
    title: 'PAF Documents',
    icon: 'nb-compose',
    link: '/hr/paf-doc',

  },
  {
    title: 'LCA Folder',
    icon: 'ion-folder',
    link: '/hr/lcafold',
    
  },
 {
        title: 'Received Documents',
        icon: 'nb-tables',
        link: '/hr/receive-doc',
      },
  {
    title: 'Employee / HR Manager',
    icon: 'ion-person-stalker',
     link: '/hr/emp-hr',
  },
  
  

  {
    title: 'Arrival Departure Record (I 94)',
    icon: 'ion-ios-paper-outline',
    link: '/hr/i94',
    
  },

  {
    title: 'Reports',
    icon: 'nb-bar-chart',
    link: '/hr/reports',
  },
   {
    title: 'Message',
    icon: 'ion-email',

        link: '/hr/message',

  },
  {
    title: 'Settings',
    icon: 'ion-android-settings',
    children: [
      {
        title: 'Profile',
        link: '/hr/auth/profile',

      },
      {
        title: 'Change Password',
        link: '/hr/auth/change-password',
      },
    ],
  },
];
