import * as React from 'react'
import data from '../data.json'


const game = (match) => {
    const { code } = match.params.code;
    console.log(code)
    console.log(data, match)
    let element = data.cards[code]
    console.log(element.src)
    return(
        <div className='container frame'>
            
            <iframe className="responsive-iframe col-md-12" title='Game' src={element.src} scrolling='no'></iframe>

        </div>
        )
}
export default game