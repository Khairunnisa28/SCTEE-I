import React, { useState } from 'react';
import Form from './component/Form';
import './App.css'

function Greeting(props){
  return(
    <h2>Hello my name is {props.name}</h2>
  )
}

function App() {
  const [hitung, setHitung] = useState(0);

  const tambahState = () =>{
    setHitung(hitung+1)
  }
  const kurangState = () =>{
    if (hitung > 0){
      setHitung(hitung-1)
    } else{
      alert("Pengurangan State Telah Mencapai Batas")
    }
  }
  return (
    <div className='App'>
      <Greeting name="Nida"/>
      <Form/>
      <h1>Hitung State</h1>
      <h3>Nilai State Sekarang: {hitung}</h3>
      <p>*nilai state tidak boleh minus</p>
      <button onClick={tambahState}>Tambah State</button>
      <button onClick={kurangState}>Kurang State</button>
    </div>
  )
}

export default App
