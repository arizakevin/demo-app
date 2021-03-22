import React from 'react';
import { 
    Image, 
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, 
    TextInput,
    Button
} from 'react-native';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { 
    setFavoriteAnimal, 
    deleteFavoriteAnimal, 
    watchPersonData 
} from '../redux/app-redux';


const mapStateToProps = (state) => {
    return {
        favoriteAnimal: state.favoriteAnimal,
        personData: state.personData,
    };
}
const mapDispatchToProps = (dispatch) => {
    return { 
        setFavoriteAnimal: (text) => { dispatch(setFavoriteAnimal(text)) },
        deleteFavoriteAnimal: () => { dispatch(deleteFavoriteAnimal())},
        watchPersonData: () => { dispatch(watchPersonData())},
    };
}


class TestScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            favoriteAnimal: this.props.favoriteAnimal,
        }

        // this.props.watchPersonData();
    }

    componentDidMount() {
        this.props.watchPersonData();
    };

    onSignoutPress = () => {
        firebase.auth().signOut();
    }

    onSetFavoriteAnimalPress = () => {
        this.props.setFavoriteAnimal(this.state.favoriteAnimal);
    }

    onDeleteFavoriteAnimalPress = () => {
        this.props.deleteFavoriteAnimal();
    }

    render() {
        return (
            <View style={{paddingTop: 20}}>
                <Button title="Signout" onPress={this.onSignoutPress} />
                <Text>{this.props.favoriteAnimal}</Text>

                <TextInput style={{borderWidth: 1, width: 200, height: 30, marginTop: 30}}
                    value={this.state.favoriteAnimal}
                    onChangeText={(text) => { this.setState({favoriteAnimal: text}) }}
                />
                <Button title="Set favorite animal" onPress={this.onSetFavoriteAnimalPress} />
                <Button title="Delete favorite animal" onPress={this.onDeleteFavoriteAnimalPress} />

                <Text style={{marginTop: 30, fontWeight: "700"}}>Data from firebase database:</Text>
                {
                    this.props.personData.firstName && this.props.personData.lastName ?
                        <Text>Person: {this.props.personData.firstName} {this.props.personData.lastName}</Text>
                    :
                        <Text>Loading...</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);