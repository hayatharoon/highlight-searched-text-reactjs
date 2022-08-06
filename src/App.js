import React, { useState } from 'react';
import './App.css';

function App() {
  const initialText =
    'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality';
  const text = useState(initialText);

  function handleChange(event) {
    let value = event.target.value;
    let txt = document.getElementById('myText');
    txt.innerHTML = txt.innerText.replaceAll(value, `<span style="background: yellow">${value}</span>`);
  }
  return (
    <div className='App'>
      <div className='card'>
        <input type='text' placeholder='Enter text to search' onChange={handleChange} />
        <p id='myText'>{text[0]}</p>
      </div>
    </div>
  );
}

export default App;


