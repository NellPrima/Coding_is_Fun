import profilePic from './assets/picofme2.jpg'
function Card(){
    return(
        
        <div className="card">
            <img className='cardimg' src={profilePic} alt="picture of chanell"></img>
            <h2 className='card-title'>Nell Fonseca</h2>
            <p className='card-text'>Frontend Developer who collects dolls</p>

        </div>

         
    );

}

export default Card