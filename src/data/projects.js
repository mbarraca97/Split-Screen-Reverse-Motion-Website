// Centralized project data + helpers (desktop + mobile + slides)

const encodePathPart = (value) => encodeURIComponent(value);

export const buildProjectHref = (projectKey) => `/projects/${projectKey}`;

export const buildProjectImageUrl = (folder, filename) =>
  `/projetos/${encodePathPart(folder)}/${encodePathPart(filename)}`;

// NOTE: filenames are kept exactly as they exist under /public/projetos/<folder>/
export const PROJECTS = [
  {
    key: 'sscasa',
    number: '01',
    name: 'Panoramic House',
    subtitle: 'Moradia de luxo',
    folder: 'sscasa',
    location: 'Portugal',
    type: 'Moradia',
    category: 'Residencial',
    year: '—',
    area: '—',
    client: 'Privado',
    architect: '—',
    description: {
      title: 'Panoramic House',
      text:
        'Uma moradia de luxo desenhada para valorizar a luz natural e as vistas. Materiais nobres, volumes equilibrados e detalhes de carpintaria e iluminação criam uma atmosfera serena, sofisticada e profundamente habitável.'
    },
    details: {
      label: 'Detalhes técnicos',
      text:
        'Acabamentos premium, soluções de arrumação integradas, iluminação ambiente por camadas e uma paleta cromática pensada para realçar a arquitetura e o conforto do dia-a-dia.'
    },
    images: [
      'sala 2 2 f.jpg',
      'sala v3 1f tapete novo.jpg',
      'coz 2 f.jpg',
      'coz 1 f - Cópia.jpg',
      'banheiro f.jpg',
      'escritorio f.jpg',
      'ZONA DE ESTUDO.jpg',
      'maquillage f.jpg',
      'quart oazul 2 f.jpg',
      'quarto amarelo f.jpg',
      'quarto cama preta 2 tv.jpg',
      'quarto cama preta 3 4 f.jpg',
      'quarto esmael 1 f.jpg',
      'quarto esmael 2 f.jpg'
    ]
  },
  {
    key: 'seprama',
    number: '02',
    name: 'Seprema Escritório',
    subtitle: 'Design corporativo',
    folder: 'seprama',
    location: 'Portugal',
    type: 'Escritório',
    category: 'Comercial',
    year: '—',
    area: '—',
    client: 'Seprema',
    architect: '—',
    description: {
      title: 'Seprema Escritório',
      text:
        'Um espaço de trabalho contemporâneo, pensado para potenciar foco e colaboração. O design equilibra funcionalidade, identidade de marca e conforto, com soluções de iluminação e materiais que elevam a experiência diária.'
    },
    details: {
      label: 'Detalhes técnicos',
      text:
        'Zonas flexíveis de reunião, acústica melhorada, mobiliário ergonómico e um layout eficiente que organiza percursos, postos de trabalho e áreas de apoio.'
    },
    images: ['cam 06 1 f.jpg', 'cam 11 f.jpg', 'cam 08 f.jpg', 'cam 03 f.jpg', 'cam 02 f.jpg']
  },
  {
    key: 'casafrancelos',
    number: '03',
    name: 'Casa Francelos',
    subtitle: 'Moradia de luxo',
    folder: 'CasaFrancelos',
    location: 'Portugal',
    type: 'Moradia',
    category: 'Residencial',
    year: '—',
    area: '—',
    client: 'Privado',
    architect: '—',
    description: {
      title: 'Casa Francelos',
      text:
        'Uma moradia sofisticada onde a elegância se traduz em proporções, textura e luz. O projeto combina ambientes amplos com momentos mais íntimos, criando um percurso doméstico coerente e acolhedor.'
    },
    details: {
      label: 'Detalhes técnicos',
      text:
        'Materiais de alta qualidade, acabamentos detalhados, iluminação integrada e peças à medida que reforçam o carácter luxuoso sem perder a intemporalidade.'
    },
    images: [
      'salao 1 f-2.jpg',
      'salao 2 f-2.jpg',
      'sala jantar f-2.jpg',
      'c1 f 2.jpg',
      'c2 f-2.jpg',
      'c3 f.jpg',
      'c4 f-2.jpg',
      'quarto 1 f.jpg',
      'quarto 1 2 f-2.jpg',
      'quarto 2 1 f-2.jpg',
      'wc 1 f-2.jpg',
      'wc 1 2 f-2.jpg',
      'wc 1 3 f-2.jpg',
      'wc 2 f-2.jpg',
      'wc 3 f.jpg'
    ]
  },
  {
    key: 'restelo',
    number: '04',
    name: 'Casa Restelo',
    subtitle: 'Moradia de luxo',
    folder: 'restelo',
    location: 'Portugal',
    type: 'Moradia',
    category: 'Residencial',
    year: '—',
    area: '—',
    client: 'Privado',
    architect: '—',
    description: {
      title: 'Casa Restelo',
      text:
        'Uma casa com uma linguagem contemporânea e calorosa, onde a luz, os planos e a materialidade trabalham em conjunto. A intervenção privilegia o conforto, a fluidez entre zonas e a sensação de amplitude.'
    },
    details: {
      label: 'Detalhes técnicos',
      text:
        'Cozinha e áreas sociais pensadas para o uso diário, iluminação funcional e decorativa, e um conjunto de acabamentos premium que elevam a experiência do espaço.'
    },
    images: [
      'pano salao f.jpg',
      'sala hall f.jpg',
      'salao f.jpg',
      'salao 2 f.jpg',
      'cozinha 1 f.jpg',
      'cozinha 2 f.jpg',
      'cozinha 3 f.jpg',
      'suite 3_3 f.jpg',
      'quarto 1 n5 f.jpg',
      'quarto 2 F.jpg',
      'quarto 2 n2 f.jpg',
      'quarto 3 f.jpg',
      'quarto banho new.jpg',
      'Imagem WhatsApp 2023-02-28 às 19.25.22.jpg'
    ]
  },
  {
    key: 'colombia',
    number: '05',
    name: 'Casa Colombia',
    subtitle: 'Moradia de luxo',
    folder: 'colombia',
    location: 'Colombia',
    type: 'Moradia',
    category: 'Residencial',
    year: '—',
    area: '—',
    client: 'Privado',
    architect: '—',
    description: {
      title: 'Casa Colombia',
      text:
        'Um projeto residencial de luxo com uma abordagem contemporânea e uma atmosfera acolhedora. A composição privilegia materiais ricos, contrastes subtis e uma leitura limpa do espaço, mantendo sempre o conforto como prioridade.'
    },
    details: {
      label: 'Detalhes técnicos',
      text:
        'Seleção criteriosa de materiais, iluminação por camadas e soluções de desenho à medida que garantem consistência visual e qualidade em todos os ambientes.'
    },
    images: [
      'WhatsApp Image 2026-02-25 at 10.30.24 (3).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.23.jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.23 (1).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.23 (2).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.24.jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.24 (1).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.24 (2).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.24 (4).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.24 (5).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.24 (6).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.24 (7).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25.jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (1).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (2).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (3).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (4).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (5).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (6).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (7).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (8).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.25 (9).jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.26.jpeg',
      'WhatsApp Image 2026-02-25 at 10.30.26 (1).jpeg'
    ]
  }
];

