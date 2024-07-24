import profilePic from './assets/nellpic3.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="A picture of me" />
            <h2 className='card-title'>Nell Fonseca</h2>
            <p className='card-text'>Web Development Teaching Assistant and doll collector</p>

        </div>
    );

}
export default Card