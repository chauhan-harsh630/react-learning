import image from '../assets/image.png';
import '../App.css'
function ProfileCard() {
    return (<>
        <div className="card">
            <img src={image} alt="image" />
            <h2>Harsh Chauhan</h2>
            <p>BCA Student. Future Software Engineer.</p>
            <button>Follow</button>
        </div>
    </>);

}
export default ProfileCard;