import { CreateArticleDto } from './dto/create-article.dto';

export type Article = {
  id?: string;
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  author: string;
  text: string;
  image?: string;
};

export type SimpleArticle = Pick<Article, 'id' | 'title' | 'image'>;

export const responseStatus = {
  OK: 'OK',
  ERROR: 'ERROR',
} as const;

export type ResponseStatusType =
  (typeof responseStatus)[keyof typeof responseStatus];

export const purgeArticlesData: CreateArticleDto[] = [
  {
    title: 'The Future of Technology',
    subtitle: 'Exploring the Next Big Innovations',
    summary: 'A deep dive into the technologies that will shape our future.',
    date: '2024-12-09',
    author: 'John Doe',
    text: 'In this article, we explore the cutting-edge technologies that are poised to transform our world. Artificial Intelligence (AI) is already having a profound effect on industries like healthcare, finance, and education, automating tasks, enhancing decision-making, and enabling innovations such as personalized medicine and smart cities. Quantum computing, which leverages the principles of quantum mechanics, has the potential to solve complex problems that are currently beyond the reach of classical computers, such as optimizing supply chains or simulating molecular structures for drug discovery. Blockchain technology, initially popularized by cryptocurrencies like Bitcoin, is now being explored for its ability to secure data and transactions in various industries, from supply chains to healthcare, ensuring transparency and reducing fraud. These technologies not only promise to bring about unprecedented advancements but also raise important ethical, social, and economic questions that we must address as they become more integrated into our lives. This article examines the current state of these technologies, their future potential, and the challenges they present to society.',
    image:
      'https://imgcdn.agendadigitale.eu/wp-content/uploads/2023/06/19120050/shutterstock_1483438988.jpg',
    is_deleted: false,
  },
  {
    title: 'The Importance of Mental Health',
    subtitle: 'Why We Need to Talk About It',
    summary:
      'Understanding mental health and how it affects individuals and communities.',
    date: '2024-12-09',
    author: 'Jane Smith',
    text: "Mental health has always been a crucial topic, yet it's often overlooked. This article emphasizes the importance of raising awareness and reducing the stigma surrounding mental health. Mental health issues can affect anyone, regardless of age, gender, or background. From anxiety and depression to more serious conditions like schizophrenia, mental health disorders are common and can have a significant impact on one's quality of life. Sadly, societal stigma often prevents people from seeking the help they need, which can exacerbate their struggles. It's essential to have open conversations about mental health to build a more understanding and supportive community. By prioritizing mental health, we can help reduce the burden of these conditions on individuals, families, and society as a whole. It's time to break the silence, educate ourselves, and support one another in managing mental health with the same seriousness and compassion as physical health.",
    image: 'https://aihms.in/blog/wp-content/uploads/2020/08/mental1.jpg',
    is_deleted: false,
  },
  {
    title: 'Climate Change and Its Effects',
    subtitle: 'What We Can Do to Help',
    summary:
      'An overview of climate change and the role we play in combating it.',
    date: '2024-12-09',
    author: 'Emily White',
    text: 'Climate change is one of the most pressing issues of our time. This article provides practical solutions for individuals and businesses to reduce their carbon footprint and contribute to a healthier planet. The evidence of climate change is clear: rising temperatures, extreme weather events, and the loss of biodiversity are all signs of a planet in distress. However, the good news is that there is still time to make a difference. Reducing our carbon footprint by making sustainable choices in our daily lives, such as using renewable energy, driving less, and consuming less plastic, can have a significant positive impact. Governments, businesses, and individuals must work together to implement larger-scale solutions such as transitioning to renewable energy, adopting eco-friendly policies, and promoting green technologies. Furthermore, advocating for stronger climate policies and taking part in community efforts can help push for systemic changes that can slow down global warming. Every effort counts, and by acting now, we can protect the planet for future generations.',
    image:
      'https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/2022-03/PHOTO-Climate-Collage-Diagonal-Design-NOAA-Communications-NO-NOAA-Logo.jpg',
    is_deleted: false,
  },
  {
    title: 'The Power of Social Media',
    subtitle: 'How It Transformed Communication',
    summary:
      'A look at how social media has revolutionized the way we connect and share information.',
    date: '2024-12-09',
    author: 'Michael Green',
    text: 'Social media has changed the world in countless ways. From networking to activism, this article explores the positive and negative impacts of these platforms. The rise of social media platforms like Facebook, Twitter, Instagram, and TikTok has revolutionized the way we communicate, share information, and connect with others. On the positive side, social media has made it easier to stay in touch with friends and family, expand professional networks, and spread awareness about important causes. Activism has taken on new forms through viral campaigns, and social media has given a voice to those who may have previously been unheard. However, there are also negative impacts, such as misinformation, online bullying, and the pressure to present a curated, idealized version of life. Additionally, the addictive nature of social media can lead to mental health issues like anxiety and depression. Despite these challenges, social media has reshaped communication in ways that we cannot ignore. It is essential to use these platforms responsibly, understanding both their power and their limitations.',
    is_deleted: false,
  },
  {
    title: 'The Rise of Remote Work',
    subtitle: 'Is the Traditional Office Dead?',
    summary: 'How remote work is changing the landscape of the workplace.',
    date: '2024-12-09',
    author: 'Sarah Brown',
    text: 'Remote work has become a dominant trend in recent years. In this article, we discuss the pros and cons of remote work and how it is reshaping industries and office cultures around the globe. The COVID-19 pandemic accelerated the shift toward remote work, forcing businesses to adapt quickly to new technology and working models. As a result, many companies have realized that remote work offers numerous benefits, such as increased flexibility, better work-life balance, and the ability to tap into a global talent pool. For employees, remote work can reduce commuting time, allowing for more productivity and personal time. However, remote work is not without its challenges. For some, it can lead to feelings of isolation and a lack of connection with coworkers. Additionally, the blurred lines between work and home life can create difficulties in maintaining boundaries. As companies continue to embrace remote work, finding a balance between flexibility and structure will be key. In the future, hybrid work models that combine remote and in-office work might become the norm, offering the best of both worlds.',
    is_deleted: false,
  },
];
