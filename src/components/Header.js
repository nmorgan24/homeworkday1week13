function Header(props) {
    return (
      <header className="Header" style={{ border: "3px solid black" }}>
        <div>
          <h1>Nyijia Morgan's Portfolio</h1>
          <a
            href="https://github.com/nmorgan24"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nyijia-morgan-2b293a262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>
    );
  }
  export default Header;