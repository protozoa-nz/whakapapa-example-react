import React, { Component } from 'react'
import Person from './person'
import AddPerson from './addPerson'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { people: [] }
    this.addPerson = this.addPerson.bind(this)
    this.addRelationship = this.addRelationship.bind(this)
    this.addChild = this.addChild.bind(this)
  }

  addPerson (name) {
    var people = this.state.people

    // assumes people are sorted by id, lowest to highest.
    var nextId = people.length + 1
    people.push({ id: nextId, name, childrenIds: [] })
    this.setState({ people })
  }
  addRelationship (name, inRelationshipWithId) {
    var people = this.state.people
    var nextId = people.length + 1
    people.push({ id: nextId, name, childrenIds: [] })

    people[inRelationshipWithId - 1].partnerId = nextId

    this.setState({ people })
  }
  addChild (name, parentId) {
    var people = this.state.people
    var nextId = people.length + 1
    people.push({ id: nextId, name, childrenIds: [] })

    people[parentId - 1].childrenIds.push(nextId)

    this.setState({ people })
  }

  render () {
    return <div>
      <h1>Whakapapa</h1>
      <div>Click on a name to add..</div>
      {this.state.people.length === 0
        ? <AddPerson addPerson={this.addPerson} />
        : <Person people={this.state.people} id={1} addRelationship={this.addRelationship} addChild={this.addChild} />
      }
    </div>
  }
}

export default App
