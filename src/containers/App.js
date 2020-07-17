import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBundary';

class App extends React.Component {
    constructor() {
        super()
        this.state = { // smart component
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json(); })
            .then(users => { this.setState({robots: users}) });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }

    render (){
        const fileterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if (this.state.robots.length == 0){
            return <h1> Loading </h1>
        }
        return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange } />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ fileterRobots } />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
export default App;