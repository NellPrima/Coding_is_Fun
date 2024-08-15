import ninaPic from './assets/nina.jpg'
function Card(){
    return(
        <div className="card2">
            <img className='cardimgs' src={ninaPic} alt="picture of nina"></img>
            <h2 className='card-titles'>Nina Fonseca</h2>
            <p className='card-texts'>A smelly butt head!</p>

        </div>
    );

}

export default Card