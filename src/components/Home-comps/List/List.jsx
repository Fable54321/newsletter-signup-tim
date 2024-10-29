import iconList from "../../../images/icon-list.svg";

const List = () => {
  return (
    <div>
      <ul>
        <div className="wrapper__card__list__list-items"><img src={iconList} alt="list icon"/><li><p>Product discovery and building what matters</p></li></div>
        <div className="wrapper__card__list__list-items"><img src={iconList} alt="list icon"/><li><p>Measuring to ensure updates are a success</p></li></div>
        <div className="wrapper__card__list__list-items"><img src={iconList} alt="list icon"/><li><p>And much more!</p></li></div>
      </ul>
    </div>
  );
}

export default List
