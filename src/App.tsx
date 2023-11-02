import { useState } from 'react';
import './App.css'
import NavBar from './components/HOC/nav_bar';
import PokemonList from './components/HOC/pokemon_list';
import SubHeader from './components/HOC/sub_header';
function App() {
  return (
    <>
      <main className='bg-primary-300 w-full h-100 min-h-full'>
        <NavBar />
        <SubHeader />
        <PokemonList  />
      </main>
    </>
  )
}

export default App
