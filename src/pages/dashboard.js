import CardDisplay from "../components/cardDisplay"
const data = require('../data.json')

const Dashboard = () => {
    
    return (
        <div className='container'>
            <div className='row'>
            <div class='col-md-8'>
                <div class='row'>
                {  
                data.cards.map((card)=>
                    {
                        return <CardDisplay code={card.code}/>
                    }
                )
                }
                </div>
            </div>
        </div>        
        </div>
    )
}
export default Dashboard