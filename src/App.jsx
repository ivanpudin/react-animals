import React, { Component } from 'react'
import { animals } from './animalsList'
import './App.css'
import Header from './Header'
import Animals from './Animals'
import Search from './Search'

class App extends Component {
    state = {
        animals:animals,
        searchInput:''
    }

    searchHandler = (e) => {
        this.setState({
            searchInput:e.target.value
        })
    }

    removeHandler = (name) => {
        const result = this.state.animals.filter(animal => animal.name !== name)
        this.setState({
            animals:result
        })
        console.log(result)
    }

    likesHandler = (name, action) => {
        this.setState((prevState) => {
            // eslint-disable-next-line array-callback-return
            const result = prevState.animals.map((animal) => {
                if (animal.name === name) {
                    if (action === 'add') {
                        return {...animal, likes:animal.likes + 1}
                    } else if (action === 'remove') {
                        return {...animal, likes:animal.likes - 1}
                    }
                } else {
                    return animal
                }
            })
            return {
                animals:result
            }
        })
    }
    
    render() {
        return (
            <div className="App">
                <Header />
                <Search
                searchHandler={this.searchHandler} />
                <Animals
                data={this.state.animals}
                removeHandler={this.removeHandler}
                likesHandler={this.likesHandler}
                searchInput={this.state.searchInput} />
            </div>
        )
    }
}

export default App
