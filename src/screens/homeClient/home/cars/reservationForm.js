import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import {Button} from 'react-native-elements'
import Header from '../../../../shared/header'
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import * as firebase from 'firebase'
import { CommonActions } from '@react-navigation/native';


class ReservationFormScreen extends React.Component{
    constructor(){
        super();
        this.state={selectedStartDate: null,selectedEndDate: null,isLoading:false,unvailable:[]}
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date, type) {
        if (type === 'END_DATE') {
          this.setState({
            selectedEndDate: date,
          });
        } else {
          this.setState({
            selectedStartDate: date,
            selectedEndDate: null,
          });
        }
      }
    getAvailability = (car) => {
        const ref = firebase.database().ref().child('reservations')
        const query = ref.orderByChild('car').equalTo(car)
        query.on('value', doc => {
            var availability = [];
            doc.forEach(function(snap) {
                var item = snap.val();
                var date ={
                    start : item.start_date,
                    end : item.end_date
                }
                availability.push(date);
            });
            this.setState({unvailable:availability})
        })
    }
    componentDidMount(){
        const car = this.props.route.params.car.key
        this.getAvailability(car)
    }
    reserver = (start,end,user,car,prix) => {
        this.setState({isLoading:true})
        const res= {
            user: user,
            start_date: start,
            end_date:end,
            car:car,
            total:prix,
            payed:false
        }
        var pushedRef = firebase.database().ref().child('reservations').push(res, error => {
            if (!error){
                this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: 'ReservationStack' }]
                    })
                  );
            }
        });   
    }
    disableDate(date,range){
        var now = Moment(date)
        var exis=false
        range.forEach((item) => {
            var str= Moment(item.start,'D-MM-y')
            var ed= Moment(item.end,'D-MM-y')
            var between = now.isBetween(str,ed,'days', '[]')
            if(between) exis=true
        })
        return exis
        
    }
    render(){
        const car=this.props.route.params.car
        var enable= true
        const user = firebase.auth().currentUser.uid
        var prix = '-'
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(); // Today
        const maxDate = new Date(2021, 6, 3);
        const startDate  =  selectedStartDate ? Moment(selectedStartDate).format('D-MM-y') : '[Choisir une date]';
        const endDate = selectedEndDate ? Moment(selectedEndDate).format('D-MM-y') : '[Choisir une date]';
        if(selectedEndDate && selectedStartDate){
            enable= false
            const d = Moment.duration(Moment(selectedEndDate).diff(Moment(selectedStartDate))).asDays()
            const days = d + 1
            prix= car.prix * days
        }
        return (
            <View style={styles.container}>
                <Header title="reservation" navigation={this.props.navigation} />
                <View style={styles.content_container}>
                    <ImageBackground style={styles.top} resizeMode='cover' source={{uri:car.image}}>
                        <View style={styles.insideBackground}>
                            <View style={styles.topInfo}>
                                <Text style={styles.topInfoText}>{car.nom+" "+car.type}</Text>
                                <Text style={styles.topInfoText}>Prix : {car.prix}dh/jour</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.middle}>
                        <View style={styles.calendar}>
                            <CalendarPicker
                                disabledDates={(date)=> this.disableDate(date,this.state.unvailable)}
                                startFromMonday={true}
                                maxRangeDuration={7}
                                allowRangeSelection={true}
                                minDate={minDate}
                                maxDate={maxDate}
                                todayBackgroundColor="#008cff"
                                selectedDayColor="#0ad86e"
                                selectedDayTextColor="#FFFFFF"
                                onDateChange={this.onDateChange}
                                />
                        </View>
                        
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.dateRecap}>
                            <Text>Du { startDate } - Au {endDate}</Text>
                        </View>
                        <View style={styles.priceRecap}>
                            <Text style={{fontWeight:'bold'}}>Prix : {prix} DH</Text>
                        </View>
                        <View style={styles.confirm}>
                            <Button loading={this.state.isLoading} disabled={enable} title="Reserver" containerStyle={{width:'100%',elevation:8}} buttonStyle={{backgroundColor:'#0ad86e'}} onPress={()=> this.reserver(startDate,endDate,user,car.key,prix)}/>
                        </View>
                    </View>
                    
                </View>
                   
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'#fff'
    },
    content_container:{
        flex:1,
    },
    top:{
        flex:1
    },
    middle:{
        flex:3,
        paddingHorizontal:"2%",
        justifyContent:'center',

    },
    bottom:{
        flex:2,
        paddingHorizontal:"2%",

    },
    insideBackground:{
        flex:1,
        backgroundColor:'rgba(132, 129, 129, 0.6)',
        flexDirection:'column-reverse'
    },
    
    topInfo:{
        flex:1,
        paddingLeft:'10%',
        justifyContent:'flex-end'
    },

    topInfoText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:23
    },
    calendar:{
        backgroundColor:'#fff',
        elevation:5
    },
    dateRecap:{
        flex:1,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        elevation:5
    },
    priceRecap:{
        flex:1,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        elevation:5
    },
    confirm:{
        flex:1,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        
    }

});
export default ReservationFormScreen