import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          我的站点 <span className="heart">♥️</span>
        </p>
        <p className="small">
          编辑 <code>src/App.jsx</code> 并保存以重新加载。
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            访问 React 官网
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
