export type PortfolioType = {
  sections: {title: string; to: string}[];
  about: {
    firstName: string;
    lastName: string;
    img: string;
    bio: string;
    skills?: string[];
    hobbies?: string[];
  };
  projects: {
    name: string;
    img: string;
    tools: string[];
    url?: string;
    github: string;
    description: string;
  }[];
};

export const portfolioES: PortfolioType = {
  sections: [
    {title: "Acerca", to: "about"},
    {title: "Proyectos", to: "projects"},
    {title: "Contacto", to: "contact"},
  ],
  about: {
    firstName: "Mariano",
    lastName: "Chavez",
    img: "https://res.cloudinary.com/chavedo/image/upload/v1660949890/portfolio/profile.webp",
    hobbies: ["Batería 🥁", "Leer 📙", "Gimnasio 🏋", "Cerveza 🍺"],
    bio: `
Soy estudiante avanzado de Ingeniería en Sistemas de Información y amante de la programación.

Tengo conocimientos tanto en Backend desarrollando aplicaciones en Django, Rails y Node.js; como en Frontend desarrollando aplicaciones web, generalmente con JavaScript/React/Next, actualmente me encuentro enfocado en React Native.

Siempre me ha gustado aprender tecnologías nuevas, considero necesario y de gran valor tener conocimientos en distintas áreas por más que sean ajenas a nuestra especialización.
`,
    skills: ["Python", "Django", "JavaScript", "TypeScript", "Node.js", "React", "Next.js"],
  },
  projects: [
    {
      name: "Tesla Shop",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661522748/portfolio/tesla-shop.webp",
      tools: ["NextJS", "TypeScript", "MongoDB", "ChakraUI", "NextAuth", "Paypal"],
      url: "https://tesla-shop-nextjs.vercel.app/",
      github: "https://github.com/marianochavez/tesla_shop_nextjs",
      description: `Tienda para venta de ropa con gestión de usuario, ordenes, compras y pago. Contiene una parte administrativa para estadísticas, usuarios y productos.`,
    },
    {
      name: "UPS Clone",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666536699/portfolio/react_native.png",
      tools: ["React Native", "TypeScript", "Stepzen", "Tailwind", "RNElements", "Expo"],
      github: "https://github.com/marianochavez/ups_react_native",
      description: `Aplicación para seguimiento de paquetes y busqueda de usuarios.`,
    },
    {
      name: "Jaguarete Kaa",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661525134/portfolio/jaguarete-kaa.webp",
      tools: ["Django", "SQL", "CrispyForms", "Bootstrap"],
      url: "https://jaguaretekaaecommerce.herokuapp.com/",
      github: "https://github.com/marianochavez/jaguarete_ecommerce_django",
      description: `Ecommerce para venta de productos tecnológicos. Tiene gestión de usuarios, productos, categorías, recuperación de cuenta y página administrativa.`,
    },
    {
      name: "Calendario",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661524268/portfolio/calendar-app.webp",
      tools: ["React", "Node", "Redux", "PWA", "MongoDB", "Enzyme"],
      url: "https://react-calendar-app-frontend.vercel.app/",
      github: "https://github.com/marianochavez/react_calendarApp_frontend",
      description: `Calendario con distintas vistas que permite agregar eventos por fecha y horario. Utiliza backend realizado en Node.js.`,
    },
    {
      name: "Tateti",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661525803/portfolio/tateti-app.webp",
      tools: ["React", "Rails", "TypeScript", "PostgreSQL", "NESS.css"],
      url: "https://tateti-react-rails.vercel.app/",
      github: "https://github.com/marianochavez/tateti_frontend_react",
      description: `Juego tateti con registro de usuario, 1 vs 1 en tiempo real, utiliza backend realizado en Rails.`,
    },
    {
      name: "Mapa box",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661526366/portfolio/mapbox-app.webp",
      tools: ["React", "TypeScript", "Mapbox", "Axios"],
      url: "https://mapbox-react-mc.netlify.app/",
      github: "https://github.com/marianochavez/react_mapbox",
      description: `Pagina para buscar direcciones y marcar su trayectoria utilizando mapbox.`,
    },
    {
      name: "Arg News",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666538359/portfolio/node_news.png",
      tools: ["Node.js", "Express", "Docker", "EJS", "Axios"],
      github: "https://github.com/marianochavez/openjira_nextjs",
      description: `Página dockerizada para la obtención de noticias, clima, cambio dolar y estadisticas covid.`,
    },
    {
      name: "Open Jira",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661526934/portfolio/openjira.webp",
      tools: ["NextJS", "TypeScript", "MongoDB", "Docker"],
      github: "https://github.com/marianochavez/openjira_nextjs",
      description: `Página para manejo de tareas simulando Jira, con drag and drop.`,
    },
    {
      name: "+50 Proyectos",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666538824/portfolio/github.webp",
      tools: ["GitHub"],
      github: "https://github.com/marianochavez",
      description: `Estos son solo algunos de mis proyectos, puedes ver más en mi repositorio de GitHub.`,
    },
  ],
};
