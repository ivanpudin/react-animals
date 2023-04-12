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

    removeHandler = (name, list) => {
        const result = this.state[list].filter(item => item.name !== name)
        this.setState({
            [list]:result
        })
    }

    likesHandler = (name, action, list) => {
/*         this.setState(prevState => {
            const result = prevState[list].map(item => {
                if (item.name === name) {
                    if (action === 'add') {
                        return {...item, likes:item.likes + 1}
                    } else if (action === 'remove') {
                        return {...item, likes:item.likes - 1}
                    }
                } else {
                    return item
                }
            })
            return {
                [list]:result
            }
        }) */

        // eslint-disable-next-line array-callback-return
        const result = this.state[list].map(item => {
            if (item.name === name) {
                if (action === 'add') {
                    return {...item, likes:item.likes + 1}
                } else if (action === 'remove') {
                    return {...item, likes:item.likes - 1}
                }
            } else {
                return item
            }
        })

        this.setState(() => {
            return {
                [list]:result
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
                                    data={this.state} />
                                </Header>
                                <Search
                                searchHandler={this.searchHandler} />
                                <Animals
                                data={this.state.animals}
                                removeHandler={this.removeHandler}
                                likesHandler={this.likesHandler}
                                searchInput={this.state.searchInput} />
                            </div>
                        } />
                        <Route path='/birds' element={
                            <div className='birds_container'>
                                <Header>
                                    <Nav
                                    data={this.state} />
                                </Header>
                                <Search
                                searchHandler={this.searchHandler} />
                                <Birds
                                data={this.state.birds}
                                removeHandler={this.removeHandler}
                                likesHandler={this.likesHandler}
                                searchInput={this.state.searchInput} />
                            </div>
                        } />
                        <Route path='/about' element={
                            <div className='about_container'>
                                <Header>
                                    <Nav
                                    data={this.state} />
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
