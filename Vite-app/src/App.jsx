import React from 'react'
import './App.css'
import Hero from "./components/Hero"
import Main from "./components/Main"

export default function App(){
    const array = data.map(i => {
       
        return (
            <Main 
            key={i.id}
            item={i}
            />
        )
    })
 return (
     <>
    <Hero />
    <section>
    {array}
    </section>
    </>
)}