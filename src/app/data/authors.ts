import { Author } from '../types/author';

export const authors: Author[] = [
  {
    id: 'a1',
    name: 'John Carter',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Erfaren mjukvaruingenjör med över 10 års erfarenhet av att bygga webbapplikationer.',
    presentation:
      'Passionerad om att dela kunskap och hjälpa andra att växa inom teknik.\nMed en passion för undervisning och omfattande erfarenhet inom JavaScript, Node.js och React, har John Carter hjälpt tusentals studenter att nå sina mål.\nJohn Carter för med sig insikter från verkligheten och praktisk kunskap till alla kurser, vilket säkerställer att studenterna inte bara lär sig teorin utan även hur den kan användas i praktiken.\nNär John Carter inte undervisar, älskar han att experimentera med nya ramverk, bidra till öppen källkod och inspirera nästa generation av utvecklare genom att dela med sig av sina lärdomar från branschen.',
    expertise: [
      {
        id: 1,
        domain: 'Lead Frontend Developer',
        company: 'Tech Innovations Inc.',
        date: '2019 - Nuvarande',
      },
      {
        id: 2,
        domain: 'Senior Backend Engineer',
        company: 'Global Solutions Ltd.',
        date: '2015 - 2019',
      },
      {
        id: 3,
        domain: 'React Specialist',
        company: 'StartUp Ventures',
        date: '2010 - 2015',
      },
    ],
    rating: 4.8,
    courses: ['1', '2', '3'],
    email: 'john.carter@kurshub.com',
    role: 'author',
  },
  {
    id: 'a2',
    name: 'Sarah Mitchell',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Frontendutvecklare som älskar att undervisa i modern UI/UX-teknik.',
    presentation:
      'Brinner för att skapa intuitiva och responsiva användargränssnitt.\nMed en passion för undervisning och djupgående erfarenhet inom React, Redux och CSS, har Sarah Mitchell guidat otaliga studenter mot att bemästra frontend-utveckling.\nSarah Mitchell delar med sig av praktiska tips och verkliga exempel i sina kurser, så att studenterna inte bara förstår teorin utan också kan tillämpa den i sina projekt.\nPå fritiden utforskar Sarah de senaste designtrenderna, deltar i hackathons och handleder nybörjare för att skapa en mer inkluderande tech-värld.',
    expertise: [
      {
        id: 1,
        domain: 'Senior UI Developer',
        company: 'PixelCraft Studio',
        date: '2021 - Nuvarande',
      },
      {
        id: 2,
        domain: 'State Management Expert',
        company: 'Frontend Masters',
        date: '2018 - 2021',
      },
      {
        id: 3,
        domain: 'CSS Design Specialist',
        company: 'DesignHive',
        date: '2015 - 2018',
      },
    ],
    rating: 4.7,
    courses: ['4', '5'],
    email: 'sarah.mitchell@kurshub.com',
    role: 'author',
  },
  {
    id: 'a3',
    name: 'David Kim',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Tech lead på ett toppföretag, älskar TypeScript och ren kodpraktik.',
    presentation:
      'Fokuserad på att bygga skalbara och underhållbara system med moderna verktyg.\nMed en passion för undervisning och expertis inom TypeScript, Angular och React, har David Kim inspirerat tusentals studenter att skriva ren och effektiv kod.\nDavid Kim integrerar sina erfarenheter från ledande tech-projekt i sina kurser, vilket ger studenterna en unik inblick i hur teori möter praktik i verkligheten.\nNär David inte undervisar, älskar han att dyka ner i open source-projekt, diskutera kodarkitektur på konferenser och mentorera unga talanger inom programmering.',
    expertise: [
      {
        id: 1,
        domain: 'Tech Lead TypeScript',
        company: 'CloudWare Labs',
        date: '2020 - Nuvarande',
      },
      {
        id: 2,
        domain: 'Enterprise Solutions Architect',
        company: 'NextGen Solutions',
        date: '2016 - 2020',
      },
      {
        id: 3,
        domain: 'Framework Specialist',
        company: 'OpenSource Collective',
        date: '2014 - 2016',
      },
    ],
    rating: 4.9,
    courses: ['6'],
    email: 'david.kim@kurshub.com',
    role: 'author',
  },
  {
    id: 'a4',
    name: 'Emanuel Larsson',
    avatar: 'https://i.pravatar.cc/150?img=11',
    bio: 'UX-designer med passion för tillgänglighet och användarcentrerad design.',
    presentation:
      'Strävar efter att skapa inkluderande och användarvänliga upplevelser.\nMed en passion för undervisning och omfattande erfarenhet inom UX Design, Figma och Designsystem, har Emma Larsson hjälpt studenter att förstå vikten av empati i designprocessen.\nEmma Larsson delar med sig av praktiska metoder och insikter från sina projekt, så att studenterna kan skapa lösningar som fungerar för alla användare.\nNär Emma inte undervisar, engagerar hon sig i tillgänglighetsinitiativ, testar nya designverktyg och delar sina tankar om inkluderande design på bloggar och workshops.',
    expertise: [
      {
        id: 1,
        domain: 'Lead UX Designer',
        company: 'InVision Studio',
        date: '2019 - Nuvarande',
      },
      {
        id: 2,
        domain: 'Prototyping Specialist',
        company: 'Creative Loop',
        date: '2017 - 2019',
      },
      {
        id: 3,
        domain: 'Design Systems Expert',
        company: 'Nordic UI Labs',
        date: '2014 - 2017',
      },
    ],
    rating: 4.6,
    courses: ['7'],
    email: 'emma.larsson@kurshub.com',
    role: 'author',
  },
  {
    id: 'a5',
    name: 'Jonas Berg',
    avatar: 'https://i.pravatar.cc/150?img=15',
    bio: 'Fullstackutvecklare med fokus på DevOps och molnlösningar.',
    presentation:
      'Älskar att optimera utvecklingsprocesser och implementera CI/CD-pipelines.\nMed en passion för undervisning och djup kunskap inom Docker, AWS och Node.js, har Jonas Berg stöttat studenter i att bygga robusta och skalbara system.\nJonas Berg bidrar med praktiska exempel från sin karriär inom molnteknologi, vilket gör att studenterna får en tydlig koppling mellan teori och verkliga tillämpningar.\nPå fritiden utforskar Jonas nya molntjänster, bidrar till DevOps-communities och håller föreläsningar om automatiseringens framtid.',
    expertise: [
      {
        id: 1,
        domain: 'DevOps Engineer',
        company: 'DevOps Engine',
        date: '2020 - Nuvarande',
      },
      {
        id: 2,
        domain: 'Cloud Technology Specialist',
        company: 'CloudForge',
        date: '2016 - 2020',
      },
      {
        id: 3,
        domain: 'Backend Solutions Developer',
        company: 'CodeCrafters AB',
        date: '2013 - 2016',
      },
    ],
    rating: 4.8,
    courses: ['8'],
    email: 'jonas.berg@kurshub.com',
    role: 'author',
  },
  {
    id: 'a6',
    name: 'Linda Svensson',
    avatar: 'https://i.pravatar.cc/150?img=20',
    bio: 'Datalärare med specialisering inom maskininlärning och AI.',
    presentation:
      'Passionerad om att dela insikter om hur AI förändrar vår värld.\nMed en passion för undervisning och expertis inom Python, Machine Learning och TensorFlow, har Linda Svensson inspirerat studenter att utforska datavetenskapens möjligheter.\nLinda Svensson för med sig konkreta exempel från AI-projekt till sina kurser, vilket hjälper studenterna att förstå hur teoretiska koncept kan omsättas i banbrytande lösningar.\n<strong>Personlig drivkraft</strong>: När Linda inte undervisar, forskar hon om AI-etik, bidrar till datavetenskapsgemenskaper och handleder studenter i att bygga sina första AI-modeller.',
    expertise: [
      {
        id: 1,
        domain: 'Data Science Instructor',
        company: 'DataSci Academy',
        date: '2021 - Nuvarande',
      },
      {
        id: 2,
        domain: 'AI Algorithm Developer',
        company: 'NeuralNet Labs',
        date: '2017 - 2021',
      },
      {
        id: 3,
        domain: 'Deep Learning Specialist',
        company: 'DeepLearn.io',
        date: '2014 - 2017',
      },
    ],
    rating: 4.9,
    courses: ['9', '10'],
    email: 'linda.svensson@kurshub.com',
    role: 'author',
  },
];
