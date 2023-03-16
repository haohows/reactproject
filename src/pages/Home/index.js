import { useState } from 'react'

import Edit from './components/Edit';
import List from './components/List';
import './index.css';

const Home = () => {
    const [data, setData] = useState([])

    return <section className="wrap">
        <div className="app">
            <Edit />
            <List listData={data} />
        </div>
    </section>
}

export default Home