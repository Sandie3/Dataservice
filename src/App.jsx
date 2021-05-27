import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header';

import Home from './pages/Home'
import Monarker from './pages/Monarker'
import Monark from './pages/Monark'
import MonarkEdit from './pages/MonarkEdit'
import Create from './pages/MonarkCreate'
import Search from './pages/MonarkSearch'
import Admin from './pages/MonarkAdmin'
import News from './pages/News'
import Weather from './pages/Weather'

import './App.scss';
const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/monarker" component={Monarker} />
                    <Route exact path="/monark/:id" component={Monark} />
                    <Route exact path="/edit/:id" component={MonarkEdit} />
                    <Route exact path="/create" component={Create} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/weather" component={Weather} />
                </Switch>
            </main>
        </Router>
    )
}

export default App;
