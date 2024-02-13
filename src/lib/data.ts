const rawJobData = [
  {
    "title": "FrontEnd Engineer",
    "company": "Outlier.org",
    "range": "Sept 2022 - Aug 2023",
    "url": "https://www.outlier.org/",
    "control": [
      "Collaborated with cross-functional teams, including designers, project managers, and fellow engineers, to translate creative concepts into functional production code.",
      "Conducted bug fixes and addressed user issues by leveraging the 'FullStory' tool to analyze user sessions, identifying and resolving issues promptly.",
      "Demonstrated problem-solving skills by tackling and resolving issues related to user experience, with a focus on improving overall system functionality and user satisfaction."
    ]
  },
  {
    "title": "FrontEnd Developer",
    "company": "East Coast Creatives, LLC",
    "range": "Mar - Dec 2022",
    "url": "https://www.linkedin.com/company/eastcoastcreative/",
    "control": [
      "Developed a Next.js web application from the ground up, translating design concepts from AdobeXD into production-ready code.",
      "Utilized Material-UI to implement a visually appealing and user-friendly interface, ensuring a seamless transition from design to the final application.",
      "Leveraged FullCalendar to integrate and implement CRUD (Create, Read, Update, Delete) events efficiently, enhancing the application's capability to manage and display scheduled sessions."
    ]
  },
  {
    "title": "Javascript Developer",
    "company": "Signature Sites",
    "range": "Dec 2021 - Mar 2022",
    "url": "https://propertymetrics.com/",
    "control": [
      "Developed and implemented a suite of financial calculators using JavaScript, HTML, and CSS, catering to diverse analytical needs within the real estate domain.",
      "Implemented various analytic data calculations, including Mortgage Rate and Cap Rate, to provide users with valuable insights for real estate investment decisions.",
      "Designed and customized the layout of each calculator, ensuring a seamless integration with the client's website aesthetic and maintaining a cohesive user experience."
    ]
  },
  {
    "title": "React Developer",
    "company": "Nkemtasoft",
    "range": "Oct 2021",
    "url": "https://www.linkedin.com/company/nkemtasoft/",
    "control": [
      "Implemented a responsive and interactive accordion component that closely mimics the functionality of the accordion in VS Code, providing a familiar and intuitive user experience.",
      "Leveraged React's component-based architecture to create a modular and reusable accordion component, promoting code efficiency and maintainability."
    ]
  },
  {
    "title": "React Developer",
    "company": "Metanoia Technologies",
    "range": "Sept 2021",
    "url": "https://metanoiatechnologies.com/",
    "control": [
      "Addressed CSS-related issues in the application, demonstrating proficiency in debugging and resolving styling problems to enhance the overall visual consistency and user experience.",
      "Tackled bugs related to data fetching from Firebase, involving a combination of frontend and backend skills to identify and rectify issues in the data retrieval process."
    ]
  }
];

const featuredData = [
  {
    "title": "Octo Profile",
    "description": "A nicer look to your GitHub Profile with charts!",
    "tech_stack": ["Next.js", "TypeScript", "TailwindCSS", "Chart.js", "GitHub-API"],
    "github": "https://github.com/akash02ab/octo-profile",
    "url": "https://octo-profile.netlify.app/",
    "img": "/octo-profile.png"
  },
];

