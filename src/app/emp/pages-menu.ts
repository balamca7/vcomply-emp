import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 /* {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/emp/dashboard',
     home: true,
  },*/
{
    title: 'Case Status',
    icon: 'ion-connection-bars',

        link: '/emp/case-status',

  },
  {
    title: 'Immigration',
    icon: 'ion-briefcase',
       link: '/emp/questionnaire-checklist',
    children: [
      {
    title: 'Questionairre',
  //  icon: 'ion-ios-list-outline',
       link: '/emp/questionnaire-checklist',

  },
   {
    title: 'Certified LCA',
 //   icon: 'nb-compose',
    link: '/emp/certified-lca',

  },
  {
    title: 'Visas & Work Permit',
  //  icon: 'nb-keypad',

    children: [
      {
        title: 'Self',
        link: '/emp/workpermit/self',
      },
      {
        title: 'Family',
        link: '/emp/workpermit/family',
      },
      {
        title: 'Extention',
        link: '/emp/workpermit/extension',
      },

    ],
  },
 {
        title: 'Arrival Departure Record(I 94)',
     //   icon: 'ion-ios-paper-outline',
        link: '/emp/i94',
      },
  {
    title: 'Passport Details',
    //icon: 'ion-android-globe',
     link: '/emp/passport',
  },
  

    ],
  },
   {
    title: 'Tax Filing',
    icon: 'ion-cash',
       children: [
      {
        title: 'General Infomation',
        link: '/emp/taxfill/generalInfo',
      },
      {
        title: 'Tax Provider',
        link: '/emp/taxfill/tax-provider',
      },
      {
        title: 'Source List',
        link: '/emp/taxfill/source-list',
      },
      
      {
        title: 'Citizenship Details',
        link: '/emp/taxfill/citizenship',
      },
      {
        title: 'Income Details',
        link: '/emp/taxfill/income',
      },
      {
        title: 'Rental Income',
        link: '/emp/taxfill/rental-income',
      },
      {
        title: 'Business Income',
        link: '/emp/taxfill/business-income',
      },
      {
        title: 'Sale of Assets',
        link: '/emp/taxfill/sale-assets',
      },
      {
        title: 'Itemized Deductions',
        link: '/emp/taxfill/itemized-deductions',
      },
      {
        title: 'Moving & Dependent Care',
        link: '/emp/taxfill/moving-dep',
      },
      {
        title: 'FBAR',
        link: '/emp/taxfill/fbar',
      },
      {
        title: 'Form 8938',
        link: '/emp/taxfill/form-8938',
      },
       {
        title: 'Submit Form',
        link: '/emp/taxfill/add-comment',
      },
       {
        title: 'Taxprovider Area',
        link: '/emp/taxfill/taxprovider-area',
      },
    ],

  },
 /* {
    title: 'Questionairre',
    icon: 'ion-ios-list-outline',
       link: '/emp/questionnaire-checklist',

  },
   {
    title: 'Certified LCA',
    icon: 'nb-compose',
    link: '/emp/certified-lca',

  },
  {
    title: 'Visas & Work Permit',
    icon: 'nb-keypad',

    children: [
      {
        title: 'Self',
        link: '/emp/workpermit/self',
      },
      {
        title: 'Family',
        link: '/emp/workpermit/family',
      },
      {
        title: 'Extention',
        link: '/emp/workpermit/extension',
      },

    ],
  },
 {
        title: 'Arrival Departure Record (I 94)',
        icon: 'ion-ios-paper-outline',
        link: '/emp/i94',
      },
  {
    title: 'Passport Details',
    icon: 'ion-android-globe',
     link: '/emp/passport',
  },
  */
  
{
    title: 'Message',
    icon: 'ion-email',

        link: '/emp/message',

  },
  {
    title: 'Settings',
    icon: 'ion-android-settings',
    children: [
      {
        title: 'Profile',
        link: '/emp/auth/profile',

      },
      {
        title: 'Change Password',
        link: '/emp/change-password',
      },
    ],
  },
];
