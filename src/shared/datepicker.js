import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Input, Icon} from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
class CostumDatePicker extends React.Component{
    constructor(){
        super();
        this.state={date:"Date souhaitée",showPicker:false,minDate:new Date(),selected:new Date()}
    }
    onChange(date){
        if(date.type=="set"){
          const dt=Moment(date.nativeEvent.timestamp).format('D-MM-y')
          this.setState({date:dt,selected:date.nativeEvent.timestamp,showPicker:false})
        }else{
          this.setState({showPicker:false})
        }
      }
    render(){
        return(
            <TouchableOpacity style={{width:"100%"}} onPress={()=> this.setState({showPicker:true})}>
                <Input placeholder={this.state.date} style={{fontSize:14}} disabled={true} leftIcon={<Icon name="calendar" style={{paddingRight:10}} type="entypo" size={16} color="#00aeff"/>}  />
                {this.state.showPicker ? 
                <DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.selected}
                    minimumDate={this.state.minDate}
                    mode='date'
                    display="default"
                    
                    onChange={(date)=> this.onChange(date)}
                /> : null }
            </TouchableOpacity>
        )
    }
    
}
export default CostumDatePicker