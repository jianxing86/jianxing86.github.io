export const SITE_CONFIG = {
  author: { en: 'Jianxing Chen', zh: '陈剑星' },
  position: { en: 'Postdoctoral Researcher', zh: '博士后研究员' },
  affiliation: { en: 'Department of Astronomy, Beijing Normal University', zh: '北京师范大学天文系' },
  selfPattern: 'Placeholder, A.',
  social: {
    github: 'https://github.com/jianxing-chen',
    orcid: 'https://orcid.org/0000-0002-8004-549X',
    ads: '#',
    email: 'mailto:jxchen_cn@outlook.com',
  },
} as const;

export type Lang = 'en' | 'zh';
