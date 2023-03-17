
import { useState } from 'react';



const Edit = ({ add }) => {
    const [note, setNote] = useState("")
    const noteChange = (e) => setNote(e.target.value)
    const addItem = () => add([1, 2, 3])

    return <div>
        <h1>備忘錄</h1>
        <p>記事：</p>
        <input type="text" value={note} onChange={noteChange} />
        <p>日期：</p>
        <input type="date" />
        <p>時間：</p>
        <input type="time" />
        <button className="add" onClick={addItem}>新增</button>
    </div>
}

export default Edit