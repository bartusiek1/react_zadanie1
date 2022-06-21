import classes from './AppBody.module.css'
import StudentGradeTable from "./StudentGradeTable";
import {Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";


const AppBody = () => {
    return (
        <div className={classes.AppBody}>
            <Routes>
                <Route path={"/list"} element={<StudentGradeTable/>}/>
                <Route path={"/"} element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default AppBody;