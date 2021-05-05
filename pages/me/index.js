import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Linking,
    StyleSheet,
} from 'react-native';
import Header from './components/header';
import Section from './components/section';

function Home(props) {

    const { navigation } = props;

    function renderSection() {
        const sectionArr = [
            [
                { title: 'Github', subtitle: '求star', image: require('../../assets/img/mine/github.png'), onPress: () => Linking.openURL('https://github.com/Nobida') },
            ],
            [
            ]
        ];
        return (
            sectionArr.map((section, index) => <Section section={section} key={index} />)
        )
    }
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                <Header navigation={navigation} />
                {renderSection()}
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
})
export default Home;