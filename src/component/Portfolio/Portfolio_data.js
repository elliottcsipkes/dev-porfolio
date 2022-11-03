const Portfolio_data = [
  {
    id: 1,
    category: "WEB APPLICATION",
    title: "Budgets - Organize a Budget by Setting Limits & Recording Spending",
    image: "/images/Budgets.png",
    demo: "https://budget-appdemos.netlify.app/",
    github: "https://github.com/elliottcsipkes/budget-app",
    desc: "Styled entirely with Bootstrap and React Bootstrap components, this budgets app allows the user to set multiple budget categories and then add expenses to each. As expenses increase, the progress bar fills and may change color to indicate how close the user is to hitting the maximum alotted spending. Expenses can also be added without being specifically added to a budget and will be stored in the uncategorized card. All data is saved to local storage.",
  },
  {
    id: 2,
    category: "WEB APPLICATION",
    title: "CryptoSearch - Find Market Information on Cryptocurrencies",
    image: "/images/CryptoApp.png",
    demo: "https://cryptosearch-demo.netlify.app/",
    github: "https://github.com/elliottcsipkes/crypto-api-app",
    desc: "Utilizing the CoinGecko API, the application allows the user to view crypto market data about any given cryptocurrency. The coins are sorted by market cap and clicking on a given coin will give more information on it. Users can navigate to less popular coins through next page buttons and return to the start of the list by clicking the logo in the header.",
  },
  {
    id: 3,
    category: "WEB APPLICATION",
    title: "Pokedex - View Stats and Abilities of Your Favorite Pokemon",
    image: "/images/pokeapp.png",
    demo: "https://pokemon-pokedex-demo.netlify.app/",
    github: "https://github.com/elliottcsipkes/pokemon-app",
    desc: "This app uses the PokeAPI to display monsters from the hit television and TCG series, Pokemon. The pokemon are sorted by their pokedex number and include all evolutions. Clicking a pokemon card on the left will display the given pokemon along with its type and stats on the right. With 20 pokemon loaded on each page, next and previous buttons are given to allow navigation deeper into the pokedex.",
  },
  {
    id: 4,
    category: "WEB APPLICATION",
    title: "Notes - Write Custom Sticky Notes and Use Search to Filter Them",
    image: "./image/portfolio-04.jpg",
    demo: "https://sticky-notes-app-demo.netlify.app/",
    github: "https://github.com/elliottcsipkes/notes-app",
    desc: "Use this application to write and save sticky notes and reminders to your local storage. Simply type into the blue sticky note and click save to save a new note instance. To remove a note permanently, click the trashcan icon located in the bottom corner of each note. Search/filter functionality is also included to find the note you need without manually looking through a list of saved notes. A dark mode toggle is also included for those who prefer it.",
  },
  {
    id: 5,
    category: "WEB APPLICATION",
    title: "Moviebase - Search For Information About Your Favorite Movies",
    image: "./image/portfolio-05.jpg",
    demo: "https://moviebase-demo.netlify.app/",
    github: "https://github.com/elliottcsipkes/movie-database-app",
    desc: "This IMDB like application uses the OMDb API to search through an archive of movies and return all information about them. Using the search bar will allow the user to search this archive of movies which will be displayed in the movie section. Once one's favorite movies are found, they can be added to a favorites list (saved to local storage) just below the movie section. Clicking on a movie poster will reveal a modal with relevant information about that movie.",
  },
  {
    id: 6,
    category: "PORTFOLIO WEBSITE",
    title: "Personal Portfolio - Learn More About My Projects and Experience",
    image: "/images/portfolio.png",
    demo: "",
    github: "https://github.com/elliottcsipkes/dev-porfolio",
    desc: "This is the current website you are visiting! The site has been constructed with custom CSS and animations along with being completely mobile responsive. I used a combination of both flexbox and grid to create an organized user experience and to better display my projects and resume. Other functionality included in the site are the ability to download a PDF version of my resume, links to my GitHub and LinkedIn, along with smooth scroll to any section on the webpage.",
  },
];
export default Portfolio_data;
