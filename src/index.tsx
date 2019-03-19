import * as React from 'react'
import { render } from 'react-dom'
import { Bearer } from '@bearer/react'

import { CLIENT_ID } from './constants'
import { Connect } from './integration.tsx'
import './styles.css'

function App() {
  return (
    <Bearer clientId={CLIENT_ID}>
      <div className="App">
        <h1>Welcome to Bearer</h1>
        <p>Start editing integration.tsx</p>
        <Connect
          render={({ connect }) => {
            return <button onClick={connect}>Connect</button>
          }}
        />
      </div>
    </Bearer>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
