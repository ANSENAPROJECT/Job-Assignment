import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {ArrowDown, WaitingActive} from '../../assets';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const AddJobGroup = ({navigation}) => {
  const [title, setTitle] = useState('New Job Group 1');
  return (
    <ScrollView style={{flex: 1, padding: 20}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.btnheader}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity>
            <Text style={{...styles.btnheader, color: colors.badgeBlue}}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.datetime}>
          <Text style={styles.subtitleDate}>Date & Time</Text>
          <Text style={styles.date}>29 Jan 09:00</Text>
        </View>
        <View style={styles.inputjobgroup}>
          <TextInput
            placeholder="Job Group Title"
            onChangeText={(title) => {
              setTitle(title);
            }}
          />
        </View>
        <View style={styles.addCoAdmin}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={WaitingActive}
              style={{height: 40, width: 40, marginRight: 10}}
            />
            <Text>Add Co-Admin</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>None</Text>
            <Image
              source={ArrowDown}
              style={{
                height: 15,
                width: 15,
                transform: [{rotate: '270deg'}],
                marginLeft: 10,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnheader: {
    fontFamily: fonts.SFProDisplayThin,
    fontSize: 14,
    color: colors.badgeRed,
  },
  title: {
    fontFamily: fonts.SFProDisplayHeavy,
    fontSize: 19,
  },
  datetime: {
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitleDate: {
    fontFamily: fonts.SFProDisplaySemiBold,
    fontSize: 18,
  },
  date: {
    fontFamily: fonts.SFProDisplayRegular,
    fontSize: 15,
  },
  inputjobgroup: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  addCoAdmin: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default AddJobGroup;
