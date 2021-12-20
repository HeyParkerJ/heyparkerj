import React from "react"
import styles from './Projects.module.css'
import ProjectItem from './ProjectItem';

const icons = {
  "react": "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "gatsby": "https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white",
  "javascript": "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  "python": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  "css": "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "java": "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
  "go": "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
  "emacs": "https://img.shields.io/badge/Emacs-%237F5AB6.svg?&style=for-the-badge&logo=gnu-emacs&logoColor=white",
  "shell": "https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white",
  "node": "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  "express": "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
  "mongo": "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  "html": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  "npm": "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
  "eslint": "https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white",
  "prettier": "https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E",
  "typescript": "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  "jest": "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
  "webpack": "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white",
  "zsh": "https://img.shields.io/badge/oh_my_zsh-1A2C34?style=for-the-badge&logo=ohmyzsh&logoColor=white",
}

const projects = [
  {
    "title": "FF Sleeper Scripts",
    "url": "https://github.com/HeyParkerJ/ff-sleeper-scripts",
    "description": "A collection of Node scripts that query the Sleeper Fantasy Football API and performs calculations and data aggregation to provide to the 10Guys1Cup Single Page App.",
    "icons": ["node", "express"]
  },
  {
    "title": "Fantasy Power Rankings",
    "url": "https://github.com/HeyParkerJ/Fantasy-Power-Rankings",
    "description": "Now retired, this repo houses both a Single Page App and supporting Express server. Fantasy Football managers could log in and vote in a weekly poll to rank each team in the league.",
    "icons": ["node", "javascript", "react", "express", "mongo"]
  },
  {
    "title": "10guys1Cup Web",
    "url": "https://github.com/HeyParkerJ/10guys1cup-web",
    "description": "A very simple website built for my Fantasy Football league. Works in tandem with the FF Sleeper Scripts project to display data points about league performance in a data table.",
    "icons": ["javascript", "react"]
  },
  {
    "title": "Sleeper Data Scraper",
    "url": "https://github.com/HeyParkerJ/scrape-sleeper-data",
    "description": `An iteration on previous attempts to grather data from Sleeper's public API. The focus for this project is simplicity in turning API data into plain JSON files.`,
    "icons": ["node"]
  },
  {
    "title": "Dadbot Slack",
    "url": "https://github.com/HeyParkerJ/dadbot-slack",
    "description": "When my Fantasy Football league was using Slack, I wrote this bot to store information for bets we make and rules we want to propose next year, as the free tier of slack will delete messages after an amount of time.",
    "icons": ["node", "express"]
  },
  {
    "title": "Bonus Round Website",
    "url": "https://github.com/HeyParkerJ/bonus-round-website",
    "description": "A brochure-ware static website for the late Barcade Bonus Round, based in Phoenix, AZ. Dynamically fetches the beer list from TapHunter and displays it.",
    "icons": ["html", "css", "javascript"]
  },
  {
    "title": "HeyParkerJ Frontend Boilerplate",
    "url": "https://github.com/HeyParkerJ/heyparkerj-frontend-boilerplate",
    "description": `I'm not a huge fan of everything you get when bootstrapping a project with Create-React-App, so I wrote and maintain my own minimal boilerplate for when I want to fire up a React project.`,
    "icons": ["webpack", "typescript", "react", "eslint", "jest", "npm"]
  },
  {
    "title": "HeyParkerJ Nodejs boilerplate",
    "url": "https://github.com/HeyParkerJ/heyparkerj-nodejs-boilerplate",
    "description": "My base boilerplate project for when I want to fire up a nodejs project.",
    "icons": ["node"]
  },
  {
    "title": "Batch MegaDL",
    "url": "https://github.com/HeyParkerJ/batch_megadl",
    "description": "A very simple bash script to download a text file list of mega.nz files with megatools.",
    "icons": ["shell"]
  },
  {
    "title": "Melee Video Sort",
    "url": "https://github.com/HeyParkerJ/summit_melee_video_sort",
    "description": `Someone on Reddit said "Sorting [the videos] into folders could be possible but is a lot of work, unless someone is down to write a script for it!". Needing something to do while washing down my coffee - I wrote that script.`,
    "icons": ["node"]
  },
  {
    "title": "Macro Calculator",
    "url": "https://github.com/HeyParkerJ/macro-calculator",
    "description": "After getting tired of online macro calculators, I wrote my own in an org-mode scratchpad to practice GOlang. I eventually broke that code out into this repo.",
    "icons": ["go"]
  },
  {
    "title": "React Cards Component",
    "url": "https://github.com/HeyParkerJ/react-cards-component",
    "description": "One of the first things I wrote in React, this is a simple Material Design-type card component.",
    "icons": ["react"]
  },
  {
    "title": "War (Card Game)",
    "url": "https://github.com/HeyParkerJ/war",
    "description": "A terminal based Java implementation of the card game War.",
    "icons": ["java"]
  },
  {
    "title": "Apartment Webscraper",
    "url": "https://github.com/HeyParkerJ/apartment-webscraper",
    "description": "Many years ago, I wanted to scrape the dynamic pricing of an apartment complex I was interested in living at to see if ceratin days/times were cheaper to sign the lease. This was my first and only Python project.",
    "icons": ["python"]
  },
  {
    "title": "Dotfiles",
    "url": "https://github.com/HeyParkerJ/dotfiles",
    "description": "My personal dotfiles. Emacs and Vim config, terminal, bash aliases, etc. Enables very quick setup of a new dev machine.",
    "icons": ["emacs", "shell", "zsh"]
  },
  {
    "title": "HeyParkerJ",
    "url": "https://github.com/HeyParkerJ/heyparkerj",
    "description": "This website! Primarily used to display personal projects and share some details about myself.",
    "icons": ["javascript", "react", "gatsby"]
  },
]

export default () => (
  <section className={styles.projects}>
    <ul className={styles.nav}>
      {projects.map((project) => {
        const iconsForThisItem = project.icons ?
          project.icons.map((icon) => {
            return icons[icon]
          }) : null
        return <ProjectItem url={project.url} title={project.title} description={project.description} icons={iconsForThisItem} />
      })}
    </ul>
  </section>
)
