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
          name:names[index],
          number:index,
          friend:0
        }
        TABLE_DATA.push(newValue);
        indexArray.push(index);
        index++;
  }
  
  this.setState({Data:TABLE_DATA});
}
handleAssign(){
  
  let count =this.state.count,index=0;
  TABLE_DATA.map(function(value){
    value.name=names[index]
    index++;
  })
  TABLE_DATA.map(function(value){
    let slicedNames=names.slice(0);
    let sliceIndex=slicedNames.indexOf(value.name);
    if(sliceIndex>=0)
    {slicedNames.splice(sliceIndex,1);}
    let   randomValue=(Math.floor(Math.random()*(slicedNames.length)));
      value.friend=slicedNames[randomValue];
      let randomIndex=names.indexOf(slicedNames[randomValue]);
      names.splice(randomIndex,1);

      
      indexArray.splice(randomValue,1);
  })
  this.setState({Data:TABLE_DATA});
  }
  render() {
    return (
      <div>
       <MuiThemeProvider> 
        <TextField label="Enter Count" onChange={this.handleChange.bind(this)}/>
        <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="submitButton" onClick={this.handleSubmit.bind(this)}>Submit</Button>

        
        <DataTables
  		        height={'auto'}
  		        selectable={false}
  		        columns={TABLE_COLS}
  		        data={this.state.Data}
  		        showCheckboxes={false}
  		 />
	</MuiThemeProvider>
	<Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="assignButton" onClick={this.handleAssign.bind(this)}>Assign randomly</Button>
    </div>
    );
  }
}

export default App;
