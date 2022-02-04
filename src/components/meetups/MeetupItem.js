import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <figure className={classes.image}>
          <img src={props.image} alt="meherab" />
        </figure>
        <figcaption>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button>To Favorites</button>
          </div>
        </figcaption>
      </Card>
    </li>
  );
}

export default MeetupItem;
