import CardDisplay from "../components/cardDisplay"
const Dashboard = () => {
    return (
        <div className='container'>
            <div className='row'>
            <div className="col-md-2 bg-light">
                <h6 className='display-6 text-primary text-center'>Tags</h6>
                
            </div>
            <div class='col-md-8'>
                <ul class='cardHolder'>
                    <CardDisplay/>
                </ul>
            </div>
        </div>        
        </div>
    )
}
export default Dashboard