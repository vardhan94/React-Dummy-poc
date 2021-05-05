import React from 'react';
import history from './history';
import {withRouter} from 'react-router-dom';





function App(props) {

  const [valid, setValid] = React.useState(false);


const handleLogin = (event) => {
  event.preventDefault();
if(event.target.elements[1].value === 'harsh123') {
history.push('/home');
}
else setValid(true);
}

  return (
    <div className="App">
      {valid ? 
      <>
      <h1>Incorrect username or password!!!!</h1>
      </>
      :
      <>
      <h1>Harsh React App</h1>
     <form onSubmit={e => handleLogin(e)}>
       Username: 
       <input type="text" label="Username" /><br/><br/>
       password: 
       <input type="password" />
       <br/><br/>
       <input type="submit" />
       </form>
       </>
}

    </div>
  );
}


export default withRouter(App);

