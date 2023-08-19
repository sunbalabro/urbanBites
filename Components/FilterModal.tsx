import React, { useState, FC } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
interface IProps { 
    handleFilter: (val: number) => void
}
export const FilterModal: FC<IProps> = ({handleFilter}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<number | any>(null);
    const [items, setItems] = useState([
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
    ]);

    const handleClose = () =>{
        handleFilter(value)
        setModalVisible(!modalVisible)
        setValue(null)
    }
    return (
        <View>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Filter Rating :</Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            onSelectItem={(e)=> setValue(e.value)}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleClose()}>
                            <Text style={styles.textStyle}>Set</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Filter</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
        // fontSize: 20,
        width: 100,
        height: 40,
        marginTop: 10
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
});