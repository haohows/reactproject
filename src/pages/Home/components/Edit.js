
import { useState } from 'react';

const Edit = ({ add }) => {
    const [note, setNote] = useState("")
    const noteChange = (e) => setNote(e.target.value)

    const [date, setDate] = useState("")
    const dateChange = (e) => setDate(e.target.value)

    const [time, setTime] = useState("")
    const timeChange = (e) => setTime(e.target.value)

    // console.log(note, date, time)
    // const addItem = () => add((prevData) => {
    //     return [...prevData, { note, date, time }]

    // })

    // const addItem = () => add((prevData) => {
    //     return [...prevData, { note, date, time }]

    // })


    function addItem() {
        add(function (prevData) {
            return [...prevData, { note, date, time }]
        }) 
    }



    return <div>
        <h1>備忘錄</h1>
        <p>記事：</p>
        <input type="text" value={note} onChange={noteChange} />
        <p>日期：</p>
        <input type="date" value={date} onChange={dateChange} />
        <p>時間：</p>
        <input type="time" value={time} onChange={timeChange} />
        <button className="add" onClick={addItem}>新增</button>
    </div>
}

export default Edit