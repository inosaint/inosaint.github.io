// Single source of truth for the resume: the /resume page renders it, and the
// llms.txt / llms-full.txt routes expose the same content to agents.

export const leadershipHighlights = [
  'Built and scaled design teams across Practo, Gojek, and Jiva (from leading the GoMerchants design function in a 100+ designer org like Gojek to building the product design team at Jiva.ag)',
  'Defined performance ladders for Product Design and UX Writing, and authored annual reviews, growth plans, and promotion recommendations.',
  'Established weekly design critiques, biweekly cross-functional product reviews, and documentation systems to improve alignment, cross-pollination and decision velocity.',
  'Led end-to-end hiring across multiple roles, including campus hiring (NID, IIT-G) and product management interview panels.',
  'Directed design systems work across web and mobile, including Jiva’s multi-platform Akar design system.'
];

export const selectedWritingAndSpeaking = [
  {
    title: 'An insider’s guide to a Job hunt',
    description: 'A short talk I give to design school students, from the perspective of a hiring manager, who are about to sit for their college placements.',
    url: 'https://pitch.com/v/an-insiders-guide-to-the-job-hunt-d34c3u'
  },
  {
    title: 'Near, far, wherever we are',
    description: 'Transcribed from a talk that Feby (researcher) and I (designer) gave during the pandemic about working in teams across international borders.',
    url: 'https://medium.com/gojekengineering/near-far-wherever-we-are-7cab5bf5e84a'
  },
  {
    title: 'Gamify DesignOps with human connection',
    description: 'I spoke to Kavan Antani, CEO of Indiefolio, as part of the podcast series \'DesignOops\' centring around design operations and management.',
    url: 'https://www.youtube.com/watch?si=OelOeq1IM6Mt-JBJ&v=c__raLe34ZU&feature=youtu.be'
  },
  {
    title: 'What is a product designer?',
    description: 'A reflection of what it means to be a product designer in the software industry.',
    url: 'https://kenneth.dsouza.im/writing/product-designer/'
  },
  {
    title: 'Squads as a growth engine for designers',
    description: 'Wrote about how we leveraged squads to help designers in the team grow.',
    url: 'https://medium.com/notes-from-the-fields/how-we-used-squads-to-help-our-designers-level-up-443fcbc52e2f'
  },
  {
    title: 'Archive of my newsletter for Design Managers',
    description: 'Between 2020-2023, I wrote 22 newsletters on the topics like building career ladders, hiring designers, building inclusive processes and much more.',
    url: 'https://buttondown.com/kenneth/archive/'
  }
];

export const workshops = [
  {
    title: 'Interactive DataViz Using AI Coding at VizChitra 2026',
    date: 'July 3, 2026',
    description: 'A sold-out workshop at VizChitra 2026 on building interactive data visualizations with AI coding tools.',
    url: 'https://vizchitra.com/2026/sessions/interactive-dataviz-using-ai-coding'
  },
  {
    title: 'Agentic Coding Workshop at CEC, Mangalore',
    date: 'April 29, 2026',
    description: 'Introduced Computer Science and Design students to Agentic Coding at Canara Engineering College. My second IRL workshop on the topic.',
    url: 'https://x.com/kenneth/status/2049520004182515961'
  },
  {
    title: 'AI Workshop at NID',
    date: 'March 5, 2026',
    description: 'AI workshop hosted at the National Institute of Design, India.',
    url: 'https://x.com/nid_india/status/2029866422168428610'
  }
];

export const elsewhereOnTheInternet = [
  {
    title: "On Designing team growth on the 'NewCampus blog'",
    year: '2023',
    description: 'Saloni and I were interviewed about how the NewCampus courses have impacted our working style at Jiva.',
    url: 'https://web.archive.org/web/20250523201511/https://www.newcampus.com/conversations/kenneth-saloni-on-designing-team-growth'
  },
  {
    title: "Creating a stand-out portfolio: Advice from design leaders on the 'Obvious blog'",
    year: '2021',
    description: 'A summary writeup of a twitter space a few of us did with Obvious regarding hiring designers.',
    url: 'https://web.archive.org/web/20220203064925/https://obvious.in/blog/creating-a-stand-out-design-portfolio'
  },
  {
    title: "Challenges with Transitioning to a Design Manager from an IC role on the 'Ownpath blog'",
    year: '2021',
    description: 'This is an excerpt from my fireside chat with Ownpath in 2021.',
    url: 'https://web.archive.org/web/20250213163033/https://www.ownpath.com/blog/kenneth-dsouza-on-challenges-with-transitioning-to-a-design-manager-from-an-ic-role'
  },
  {
    title: "What Designers Want on 'The Hard Copy'",
    year: '2019',
    description: 'Quoted: “I treat the interview process as a reflection of the org. Are they using a generic job description? Are they able to communicate well during the process?” — Kenneth D’Souza, Product Designer, Gojek',
    url: 'https://thehardcopy.co/what-designers-want/'
  }
];

