import classes from "./NavigationHeader.module.css";
import {Link} from "react-router-dom";


const NavigationHeader = () => {
    return (
        <header className={classes.AppHeader}>
            <div className={classes.PasekNawigacyjny}>
                <div className={classes.Lewa}>
                    <div className={classes.TextLewa}>
                        <p>SDA</p>
                    </div>
                </div>
                <div className={classes.Prawa}>
                    <div className={classes.TextPrawa}>
                        <p>ARPPL4</p>
                    </div>
                    <p>
                        <Link to={"/"}>Home</Link>
                    </p>
                    <p>
                        <Link to={"/list"}>List</Link>
                    </p>
                </div>
            </div>
        </header>
    );
}

    export default NavigationHeader;
