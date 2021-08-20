import {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {

  const [ready, setReady] = useState('Button is not pressed')
  const [copied, setCopied] = useState([])
  let ready2 = "Button is pressed"
  
  const handleButton = () => {
    setReady(ready2)
  }
  return (
    <div className="App">
        <CopyToClipboard text={ready} onCopy={() => setCopied(true)}>
   <p>{ready}</p> 
      </CopyToClipboard>
    <br />
    <br />
    <br />
    <button onClick={handleButton}>Button</button>
    <br />
    <br />

    </div>
  );
}

export default App;
