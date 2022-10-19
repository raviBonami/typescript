
import {Greet} from './components/Greet'
import {Person} from './components/Person'
import {PersonList} from './components/PersonList'
import {Status} from './components/Status'
import {Heading} from './components/Heading'
import {Subheader} from './components/Subheader'
import {Button} from './components/Button'
import {Input} from './components/Input'
import {ThemeContextProvider} from './components/state/context/ThemeContext'
import {Box} from './components/state/context/Box'
import CounterClass from './components/class/CounterClass'
import {User} from './components/state/context/User'
import {UserContextProvider} from './components/state/context/UserContext'
import {Private} from './components/class/auth/Private'
import {Profile} from './components/class/auth/Profile'
import {List} from './components/generics/List'
import {RandomNumber} from './components/restriction/RandomNumber'
import {Toast} from './components/templateLiteral/Toast'
import {Button2} from './components/HTML/Button2'


import './App.css';

function App() {
  const name = {
    first: "Mark",
    last: "Henry"
  }

  const nameList = [
    {
      first:"abc",
      last:"xyz"
    },
    {
      first:"pqr",
      last:"jkl"
    },
    {
      first:"mno",
      last:"stu"
    }

  ]
  return (
    <div className="App">
      <Greet name="ABC" messageCount={20} isLoggedin={true} />
      <Person name={name}/>
      <PersonList names={nameList}  />
      <Status status="success"/>
      <Heading>Placeholder text</Heading>
      <Subheader>
        <Heading>Sub heading is passed </Heading>
      </Subheader>
      <Button handleClick={(event, id) => {
        console.log('Button clicked ', event, id)
      }} />

      <Input value="" handleChange={(event) => {
        console.log(event)
      }} />

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <CounterClass message="This is a message" />

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Private isLoggedIn={true} component={Profile} />

      <List 
        items={['Dog','Cat','Cow']} 
        onClick={(item) => console.log(item)}
      />

      <RandomNumber value={10} isPositive={true} />
      <Toast position='center' />
      <Button2 variant='primary' onClick={() => console.log('Clicked')} />
    </div>
  );
}

export default App;
