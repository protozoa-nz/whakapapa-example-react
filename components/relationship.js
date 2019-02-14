import React, { Component } from 'react'
import AddChild from './addChild'
import Person from './person'

class Relationship extends Component {
  constructor (props) {
    super(props)
    this.state = { selected: false }
  }
  render () {
    return <div >
      <h3>In a relationship with {this.props.partner.name}</h3>
      {this.state.selected
        ? <AddChild addChild={(name) => {
          this.props.addChild(name, this.props.owner.id)
          this.setState({ selected: false })
        }} />
        : <div onClick={() => this.setState({ selected: true })}>Click to add a child</div>
      }
      {this.props.childrenIds.length > 0 && (
        <ul>
          {this.props.childrenIds.map((childId) => {
            return <li key={childId}>
              <Person people={this.props.people} id={childId} addRelationship={this.props.addRelationship} addChild={this.props.addChild} />
            </li>
          })
          }

        </ul>
      )}
    </div>
  }
}

export default Relationship
