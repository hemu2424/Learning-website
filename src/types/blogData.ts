export interface BlogItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  link: string;
  content: string[];
  sideImage?: string
}

export const blogPosts: BlogItem[] = [
  {
    id: '1',
    title: 'How to Learn AI Without Quitting You...',
    date: 'Dec 22, 2025',
    imageUrl: 'https://media.letsupgrade.net/blogs/generic/thumb_1766400824985.png',
    link: 'how-to-learn-ai-without-quitting-your-job',
    content: [
      "The future of work isn't coming. It's already here.",
      "Artificial Intelligence isn't just a trending buzzword - it's the new backbone of modern industry...",
      "So what happens if you're a working professional with a packed schedule?",
      "The future of work isn't coming. It's already here.",
      "Artificial Intelligence isn't just a trending buzzword - it's the new backbone of modern industry...",
      "So what happens if you're a working professional with a packed schedule?",
      "The future of work isn't coming. It's already here.",
      // Add the rest of your text here
    ],
    sideImage: 'https://media.letsupgrade.net/blogs/generic/thumb_1766471211065.png'
  },
  {
    id: '2',
    title: 'The Most Useful Skillset for 2026 and...',
    date: 'Dec 17, 2025',
    imageUrl: 'https://media.letsupgrade.net/blogs/generic/thumb_1765970152702.jpg',
    link: 'rise-of-ai-generalist-skills-2026',
    content:[],
    sideImage: 'https://media.letsupgrade.net/blogs/generic/thumb_1765970900495.jpg'
  },
  {
    id: '3',
    title: 'Why Non-Tech Working Professionals...',
    date: 'Dec 5, 2025',
    imageUrl: 'https://media.letsupgrade.net/blogs/generic/thumb_1764930304682.png',
    link: 'why-non-tech-working-professionals-should-learn-ai',
    content:[],
    sideImage: 'https://media.letsupgrade.net/blogs/generic/thumb_1764930313965.png'
  },
  {
    id: '4',
    title: "Letsupgrade's Executive AI Generalis...",
    date: 'Dec 4, 2025',
    imageUrl: 'https://media.letsupgrade.net/blogs/generic/thumb_1764915177276.png',
    link: 'executive-ai-generalist-program',
    content:[],
    sideImage: 'https://media.letsupgrade.net/blogs/generic/thumb_1764849073140.png'
  },
];