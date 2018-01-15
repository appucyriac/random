import React, { Component } from 'react';
import { TextField} from 'rmwc/TextField';
import '../node_modules/material-components-web/dist/material-components-web.css';
import { Button } from 'rmwc/Button';
import DataTables from 'material-ui-datatables';
import Table from './Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'
let TABLE_COLS = [],TABLE_DATA = [],indexArray=[],names=[];
class App extends Component {


constructor(props) {
 TABLE_COLS = [
  {
    key: 'number',
    label: 'Number'
  },
  {
    key: 'name',
    label: 'Name',
    render: (name, all) => <TextField onBlur={this.handleName.bind(this)}/>
  },
  {
    key: 'friend',
    label: 'Friend'
  }];
    super(props);
    this.state = {
                  count:0,
                  name:"",
                  Data:TABLE_DATA

                  };
    this.handleChange.bind(this);
    names=[];
    
}
handleChange(event){
	this.setState({count:event.target.value});

}
handleName(event){
names.push(event.target.value);
names=names.filter(Boolean);
}
handleSubmit(){
	TABLE_DATA=[];
  indexArray=[];
  names = Array.from(new Set(names));
	let count =this.state.count,index=0;
      while(index<count){
      
      let newValue={
          number:index,
          friend:0
        }
        TABLE_DATA.push(newValue);
        indexArray.push(index);
        index++;
  }
  TABLE_DATA.map(function(value){
  	  let 	randomValue=(Math.floor(Math.random()*(count)));
      while(indexArray[randomValue]==value.number){
      randomValue=(Math.floor(Math.random()*(count)));	
      }
      value.friend=names[randomValue];

      names.splice(randomValue,1);
      count--;
  })
  this.setState({Data:TABLE_DATA});
}

  render() {
    return (
      <div>
       <MuiThemeProvider> 
        <TextField label="Enter Count" onChange={this.handleChange.bind(this)}/>
        
        <DataTables
  		        height={'auto'}
  		        selectable={false}
  		        columns={TABLE_COLS}
  		        data={this.state.Data}
  		        showCheckboxes={false}
  		 />
	</MuiThemeProvider>
	<Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="assignButton" onClick={this.handleSubmit.bind(this)}>Assign randomly</Button>
    </div>
    );
  }
}

export default App;
