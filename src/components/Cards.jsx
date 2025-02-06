import PropTypes from "prop-types"
import style from "./Cards.module.css"

const Cards = ({title, price, image}) => {
  return (
    <>
      <div className="">
        <img src={image} alt="Loading..." style={{width : "150px", height: "150px"}}/>
        <div className={style.cards_body}>
          <div className="title">{title}</div>
          <div className="price">{price}</div>
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
    title : PropTypes.string,
    price : PropTypes.number,
    image : PropTypes.array
}

export default Cards;
