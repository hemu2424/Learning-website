export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  thumbnail: string;
  enrollmentCount: string;
  date: string;
  status?: 'LAUNCHING SOON' | 'ENROLL';
  tag?: string;
}

export const allCourses: Course[] = [
  {
    id: '1',
    title: 'Python ATM Simulatio...',
    thumbnail: 'https://lucdn.letsupgrade.net/assets/atm_stimulation_696898fe12b53_bad14dff5a.webp',
    enrollmentCount: '24k Enrolled',
    date: '10 Feb 26',
  },
  {
    id: '2',
    title: 'SQL HAVING Clause E...',
    thumbnail: 'https://lucdn.letsupgrade.net/assets/having_693fefaebcfb6_278f1a5a04.webp',
    enrollmentCount: '24k Enrolled',
    date: '16 Jan 26',
  },
  {
    id: '3',
    title: 'Cloud and DevOps',
    subtitle: 'ITM SKILLS U...',
    thumbnail: 'https://lucdn.letsupgrade.net/assets/Untitled_design_19_d19658916f.png',
    enrollmentCount: '24k Enrolled',
    date: '',
    status: 'LAUNCHING SOON',
    tag: 'ITM SKILLS U...',
  },
  {
    id: '4',
    title: 'Guess the Number Ga...',
    thumbnail: 'https://lucdn.letsupgrade.net/assets/number_game_696b856c48488_157627a957.webp',
    enrollmentCount: '29.7k Enrolled',
    date: '5 Feb 26',
  },
];