import {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {

  const [ready, setReady] = useState('Button is not pressed')
  const [copied, setCopied] = useState(false)
  let ready2 = "Button is pressed"
  
  const handleButton = () => {
    setReady(ready2)
  }
  return (
    <div className="App">
        <CopyToClipboard text={ready} onCopy={() => setCopied(true)}>
        <button id='reg'>  <p>button</p> </button>
      </CopyToClipboard>

      {copied ? <p style={{ color: "blue" }}>Copied text.</p> : null}

    <br />
    <br />
    <br />
    <button onClick={handleButton}>Button</button>
    <br />
    <br />
<p>By Hemit!</p>
    </div>
  );
}

export default App;
