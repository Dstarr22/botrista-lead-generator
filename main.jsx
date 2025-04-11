import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Botrista Lead Generator</h1>
      <p>Welcome! We’ll add your full lead system here.</p>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
