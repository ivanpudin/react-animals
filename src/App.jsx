import React, { Component } from 'react'
import { animals, birds } from './data/animalsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './UI/App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import Search from './components/Search'
import Animals from './components/Animals'
import Birds from './components/Birds'
import About from './components/About'

class App extends Component {
    state = {
        animals:animals,
        birds:birds,
        searchInput:''
    }

    searchHandler = (e) => {
        this.setState({
            searchInput:e.target.value
        })
    }

    removeHandlerAnimals = (name) => {
        const result = this.state.animals.filter(animal => animal.name !== name)
        this.setState({
            animals:result
        })
    }

    removeHandlerBirds = (name) => {
        const result = this.state.birds.filter(bird => bird.name !== name)
        this.setState({
            birds:result
        })
    }

    likesHandlerAnimals = (name, action) => {
        this.setState((prevState) => {
            // eslint-disable-next-line array-callback-return
            const result = prevState.animals.map(animal => {
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

    likesHandlerBirds = (name, action) => {
        this.setState((prevState) => {
            // eslint-disable-next-line array-callback-return
            const result = prevState.birds.map(bird => {
                if (bird.name === name) {
                    if (action === 'add') {
                        return {...bird, likes:bird.likes + 1}
                    } else if (action === 'remove') {
                        return {...bird, likes:bird.likes - 1}
                    }
                } else {
                    return bird
                }
            })
            return {
                birds:result
            }
        })
    }
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/animals' element={
                            <div className='animals_container'>
                                <Header>
                                    <Nav
                                    animals={this.state.animals}
                                    birds={this.state.birds} />
                                </Header>
                                <Search
                                searchHandler={this.searchHandler} />
                                <Animals
                                data={this.state.animals}
                                removeHandler={this.removeHandlerAnimals}
                                likesHandler={this.likesHandlerAnimals}
                                searchInput={this.state.searchInput} />
                            </div>
                        } />
                        <Route path='/birds' element={
                            <div className='birds_container'>
                                <Header>
                                    <Nav
                                    animals={this.state.animals}
                                    birds={this.state.birds} />
                                </Header>
                                <Search
                                searchHandler={this.searchHandler} />
                                <Birds
                                data={this.state.birds}
                                removeHandler={this.removeHandlerBirds}
                                likesHandler={this.likesHandlerBirds}
                                searchInput={this.state.searchInput} />
                            </div>
                        } />
                        <Route path='/about' element={
                            <div className='about_container'>
                                <Header>
                                    <Nav
                                    animals={this.state.animals}
                                    birds={this.state.birds} />
                                </Header>
                                <About />
                            </div>
                        } />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