const projectData = [
  {
    "title": "Spotify Profile View",
    "description": "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. View artist and track details, existing playlists and more.",
    "tech_stack": ["React", "Styled-Component", "Spotify-API"],
    "github": "https://github.com/akash02ab/spotify-profile-view",
    "url": "https://spotify-profile-views.netlify.app/",
    "img": "/spotify-profile-home.png"
  },
  {
    "title": "Everyone Answers",
    "description": "An app for live online classes, enabling teachers to quickly gather responses from students. Teachers can create sessions, add students, and share a unique link. When students provide answers through the portal, the responses instantly appear on the teacher's dashboard.",
    "tech_stack": ["React", "Redux", "Firebase", "Material-UI"],
    "github": "https://github.com/akash02ab/everyone-answers",
    "url": "https://everyone-answers.netlify.app/"
  },
  {
    "title": "Movies Hub",
    "description": "A movie website showcasing the latest releases with detailed information including plot summaries, genres, and links to trailers.",
    "tech_stack": ["React", "TMDB-API", "CSS"],
    "github": "https://github.com/akash02ab/movies-website",
    "url": "https://the-movies-hub.netlify.app/"
  },
  {
    "title": "Memory Game",
    "description": "A 4x4 grid with randomly placed fruit pairs. Players click on cells to reveal fruit and aim to match pairs consecutively. Matched pairs lock, and the goal is to uncover all pairs with the fewest moves possible.",
    "tech_stack": ["React", "CSS"],
    "github": "https://github.com/akash02ab/memory-game",
    "url": "https://memorize-fruits.netlify.app/"
  },
  {
    "title": "Quiz App",
    "description": "A basic quiz app where users can answer multiple-choice questions. The app displays their progress, showing the current score, as well as the minimum and maximum possible scores at any moment.",
    "tech_stack": ["React", "Bootstrap", "Jest"],
    "github": "https://github.com/akash02ab/outlier-quiz-challenge",
    "url": "https://quiz-app-by-akash.netlify.app/"
  },
  {
    "title": "Crypto Trading Simulator",
    "description": "A Crypto Trading Simulator using CoinGecko API. Users can buy/sell coins and track their transaction history within the platform.",
    "tech_stack": ["React", "CoinGecko-API", "CSS"],
    "github": "https://github.com/akash02ab/crypto-trading-platform",
    "url": "https://crypto-trading-simulation.netlify.app/"
  },
  {
    "title": "Tic Tac Toe",
    "description": "A Tic-Tac-Toe game with a unique feature – users can revisit and undo their previous moves.",
    "tech_stack": ["React", "CSS"],
    "github": "https://github.com/akash02ab/tic-tac-toe",
    "url": "https://tictactoe-by-akash.netlify.app/"
  },
  {
    "title": "Pexels Curated",
    "description": "Search any image from Pexels API",
    "tech_stack": ["React", "Pexels-API", "CSS"],
    "github": "https://github.com/akash02ab/pexels-image-search",
    "url": "https://pexels-curated.netlify.app/"
  },
  {
    "title": "Color Picker",
    "description": "Choose from color picker or generate random color",
    "tech_stack": ["HTML", "CSS", "JavaScript"],
    "github": "https://github.com/akash02ab/color-picker",
    "url": "https://hexa-color-picker.netlify.app/"
  },
  {
    "title": "Trello Board",
    "description": "A basic version of a Trello board. It has three boards: Todo, Doing, and Done. Users can easily move their tasks between these boards using drag-and-drop",
    "tech_stack": ["HTML", "CSS", "Javascript"],
    "github": "https://github.com/akash02ab/trello-layout",
    "url": "https://noob-trello-board.netlify.app/"
  },
  {
    "title": "Simon Says",
    "description": "Simon Says is a memory and pattern recognition game. In the game, a sequence of colors, sounds, or actions is presented to the player by 'Simon' (the game). The player then needs to replicate the sequence by repeating the colors in the correct order.",
    "tech_stack": ["HTML", "CSS", "JavaScript"],
    "github": "https://github.com/akash02ab/simon-says",
    "url": "https://simon-says-v1.netlify.app/"
  },
  {
    "title": "Random Advice Generator",
    "description": "A minimal looking card that displays random advice fetched from Advice Slip API",
    "tech_stack": ["HTML", "CSS", "JavaScript"],
    "github": "https://github.com/akash02ab/random-advice-generator/",
    "url": "https://random-advise-generator.netlify.app/"
  },
];

export {
  rawJobData,
  featuredData,
  projectData
};