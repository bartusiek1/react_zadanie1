import classes from './AppBody.module.css'
import StudentGradeTable from "./StudentGradeTable";

const AppBody = () => {
    return (
        <div className={classes.AppBody}>
            <StudentGradeTable/>
        </div>
    );
}

export default AppBody;