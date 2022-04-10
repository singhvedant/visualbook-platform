import React from 'react'
const Nav = () => {
    return (
        <header className='navbar'>
        <div className='navbar__title navbar__item'><a href='/about'>FunLearn</a></div>
        <div className='navbar__item'><a href='/'>Learn</a></div>
        <div className='navbar__item'><a href='/contacts'>Contact</a></div>
    </header>
        )
}
export default Nav