export const experience = [
  {
    company: 'Jiva AG',
    role: 'Senior Design Manager',
    period: 'Jan 2022 - Sept 2025',
    photos: [
      { src: '/images/jiva-workshop-1.webp', alt: 'The Jiva team gathered around a table with laptops in Bali', width: 1000, height: 563 },
      { src: '/images/jiva-workshop-2.webp', alt: 'Field visit with the Jiva team', width: 1000, height: 623 }
    ],
    details: [
      'Led the product design function across five mobile apps and internal tools serving Indonesia’s agriculture supply chain.',
      'Designed products for 100k+ farmers, 5,400 collectors, and 4,900 retailers.',
      'Co-led Jiva Lite, a WhatsApp-based assistant that helped farmers improve their sales by $180 on avg.',
      'Led design for Crop Doctor, an AI-powered interface inside the Farmer App for diagnosing crop disease.',
      'Directed the design system, Akar, and oversaw it’s implementation across Jiva’s ecosystem of apps.'
    ]
  },
  {
    company: 'Gojek',
    role: 'Senior Design Manager',
    period: 'Dec 2017 - Jan 2022',
    photos: [
      { src: '/images/gojek-workshop-1.webp', alt: 'The Gojek design team at a Desain Keliling design QnA and hiring event', width: 778, height: 613 },
      { src: '/images/gojek-workshop-2.webp', alt: 'Kenneth with the Gojek design team', width: 1000, height: 752 }
    ],
    details: [
      'Headed the Merchant Platform design team across multiple merchant-facing products; ads, pos, payment gateways and merchant platforms.',
      'Led the redesign of GoBiz as it evolved from a restaurant management tool into a broader merchant platform.',
      'Improved information architecture across products serving 1.5M+ merchants.',
      'Designed for regional expansion across Thailand, Vietnam, and Singapore.',
      'Introduced team rituals and cross-functional alignment practices as the organization scaled.'
    ]
  },
  {
    company: 'Practo',
    role: 'Senior Designer',
    period: 'Apr 2014 - Nov 2017',
    photos: [
      { src: '/images/practo-workshop-1.webp', alt: 'The Practo team wearing "Geek Mode Active" t-shirts at a hackathon' },
      { src: '/images/practo-workshop-2.webp', alt: 'The Practo engineering team debugging together at their desks' }
    ],
    details: [
      'Worked on doctor-facing products including Practo Ray and was the design owner for Practo Partner.',
      'Led the Material redesign of the Practo Partner Android app and oversaw the redesign of the iOS app.',
      'Helped unify multiple provider-facing products into a more cohesive platform.',
      'Grew with the team from design intern to senior designer as the practice scaled from 4 to 32 designers.'
    ]
  },
  {
    company: 'TCS',
    role: 'Assistant Systems Engineer',
    period: 'Nov 2010 - May 2012',
    details: [
      'Started in engineering, working with Java and middleware applications before moving toward HTML, CSS, JavaScript frameworks, and Visual design with Photoshop.'
    ]
  }
];

export const resumeIntro = [
  'Born and brought up in the coastal city of Mangalore in a Roman Catholic household, I pursued a career as an engineer until, by a spot of luck, I came across the field of design. After a Master\u2019s degree in Information and Interface Design from the National Institute of Design, I began my practice as a digital product designer.',
  'Now with 12+ years of experience, I am a product design leader with a keen interest in growing designers, building strong teams, and creating psychological safety.',
  'In my spare time, I like to travel to new places, make coffee content, read non-fiction and contemporary fiction, collect graphic art, and write short stories and travelogues. I currently host designdemonights.com, where designers can showcase the projects they are working on.',
];

export const education = [
  { qualification: 'Master\u2019s in Design', institution: 'National Institute of Design', detail: 'Information and Interface Design', period: '2012 - 2015' },
  { qualification: 'Bachelor\u2019s of Engineering', institution: 'NMAMIT (VTU)', detail: 'Electronics and Communications', period: '2006 - 2010' },
];

export const certifications = [
  { title: 'Leadership Essentials', institution: 'NewCampus', year: '2023', url: 'https://web.archive.org/web/20250618213436/https://www.newcampus.com/sprints/leadership-essentials' },
  { title: 'Management Essentials', institution: 'NewCampus', year: '2022', url: 'https://web.archive.org/web/20250514165419/https://www.newcampus.com/sprints/management-essentials' },
  { title: 'Design Management Cohort', institution: 'Ownpath, with Meredith Black, Kristin Skinner and Alysha Naples', year: '2020' },
];

// Topics the resume itself covers, for the Topics index in llms.txt.
export const resumeTags = [
  'agentic-coding',
  'ai-design',
  'career',
  'design-leadership',
  'design-ops',
  'design-systems',
  'hiring',
  'speaking',
  'team-building',
  'workshops',
];
