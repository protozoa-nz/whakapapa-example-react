import React, { Component } from 'react'

class Person extends Component {
  constructor (props) {
    super(props)
    this.state = { selected: false, id: props.id, people: props.people, unions: props.unions }
  }

  render () {
    var me = this.state.people.find((person) => person.id === this.state.id)

    return <div>
      <h2>{me.name}</h2>
      {me.partnerIds && me.partnerIds.length > 0 && !this.state.isPartner && (
        <div>
          <h3>Partners: </h3>
          <ul>
            <ul>
              {me.partnerIds.map(partnerId => <li key={partnerId}>
                <Person people={this.state.people} id={partnerId} isPartner />
              </li>
              )}
            </ul>
          </ul>
        </div>

      )}
      {me.childrenIds && me.childrenIds.length > 0 && !this.state.isPartner && (
        <div>
          <h3>Children: </h3>
          <ul>
            {me.childrenIds.map(childId => <li key={childId}>
              <Person people={this.state.people} id={childId} />
            </li>
            )}
          </ul>
        </div>
      )}
    </div>
  }
}

export default Person
