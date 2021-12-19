import React from "react"
import styles from './Projects.module.css'
import ProjectItem from './ProjectItem';

const projects = [
  {
    "title": "FF Sleeper Scripts",
    "url": "https://github.com/HeyParkerJ/ff-sleeper-scripts",
    "description": "A collection of Node scripts that query the Sleeper Fantasy Football API and performs calculations and data aggregation to provide to the 10Guys1Cup Single Page App."
  },
  {
    "title": "Fantasy Power Rankings",
    "url": "https://github.com/HeyParkerJ/Fantasy-Power-Rankings",
    "description": "Now retired, this repo houses both a Single Page App and supporting Express server. Fantasy Football managers could log in and vote in a weekly poll to rank each team in the league."
  },
  {
    "title": "10guys1Cup Web",
    "url": "https://github.com/HeyParkerJ/10guys1cup-web",
    "description": "A very simple website built for my Fantasy Football league. Works in tandem with the FF Sleeper Scripts project to display data points about league performance in a data table."
  },
  {
    "title": "Sleeper Data Scraper",
    "url": "https://github.com/HeyParkerJ/scrape-sleeper-data",
    "description": `An iteration on previous attempts to grather data from Sleeper's public API. The focus for this project is simplicity in turning API data into plain JSON files.`
  },
  {
    "title": "Dadbot Slack",
    "url": "https://github.com/HeyParkerJ/dadbot-slack",
    "description": "When my Fantasy Football league was using Slack, I wrote this bot to store information for bets we make and rules we want to propose next year, as the free tier of slack will delete messages after an amount of time."
  },
  {
    "title": "Bonus Round Website",
    "url": "https://github.com/HeyParkerJ/bonus-round-website",
    "description": "A brochure-ware static website for the late Barcade Bonus Round, based in Phoenix, AZ. Dynamically fetches the beer list from TapHunter and displays it."
  },
  {
    "title": "HeyParkerJ Frontend Boilerplate",
    "url": "https://github.com/HeyParkerJ/heyparkerj-frontend-boilerplate",
    "description": `I'm not a huge fan of everything you get when bootstrapping a project with Create-React-App, so I wrote and maintain my own minimal boilerplate for when I want to fire up a React project.`
  },
  {
    "title": "HeyParkerJ Nodejs boilerplate",
    "url": "https://github.com/HeyParkerJ/heyparkerj-nodejs-boilerplate",
    "description": "My base boilerplate project for when I want to fire up a nodejs project."
  },
  {
    "title": "Batch MegaDL",
    "url": "https://github.com/HeyParkerJ/batch_megadl",
    "description": "A very simple bash script to download a text file list of mega.nz files with megatools."
  },
  {
    "title": "Melee Video Sort",
    "url": "https://github.com/HeyParkerJ/summit_melee_video_sort",
    "description": `Someone on Reddit said "Sorting [the videos] into folders could be possible but is a lot of work, unless someone is down to write a script for it!". Needing something to do while washing down my coffee - I wrote that script.`
  },
  {
    "title": "Macro Calculator",
    "url": "https://github.com/HeyParkerJ/macro-calculator",
    "description": "After getting tired of online macro calculators, I wrote my own in an org-mode scratchpad to practice GOlang. I eventually broke that code out into this repo."
  },
  {
    "title": "React Cards Component",
    "url": "https://github.com/HeyParkerJ/react-cards-component",
    "description": "One of the first things I wrote in React, this is a simple Material Design-type card component."
  },
  {
    "title": "War (Card Game)",
    "url": "https://github.com/HeyParkerJ/war",
    "description": "A terminal based Java implementation of the card game War."
  },
  {
    "title": "Apartment Webscraper",
    "url": "https://github.com/HeyParkerJ/apartment-webscraper",
    "description": "Many years ago, I wanted to scrape the dynamic pricing of an apartment complex I was interested in living at to see if ceratin days/times were cheaper to sign the lease. This was my first and only Python project."
  },
  {
    "title": "Dotfiles",
    "url": "https://github.com/HeyParkerJ/dotfiles",
    "description": "My personal dotfiles. Emacs and Vim config, terminal, bash aliases, etc. Enables very quick setup of a new dev machine."
  },
  {
    "title": "HeyParkerJ",
    "url": "https://github.com/HeyParkerJ/heyparkerj",
    "description": "This website! Primarily used to display personal projects and share some details about myself."
  },
]

export default () => (
  <section className={styles.projects}>
    <ul className={styles.nav}>
      {projects.map((project) => {
        return <ProjectItem url={project.url} title={project.title} description={project.description} />
      })}
    </ul>
  </section>
)
