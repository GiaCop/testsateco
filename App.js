import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet,Text, View } from 'react-native';  
  
export default class ButtonBasics extends Component {  
    onPressButton() {  
        Alert.alert('You clicked the button!')  
    }  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Scan"  
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Text style={styles.buttonContainer}>Le program recherche le elements RFID present</Text>
                    <Text style={styles.buttonContainer}>Scan: RFID</Text>

                </View>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: { 
       justifyContent:"center",  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: { 
      justifyContent:"center",  
      alignContent:"center",

       fontSize:22, 
        margin: 20  
    },  
    multiButtonContainer: {  
      justifyContent:"center",  
      alignContent:"center",
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  
})  
