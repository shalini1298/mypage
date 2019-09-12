import React from 'react';
 
export default class Form extends React.Component {
    state= {
      username:'',
      password:'',
}


change=e=> {
   this.setState({
    [e.target.name] : e.target.value
 });
};

onSubmit=e =>{
e.preventDefault();
console.log(this.state);
console.log(this.username);
console.log(this.password);
fetch('/api/login', {
   method: 'POST',
   body: this.state,
 });
};

render() {
    return (
<div>
   <h1>WELCOME!</h1>
       <form>
          <input 
         name="username"
          placeholder="Username" value={this.state.email}
          onChange={e => this.change(e)}
           />
         <br />
          <input
          name="password"
          type="password"  
           placeholder="password" value={this.state.password} 
           onChange={e=> this.change(e)}
           />
           <br />
        <button onClick={e => this.onSubmit(e)}>Submit </button>
      </form>
      </div>
);
}
}
