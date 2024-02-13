import { useState } from 'react';
import './App.css';

function App() {
    let [usdat, setusdat] = useState();
    let [dispyear, setdispyear] = useState('0');
    let [dispmonth, setdispmonth] = useState('0');
    let [dispweek, setdispweek] = useState('0');
    let [dispdays, setdispdays] = useState('0');
    let [disphours, setdisphours] = useState('0');
    let [dispminits, setdispminits] = useState('0');
    let [dispseconds, setdispseconds] = useState('0');
    let [dispmiliseconds, setdispmiliseconds] = useState('0');
    const date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth();
    month++;
    let dat = date.getDate();
    if (month < 10) {
        month = '0' + month
    }
    if (dat < 10) {
        dat = '0' + dat
    }

    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    const get = () => {
        let toda = 0, toya = 0, temp = 0;
        setusdat(String(usdat))
        let useryear = usdat.substring(0, 4);
        let usermonth = usdat.substring(5, 7);
        let userdate = usdat.substring(8, 10);
        userdate = Number(userdate)
        usermonth = Number(usermonth)
        useryear = Number(useryear)
        dat = Number(dat)
        month = Number(month)
        year = Number(year)

        if (useryear > year) {
            alert('enter valid date');
            console.log("1")
        }

        else if (useryear == year) {
            if (usermonth > month) {
                alert('enter valid date');
                console.log("2.1")
            }
            else if (usermonth == month) {
                if (userdate > dat) {
                    alert('enter valid date');
                    console.log("2.2.1")
                }
                else {
                    toda = dat - userdate;
                    console.log("2.2.2")
                }
            } else if (usermonth == month - 1) {
                toda = dat;
                console.log("this month days " + toda);
                console.log("this - 1 month days " + (days[usermonth - 1] - userdate));
                console.log("2.3")
            }
            else {
                toda = dat;
                toda = toda + (days[usermonth - 1] - userdate);
                for (let i = usermonth + 1; i < month; i++) {
                    toda += days[i - 1];
                }
                console.log("2.4")
            }
        }

        else {
            toda = dat;
            toda = toda + (days[usermonth - 1] - userdate);
            if (useryear != year - 1) {
                for (let i = useryear + 1; i < year; i++) {
                    toda += 365;
                }
            }
            for (let i = usermonth + 1; i <= 12; i++) {
                toda += days[i - 1];
            }
            for (let i = 1; i < month; i++) {
                toda += days[i - 1];
            }
            console.log("Num 3")
        }
        console.log("Year = " + (toda / 365))
        console.log("Month = " + (toda / 365) * 12)
        console.log("Week = " + (toda / 7))
        console.log("Days = " + (toda))
        console.log("Hours = " + (toda * 24))
        console.log("Minits = " + (toda * 24 * 60))
        console.log("Seconds = " + (toda * 24 * 60 * 60))
        console.log("Miliseconds = " + (toda * 24 * 60 * 60 * 1000))
        setdispyear(Math.floor(toda / 365))
        setdispmonth(Math.floor(toda / 365 * 12))
        setdispweek(Math.floor(toda / 7))
        setdispdays(toda)
        setdisphours(toda * 24)
        setdispminits(toda * 24 * 60)
        setdispseconds(toda * 24 * 60 * 60)
        setdispmiliseconds(toda * 24 * 60 * 60 * 1000)
    }
    return (
        <>
            <table>
                <tr>
                    <td>Select Today date</td>
                    <td><input type="date" value={year + '-' + month + '-' + dat} /></td>
                </tr>
                <tr>
                    <td>Select Birth date</td>
                    <td><input type="date" onChange={(e) => { setusdat(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td colSpan={2}><input type="button" onClick={get} value='Click' /></td>
                </tr>
            </table>

            <table>
                <caption>Result</caption>
                <tr>
                    <td>Year : {dispyear}</td>
                </tr>
                <tr>
                    <td>Month : {dispmonth}</td>
                </tr>
                <tr>
                    <td>Week : {dispweek}</td>
                </tr>
                <tr>
                    <td>Days : {dispdays}</td>
                </tr>
                <tr>
                    <td>Hours : {disphours}</td>
                </tr>
                <tr>
                    <td>Minits : {dispminits}</td>
                </tr>
                <tr>
                    <td>Seconds : {dispseconds}</td>
                </tr>
                <tr>
                    <td>Miliseconds : {dispmiliseconds}</td>
                </tr>
            </table>
        </>
    );
}

export default App;
