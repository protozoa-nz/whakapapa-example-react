import React, { Component } from 'react'
import Person from './person'
import AddPerson from './addPerson'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { people: [] }
    this.addPerson = this.addPerson.bind(this)
  }

  addPerson (person) {
    var people = this.state.people

    // assumes people are sorted by id, lowest to highest.
    var nextId = people.length + 1
    people.push({ id: nextId, name: person })
    this.setState({ people })
  }
  //    this.state = { people: [
  //
  //      { id: 1, name: 'Ali', relationship: [{ withId: 8, childrenIds: [2, 3] }] },
  //      { id: 2, name: 'Piet', childrenIds: [], partnerIds: [7] },
  //      { id: 3, name: 'Smith', childrenIds: [4, 5], partnerIds: [6] },
  //      { id: 4, name: 'Otis', childrenIds: [] },
  //      { id: 5, name: 'Ted', childrenIds: [] },
  //      { id: 6, name: 'Holly', childredIds: [4, 5], partnerIds: [3] },
  //      { id: 7, name: 'Katie', childredIds: [], partnerIds: [2] },
  //      { id: 8, name: 'Walt', childredIds: [], partnerIds: [2] }
  //
  //    ]
  //    }
  //  }

  render () {
    return <div>
      <h1>Welcome to {this.props.name}</h1>
      {this.state.people.length === 0
        ? <AddPerson addPerson={this.addPerson} />
        : <Person people={this.state.people} id={1} />
      }
    </div>
  }
}

export default App
