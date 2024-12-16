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
  {
    title: 'The Future of Space Exploration',
    subtitle: 'Revolutionizing our Understanding of the Universe',
    summary:
      'Exploring the new frontiers of space travel and the technologies driving human missions beyond Earth.',
    date: '2024-12-11',
    author: 'Jane Smith',
    text: 'As humanity looks to venture further into space, the technologies driving exploration are advancing rapidly. From reusable rockets to autonomous space stations, companies like SpaceX and Blue Origin are pushing the boundaries of what was once thought impossible. The next steps in space exploration include missions to Mars, mining asteroids for resources, and building permanent settlements on the Moon. With the aid of AI and robotics, these missions are becoming more feasible, and the benefits of space exploration may soon extend to solving critical issues here on Earth, such as energy sustainability and resource scarcity.',
    is_deleted: false,
  },
  {
    title: 'Advancements in Renewable Energy',
    subtitle: 'Paving the Way for a Sustainable Future',
    summary:
      'A look at the latest innovations in renewable energy technologies and their impact on the planet.',
    date: '2024-12-05',
    author: 'Alice Green',
    text: "Renewable energy technologies are rapidly evolving, offering hope for a sustainable future. Solar and wind power are becoming more efficient, while new technologies like wave energy and geothermal power are being explored. Energy storage solutions, such as advanced batteries, are making it possible to store renewable energy for use when the sun isn't shining or the wind isn't blowing. These advancements are reducing reliance on fossil fuels and helping to mitigate climate change, offering a cleaner, more sustainable alternative to traditional energy sources.",
    is_deleted: false,
  },
  {
    title: 'The Rise of Electric Vehicles',
    subtitle: 'Transforming the Automotive Industry',
    summary:
      'How electric vehicles are reshaping the future of transportation and reducing our carbon footprint.',
    date: '2024-12-03',
    author: 'Michael Brown',
    text: 'Electric vehicles (EVs) are no longer just a niche market. With advancements in battery technology and growing concerns over climate change, EVs are becoming a mainstream choice for consumers worldwide. Companies like Tesla, Rivian, and traditional automakers are rolling out more affordable and efficient electric models. With government incentives and the expansion of charging infrastructure, EV adoption is accelerating, promising a future with cleaner, quieter, and more sustainable transportation.',
    is_deleted: false,
  },
  {
    title: 'AI in Healthcare: Transforming Medicine',
    subtitle:
      'The Role of Artificial Intelligence in Revolutionizing Healthcare',
    summary:
      'Exploring how AI is enhancing diagnostics, treatment, and patient care in the medical field.',
    date: '2024-12-07',
    author: 'David Lee',
    text: 'Artificial intelligence is making significant strides in the healthcare industry. From AI-powered diagnostic tools that can detect diseases faster and more accurately to personalized treatment plans powered by data analytics, the potential for AI in healthcare is immense. AI is also being used to optimize hospital operations, reducing wait times and improving patient outcomes. While challenges remain, such as data privacy concerns and the need for regulatory frameworks, the promise of AI to revolutionize healthcare is undeniable.',
    is_deleted: false,
  },
  {
    title: 'The Future of Work',
    subtitle: 'Adapting to the Changing Landscape of Employment',
    summary:
      'How automation and digital technologies are reshaping the workplace and workforce.',
    date: '2024-12-10',
    author: 'Sarah Johnson',
    text: 'The future of work is being shaped by automation, artificial intelligence, and digital tools. As businesses adopt more advanced technologies, the nature of work is changing. Many traditional jobs are being replaced by automation, while new jobs that require technical skills are emerging. Remote work, powered by cloud computing and collaboration tools, is becoming more common, offering workers more flexibility. The challenge for society will be to ensure that workers are equipped with the skills needed for this new digital economy and that the benefits of automation are distributed fairly.',
    is_deleted: false,
  },
  {
    title: 'The Rise of Smart Cities',
    subtitle: 'How Technology is Shaping Urban Life',
    summary:
      'A comprehensive look at how smart technologies are transforming urban environments and improving the quality of life.',
    date: '2024-12-08',
    author: 'Liam Turner',
    text: 'Smart cities are becoming a reality as technological advancements in IoT, AI, and data analytics are being integrated into urban infrastructure. These cities use connected sensors and devices to monitor everything from traffic flow to energy consumption, making cities more efficient, sustainable, and livable. Smart lighting, waste management, and predictive maintenance are just a few examples of how technology is enhancing urban life. However, challenges such as data privacy, security, and accessibility must be addressed as these technologies become more widespread.',
    is_deleted: false,
  },
  {
    title: 'The Ethics of Artificial Intelligence',
    subtitle: 'Navigating the Moral Implications of AI Technologies',
    summary:
      'An exploration of the ethical challenges posed by AI and how society can responsibly integrate these technologies.',
    date: '2024-12-06',
    author: 'Rebecca Adams',
    text: 'As artificial intelligence becomes increasingly integrated into our daily lives, questions around its ethical implications are growing. From autonomous vehicles to AI-driven decision-making in healthcare and criminal justice, the potential for AI to impact society in profound ways raises issues such as bias, accountability, and privacy. This article examines the ethical concerns surrounding AI, the responsibility of developers, and the role of governments in regulating its use to ensure that AI serves humanity in a fair and just manner.',
    is_deleted: false,
  },
  {
    title: 'Blockchain Beyond Cryptocurrency',
    subtitle:
      'Exploring the Potential of Blockchain Technology in Various Sectors',
    summary:
      'Blockchain is not just for Bitcoin. Discover how this technology is revolutionizing industries beyond finance.',
    date: '2024-12-04',
    author: 'George Mitchell',
    text: 'Blockchain technology, once synonymous with cryptocurrencies like Bitcoin, is now being explored for its potential in a variety of industries. Its ability to create secure, transparent, and immutable records makes it ideal for applications in supply chain management, healthcare, and even voting systems. By decentralizing data and reducing the risk of fraud, blockchain is poised to transform sectors such as finance, logistics, and healthcare. This article delves into the various uses of blockchain and how it is reshaping industries around the world.',
    is_deleted: false,
  },
  {
    title: '5G and the Future of Connectivity',
    subtitle: 'How 5G Networks Are Transforming Communication and Business',
    summary:
      'A look at how the rollout of 5G networks will impact the way we connect, work, and live.',
    date: '2024-12-12',
    author: 'Sophia Martinez',
    text: 'The advent of 5G networks promises to revolutionize connectivity, offering faster speeds, lower latency, and the ability to connect more devices simultaneously. This will enable new technologies such as autonomous vehicles, smart cities, and the Internet of Things (IoT) to function more efficiently. In business, 5G will enable industries to innovate faster, enhance remote collaboration, and improve customer experiences. However, challenges in infrastructure, security, and accessibility must be addressed to fully realize the potential of 5G technology.',
    is_deleted: false,
  },
  {
    title: 'The Impact of Virtual Reality on Education',
    subtitle: 'Revolutionizing Learning Through Immersive Experiences',
    summary:
      'How virtual reality (VR) is reshaping education by providing immersive and interactive learning environments.',
    date: '2024-12-13',
    author: 'Ethan Davis',
    text: 'Virtual reality is rapidly changing the educational landscape, offering students immersive experiences that enhance learning. VR allows students to explore historical events, conduct scientific experiments, and even travel to distant parts of the world—all from the classroom. This technology also enables more personalized learning experiences, allowing students to learn at their own pace and in ways that cater to their individual learning styles. While there are challenges in terms of cost and accessibility, the potential for VR to transform education is enormous.',
    is_deleted: false,
  },
];
