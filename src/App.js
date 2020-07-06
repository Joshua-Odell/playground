import React from 'react';
import './App.css';
import SplitCall from './Splits-Tags/SplitCall';
import Counter from './Counter/Counter';
import TheDate from './Time/TheDate';
import HelloWorld from './Drills/HelloWorld';
import Bomb from './Drills/Bomb';
import Roulette from './Drills/RouletteGun';
import Tabs from './Tabs/Tabs';
import tabsProp from './Tabs/tabsProp';
import Accordion from './state-drills/Accordion';
import sections from './state-drills/sections'


function App(){
  
  return(
    <div>
      <Accordion sections={sections} />
    </div>
  )
}

export default App;