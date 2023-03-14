import Edit from './components/Edit';
import List from './components/List';
import './index.css';

const Home = () => {
    return <section className="wrap">
        <div className="app">
            <Edit />
            <List />
        </div>
    </section>
}

export default Home