import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Input, Icon} from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
class CostumTimePicker extends React.Component{
    constructor(){
        super();
        this.state={date:"Heure",showPicker:false,selected:new Date()}
    }
    onChange(date){
        if(date.type=="set"){
          const dt=Moment(date.nativeEvent.timestamp).format('hh:mm')
          this.setState({date:dt,selected:date.nativeEvent.timestamp,showPicker:false})
        }else{
          this.setState({showPicker:false})
        }
      }
    render(){
        return(
            <TouchableOpacity style={{width:"100%"}} onPress={()=> this.setState({showPicker:true})}>
                <Input placeholder={this.state.date} style={{fontSize:14}} disabled={true} leftIcon={<Icon name="clock" style={{paddingRight:10}} type="entypo" size={16} color="#00aeff"/>}  />
                {this.state.showPicker ? 
                <DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.selected}
                    is24Hour={false}
                    mode='time'
                    display='default'
                    
                    onChange={(date)=> this.onChange(date)}
                /> : null }
            </TouchableOpacity>
        )
    }
    
}
export default CostumTimePicker