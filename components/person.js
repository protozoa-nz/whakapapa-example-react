import React, { Component } from 'react'
import AddRelationship from './addRelationship'
import Relationship from './relationship'

class Person extends Component {
  constructor (props) {
    super(props)
    this.state = { selected: false }
  }

  render () {
    var me = this.props.people.find(person => person.id === this.props.id)
    var myPartner = this.props.people.find(person => person.id === me.partnerId)

    return <div onClick={() => { this.setState({ selected: true }) }}>
      <h2>{me.name}</h2>
      {this.state.selected && !myPartner &&
        <AddRelationship addRelationship={(name) => {
          this.props.addRelationship(name, this.props.id)
          this.setState({ selected: false })
        }} />
      }
      {myPartner && (
        <Relationship people={this.props.people} owner={me} partner={myPartner} addChild={this.props.addChild} childrenIds={me.childrenIds} addPerson={this.props.addPerson} addRelationship={this.props.addRelationship} />
      )}
    </div>
  }
}

export default Person
