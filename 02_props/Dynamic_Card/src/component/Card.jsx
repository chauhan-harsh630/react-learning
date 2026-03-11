import PropTypes from "prop-types";
function Card({name,bio,profession,image}) {
    return (
        <>
            <div className="card">
                <img src={image} className="card-img" alt="" />
                <h2>{name}</h2>
                <p>{bio}</p>
                <p>{profession}</p>
                <a href="https://www.instagram.com/the_cyberpath/">Follow</a>
            </div>        
        </>
    )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Card;