function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My React Website</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <h2>Welcome to My Website</h2>
        <p>
          This is a simple React website created with CSS.
        </p>
        <button>Learn More</button>
      </main>

      <footer className="footer">
        <p>© 2026 My React Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;