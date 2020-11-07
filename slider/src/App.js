import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Slider from './components/Slider/Slider';

// Я только начал изучать React, поэтому даже не смог полностью перенести 
// свой свайпер с чистого Js, потому что запутался в лисенерах и Virtual DOM.

// Сделал максимальной примитивный слайдер (без свайпов) используя hidden, прошу прощения, 
// что и так затянул дедлайн.
// Можно было бы дать id в state для каждого slide, 
// чтобы не было обратной прокрутки и вызывать каждый слайд по id.Но тогда не 
// было бы анимации прокрутки. 


function App(props) {
  return (
    <BrowserRouter>
      <main className="App">
        <Slider state={props.state}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
