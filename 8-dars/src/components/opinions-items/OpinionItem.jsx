import "./opinionitem.css";
import OpinionImg from "../../assets/opinions_img.svg";
// eslint-disable-next-line react/prop-types
export const OpinionItems = ({ name, text }) => {
    return (
        <div className="opinions__item">
            <img
                className="opinions__img"
                src={OpinionImg}
                alt="image of user"
            />
            <h3 className="opinions__sub_title">{name}</h3>
            <p className="opinions__text">{text}</p>
        </div>
    );
};
