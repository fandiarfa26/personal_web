const menus = [
  {
    label: 'Tentang',
    target: '#about'
  },
  {
    label: 'Kemampuan',
    target: '#skill'
  },
  {
    label: 'Pengalaman',
    target: '#experience'
  },
  {
    label: 'Projek',
    target: '#project'
  },
  {
    label: 'Kontak',
    target: '#contact'
  },
];

const skills = {
  hard: [
    'React','TailwindCSS','Javascript','HTML','CSS',
    'Flutter','Dart','Node.js','Firebase','Python',
    'NuxtJS','VueJS','Bootstrap','JQuery','Laravel',
    'Codeigniter','PHP','MySQL'
  ],
  soft: [
    'Adaptif',
    'Kolaborasi',
    'Komunikasi',
    'Problem Solving',
    'Keingintahuan',
  ]
};

const experiences = [
  {
    name: 'Dicoding',
    role: 'React Developer',
    type: 'Kursus',
    time: 'Juni 2022 - Juli 2022',
    notes: [
      'Memilih jalur belajar React Developer, agar mengerti dan memahami tentang ReactJS.',
      'Terdapat 4 kelas yang perlu diselesaikan.',
      'Belajar membuat aplikasi web sederhana: landing page responsif, aplikasi rak buku, dan aplikasi catatan.'
    ],
    notes_en: [
      'Choosing the React Developer learning path, in order to understand and understand about ReactJS.',
      'There are 4 classes that need to be completed.',
      'Learn to create simple web apps: responsive landing pages, bookshelf apps, and notes apps.',
    ]
  },
  {
    name: 'PT. Inovasi Utama Nusantara',
    role: 'Frontend Developer',
    type: 'Kerja Full-time',
    time: 'Juli 2020 - Saat ini',
    notes: [
      'Mengerjakan banyak sekali projek: MuseAkademi, Locahubie, Hi Nano, FoodieMu, Idbookstore.',
      'Bekerja dengan berbagai teknologi untuk membangun website dan aplikasinya: Bootstrap, TailwindCSS, VueJS, Flutter, React.',
      'Selalu berkomunikasi dengan UI/UX Designer dan Backend Developer.'
    ],
    notes_en: [
      'Worked on a lot of projects: MuseAkademi, Locahubie, Hi Nano, FoodieMu, Idbookstore.',
      'Work with various technologies to build websites and their applications: Bootstrap, TailwindCSS, VueJS, Flutter, React.',
      'Always communicate with UI/UX Designer and Backend Developer.'
    ]
  },
  {
    name: 'PUIPT DLI UM',
    role: 'IT Support',
    type: 'Magang',
    time: 'Juli 2019 - Juli 2020',
    notes: [
      'Membantu dalam membuatkan web company profile dan web konferensi jurnal menggunakan Bootstrap, HTML, CSS, Javascript, dan Codeigniter.',
      'Mengikuti dan membantu kegiatan workshop dan seminar yang diadakan.',
      'Mengikuti pameran teknologi di Bali.'
    ],
    notes_en: [
      'Help in making web company profiles and web conference journals using Bootstrap, HTML, CSS, Javascript, and Codeigniter.',
      'Follow and assisting the workshops and seminars held.',
      'Follow a technology exhibition in Bali.'
    ]
  },
  {
    name: 'CV. Girisa Teknologi',
    role: 'Web Developer',
    type: 'Magang',
    time: 'Januari 2015 - Juni 2015',
    notes: [
      'Membantu dalam membuat fitur website rekap data hotel menggunakan Bootstrap dan JQuery.',
      'Bekerja dengan salah satu teman sekelas dan siswa dari sekolah lain.',
      'Diterima magang walaupun mendemokan website CRUD yang error :D'
    ],
    notes_en: [
      'Help in creating a hotel data recap website feature using Bootstrap and JQuery.',
      'Working with one of the classmates and students from another school.',
      'Accepted an internship despite demonstrating the error CRUD website :D'
    ]
  },
];

