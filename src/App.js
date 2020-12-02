import React, { useEffect, useState } from 'react'

import { firebase } from './utils'


const App = () => {
  const [temp, setTemp] = useState(0)
  useEffect(() => {
    firebase.db.ref('cpu').on('value', snapshot => {
      setTemp(snapshot.val()?.temperature)
    });

  }, [])

  return (
  <div>CPU Temp: {temp}</div>
  );
}

export default App;
