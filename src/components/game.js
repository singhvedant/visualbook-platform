import React from 'react'
const data = require('../data.json');

const game = (props) => {
    let code = Number(props.code) || 0
    let element = JSON.parse(data).cards[code]
    return(
        <div className='container frame'>
            
            <iframe className="responsive-iframe col-md-12" title='Game' src={element.src} scrolling='no'></iframe>

        </div>
        )
}
export default game