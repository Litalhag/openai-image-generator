import '../css/index.css'

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <h2>OpenAI Image Generator</h2>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a
                href="https://beta.openai.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenAI API Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header
