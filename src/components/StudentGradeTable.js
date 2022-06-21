import classes from './StudentGradeTable.module.css'
import {Grid} from "@mui/material";
import {useState} from "react";

const rekordy = [
    {
        "id": 1,
        "ocena": 5.5,
        "przedmiot": "MATEMATYKA",
        "opis": "Zdał odpytkę",
        "student": "Pawel Gawel",
        "nauczyciel": "Facetka"
    },
    {
        "id": 2,
        "ocena": 3.5,
        "przedmiot": "MATEMATYKA",
        "opis": "Sprawdzian z 10.10.2020",
        "student": "Pawel Gawel",
        "nauczyciel": "Facetka"
    },
    {
        "id": 3,
        "ocena": 2.5,
        "przedmiot": "FIZYKA",
        "opis": "Sprawdzian z 1.10.2020",
        "student": "Olek Toporek",
        "nauczyciel": "Marian"
    },
    {
        "id": 4,
        "ocena": 3.0,
        "przedmiot": "FIZYKA",
        "opis": "Sprawdzian z 1.10.2020",
        "student": "Olek Toporek",
        "nauczyciel": "Janusz"
    },
    {
        "id": 5,
        "ocena": 3.5,
        "przedmiot": "FIZYKA",
        "opis": "Sprawdzian z 2.10.2020",
        "student": "Ela Trela",
        "nauczyciel": "Marian"
    }
]

const StudentGradeTable = () => {
    const [students, setStudents] = useState(rekordy)

    const deleteStudent = (studentId) => {
        console.log('Usuwamy studenta: ' + studentId)

        for (let i = 0; i < students.length; i++) {

            if(students[i].id === studentId) {
                students.splice(i,1);
            }
        }
        // kopiowanie elementów tablicy do nowej tablicy
        // ustawianie nowej tablict jako aktualnej (aby react odświeżyłekran)

        setStudents([...students]);
    }

    return (
        <div className={classes.StudentGradeTable}>
            <Grid container className={classes.NaglowekTabeli}>
                <Grid item xs={1}>Lp.</Grid>
                <Grid item xs={1}>Ocena</Grid>
                <Grid item xs={2}>Przedmiot</Grid>
                <Grid item xs={3}>Opis</Grid>
                <Grid item xs={2}>Student</Grid>
                <Grid item xs={2}>Nauczyciel</Grid>
                <Grid item xs={1}/>
            </Grid>
            <Grid container className={classes.NaglowekOdstep}>
            </Grid>
            <Grid container className={classes.TabelaRekordy}>
                {
                    students.map((student) => {
                        return (
                            <Grid container className={classes.RekordTabeli}>
                                <Grid item xs={1}>{student.id}</Grid>
                                <Grid item xs={1}>{student.ocena}</Grid>
                                <Grid item xs={2}>{student.przedmiot}</Grid>
                                <Grid item xs={3}>{student.opis}</Grid>
                                <Grid item xs={2}>{student.student}</Grid>
                                <Grid item xs={2}>{student.nauczyciel}</Grid>
                                <Grid item xs={1}>
                                <button onClick={()=>{
                                    deleteStudent(student.id)
                                }}>Delete</button>
                            </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default StudentGradeTable; 