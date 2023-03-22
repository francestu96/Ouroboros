import { ISubNav } from "components/elements/navigation/SubNav/SubNav";

const NAV_LINKS: ISubNav[] = [
  { label: 'Home', href: '/' },
  { label: 'Documentation', href: '/documentation' },
  { label: 'F.A.Q.', href: '/#faq' },
  {
    label: 'Community',
    href: '#',
    children: [
      {
        label: 'Telegram',
        subLabel: 'Follow us on Telegram',
        href: 'https://t.me/protonxpr',
        logo: '/telegram.png',
      },
      {
        label: 'Twitter',
        subLabel: 'Follow us on Twitter',
        href: 'https://twitter.com/protonxpr',
        logo: '/twitter.webp',
      },
    ],
  }
];

export default NAV_LINKS;
