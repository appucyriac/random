import React, { Component } from 'react';
import { TextField} from 'rmwc/TextField';
import '../node_modules/material-components-web/dist/material-components-web.css';
import { Button } from 'rmwc/Button';
import DataTables from 'material-ui-datatables';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let TABLE_COLS = [
  {
    key: 'number',
    label: 'Number'
  },
  {
    key: 'name',
    label: 'Name',
    render: (name, all) => <TextField
         />
  },
  {
    key: 'friend',
    label: 'Friend'
  }],
    TABLE_DATA = [];
class Table extends Component {


constructor(props) {
super(props);
if(this.props.entered)
      {
      let count =this.props.count;
      while(count>0){
      let newValue={
          number:count
        }
        TABLE_DATA.push(newValue);
        count=count-1;
      }
    }
}

  render() {
    return (
      <div>
            <MuiThemeProvider> 
         		  <DataTables
  		        height={'auto'}
  		        selectable={false}
  		        columns={TABLE_COLS}
  		        data={TABLE_DATA}
  		        showCheckboxes={false}
  		      />
		      </MuiThemeProvider>
      </div>
    );
  }
}

export default Table;