const PROJECT_BY_KEY = PROJECTS.reduce((acc, p) => {
  acc[p.key.toLowerCase()] = p;
  return acc;
}, {});

export const getProjectById = (projectId) => {
  const key = (projectId || '').toString().toLowerCase();
  return PROJECT_BY_KEY[key] || PROJECTS[0];
};

export const getProjectsForSlides = () =>
  PROJECTS.map((p) => {
    const galleryUrls = p.images.map((filename) => buildProjectImageUrl(p.folder, filename));
    return {
      id: p.key,
      number: p.number,
      name: p.name,
      location: p.location,
      type: p.type,
      category: p.category,
      images: galleryUrls.slice(0, 3),
      href: buildProjectHref(p.key)
    };
  });

export const getProjectsForProjectPages = () =>
  PROJECTS.map((p) => {
    const galleryUrls = p.images.map((filename) => buildProjectImageUrl(p.folder, filename));
    return {
      id: p.key,
      number: p.number,
      title: p.name,
      subtitle: p.subtitle,
      location: p.location,
      type: p.type,
      category: p.category,
      year: p.year,
      area: p.area,
      client: p.client,
      architect: p.architect,
      mainImage: galleryUrls[0],
      gallery: galleryUrls,
      description: p.description,
      details: p.details,
      fullDescription: p.fullDescription || p.description?.text || ''
    };
  });

const PROJECT_PAGES = getProjectsForProjectPages();
const PROJECT_PAGE_BY_ID = PROJECT_PAGES.reduce((acc, p) => {
  acc[p.id.toLowerCase()] = p;
  return acc;
}, {});

export const getProjectPageById = (projectId) => {
  const key = (projectId || '').toString().toLowerCase();
  return PROJECT_PAGE_BY_ID[key] || PROJECT_PAGES[0];
};

export const getRelatedProjects = (currentProjectId, limit = 2) => {
  const currentKey = (currentProjectId || '').toString().toLowerCase();
  return PROJECT_PAGES.filter((p) => p.id.toLowerCase() !== currentKey)
    .slice(0, limit)
    .map((p) => ({
      title: p.title,
      image: p.mainImage,
      href: buildProjectHref(p.id)
    }));
};

