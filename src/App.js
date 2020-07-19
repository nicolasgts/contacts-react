import React, {Component} from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts

    return (
        <ol>
          {people.map((person) => (
              <li key={person.name}> {person.name}</li>
          ))}
        </ol>
    )
  }
}




function App() {
  return (
    <div className="App">
      <ContactList contacts={[
        {name: 'Nicolas'},
        {name: 'Joana'},
        {name: 'João'}
      ]} />

      <ContactList contacts={[
        {name: 'User 1'},
        {name: 'User 2'},
        {name: 'User 3'}
      ]} />
    </div>
  );
}

export default App;
