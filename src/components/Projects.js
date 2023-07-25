import React from "react";
import YuGiFinder2 from "../img/YuGiFinder2.png";
import YuGiStore1 from "../img/YuGiStore1.png";

const Projects = () => {
    return (
      <div className="Projects">
        <div className="ProjectCard" style={{ border: "3px solid black" }}>
          <h3>Yu-Gi-Finder</h3>
          <p>
          Introducing an innovative project that brings Yugioh cards to life with a simple search. users can enter the name of any Yugioh card in the search bar, and in an instant, a vibrant image of the Yugioh card with its attributes will appears, Immerse yourself in the world of Yugioh cards and discover new visual wonders with every search.
          </p>
          <div>
            <a
              href="https://github.com/nmorgan24/project1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://project1-evdj.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Site
            </a>
          </div>
          <img src={YuGiFinder2} alt="Screenshot of YuGiFinder" />
        </div>
  
        <div className="ProjectCard" style={{ border: "3px solid black" }}>
          <h3>Yu-Gi-Store</h3>
          <p>
          Welcome to Yu-Gi-Store, the ultimate digital haven for Yu-Gi-Oh card collectors! Yu-Gi-Store is a user-friendly website that enables users to create an account, login, and effortlessly store and save their list of Yu-Gi-Oh cards. As a passionate collector, you can now organize and manage your cherished collection in one convenient online space. Upon creating a secure account, users gain access to a personalized dashboard where they can meticulously categorize and curate their Yu-Gi-Oh cards based on their own preferences. Whether you want to sort your cards by rarity, archetype, or edition, Yu-Gi-Store offers intuitive tools to streamline the process. From uploading card images to inputting detailed card information, you can ensure that your collection is accurately documented and beautifully showcased. Need to find a specific card? Yu-Gi-Store's robust search and filtering capabilities make it a breeze to locate and access any card in your collection. Rest assured, your valuable Yu-Gi-Oh cards are securely stored and protected. Join Yu-Gi-Store today and experience the joy of preserving and managing your treasured Yu-Gi-Oh collection with ease!
          </p>
          <div>
            <a
              href="https://github.com/nmorgan24/project2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://yu-gi-storee.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Site
            </a>
          </div>
          <img src={YuGiStore1} alt="Screenshot of YuGiStore" />
        </div>
      </div>
    );
  };
  
  export default Projects;