const projects = [
  {
    name: 'Aplikasi Catatan',
    year: '2022',
    assoc: 'Dicoding',
    tech: ['React', 'Javascript', 'HTML', 'CSS'],
    links: {
      url: 'https://fandiarfa26-notes-app.vercel.app/',
      github: 'https://github.com/fandiarfa26/Dicoding/tree/master/submission_reactjs',
    },
  },
  {
    name: 'Aplikasi Rak Buku',
    year: '2022',
    assoc: 'Dicoding',
    tech: ['Javascript', 'HTML', 'CSS'],
    links: {
      url: 'https://fandiarfa26.github.io/Dicoding/submission_fe_pemula/',
      github: 'https://github.com/fandiarfa26/Dicoding/tree/master/submission_fe_pemula',
    },
  },
  {
    name: 'Landing Page Interaktif & Responsif',
    year: '2022',
    assoc: 'Dicoding',
    tech: ['Javascript', 'HTML', 'CSS'],
    links: {
      url: 'https://fandiarfa26.github.io/Dicoding/submission_web_dasar/',
      github: 'https://github.com/fandiarfa26/Dicoding/tree/master/submission_web_dasar',
    },
  },
  {
    name: 'Admin Hi Nano',
    year: '2022',
    assoc: 'PT. Inovasi Utama Nusantara',
    tech: ['React', 'TailwindCSS', 'Javascript'],
    links: {
      url: 'https://admin-hinano.vercel.app/',
      figma: 'https://www.figma.com/file/zuD2TyY7kafwnXeRC10FlJ/Hi-Nano?node-id=386%3A206'
    },
  },
  {
    name: 'Hand Emoji',
    year: '2022',
    assoc: '-',
    tech: ['Flutter', 'Dart', 'Machine Learning'],
    links: {
      video: 'https://www.instagram.com/reel/CYgust7qdqW/',
    },
  },
  {
    name: 'Starter Flutter',
    year: '2021',
    assoc: '-',
    tech: ['Flutter', 'Dart'],
    links: {
      github: 'https://github.com/fandiarfa26/starter_flutter',
      figma: 'https://www.figma.com/file/Q7KyCXktON6dB1lGUSH902/Starter-Flutter?node-id=9%3A179'
    },
  },
  {
    name: 'Hi Nano App',
    year: '2021',
    assoc: 'PT. Inovasi Utama Nusantara',
    tech: ['Flutter', 'Dart', 'Firebase'],
    links: {
      figma: 'https://www.figma.com/file/zuD2TyY7kafwnXeRC10FlJ/Hi-Nano?node-id=386%3A206',
    },
  },
  {
    name: 'Website Profil',
    year: '2021',
    assoc: '-',
    tech: ['TailwindCSS', 'VueJS', 'Javascript'],
    links: {
      url: 'https://fandiarfa26.github.io/',
      github: 'https://github.com/fandiarfa26/fandiarfa26.github.io',
    },
  },
  {
    name: 'FoodieMu App',
    year: '2021',
    assoc: 'PT. Inovasi Utama Nusantara',
    tech: ['Flutter', 'Dart', 'Firebase'],
    links: {
      url: 'https://foodiemu.com/',
      playstore: 'https://play.google.com/store/apps/details?id=com.foodiemu.customer',
    },
  },
  {
    name: 'Sistem Automatic Text Summarization',
    year: '2020',
    assoc: '-',
    tech: ['NuxtJS', 'VueJS', 'Javascript'],
    links: {
      url: 'https://fandiarfa26.github.io/arfa-summary/',
      github: 'https://github.com/fandiarfa26/arfa-summary'
    },
  },
  {
    name: 'Backend Sistem ATS',
    year: '2020',
    assoc: '-',
    tech: ['Flask', 'Python'],
    links: {
      url: 'https://fandiarfa26.github.io/arfa-summary/',
      github: 'https://github.com/fandiarfa26/api-textrank'
    },
  },
  {
    name: 'Locahubie (Frontend)',
    year: '2020',
    assoc: 'PT. Inovasi Utama Nusantara',
    tech: ['TailwindCSS', 'VueJS', 'Javascript'],
    links: {
      url: 'https://locahubie.com/',
    },
  },
  {
    name: 'MuseAkademi (Frontend)',
    year: '2020',
    assoc: 'PT. Inovasi Utama Nusantara',
    tech: ['Bootstrap', 'CSS', 'HTML'],
    links: {
      url: 'https://museakademi.com/',
    },
  },
  {
    name: 'Simple Cover Book Maker',
    year: '2020',
    assoc: '-',
    tech: ['PHP', 'Javascript', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/fandiarfa26/cover_book_maker',
    },
  },
  {
    name: 'Website ICLI 2020',
    year: '2020',
    assoc: 'PUIPT DLI UM',
    tech: ['Codeigniter', 'PHP', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/fandiarfa26/icli2020',
    },
  },
  {
    name: 'Website Company Profile DLI',
    year: '2020',
    assoc: 'PUIPT DLI UM',
    tech: ['Codeigniter', 'PHP', 'HTML', 'CSS'],
    links: {
      url: 'http://dli.um.ac.id/',
    },
  },
  {
    name: 'Idbookstore',
    year: '2020',
    assoc: 'PUIPT DLI UM',
    tech: ['Codeigniter', 'Bootstrap', 'Javascript'],
    links: {
      url: 'https://idbookstore.id/',
    },
  },
];

const social = {
  github: 'https://github.com/fandiarfa26',
  instagram: 'https://www.instagram.com/fandiarfa/',
  facebook: 'https://www.facebook.com/fandiarfa26',
  twitter: 'https://twitter.com/_panpandi',
  linkedin: 'https://www.linkedin.com/in/arfabuma/',
  email: 'arfabuma.987@gmail.com',
};

export {menus, skills, experiences, projects, social};