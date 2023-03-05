import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');


    function handleParticipantAdd() {
        //verificacao de nomes repetidos 
        if(participants.includes(participantName)) {
            return Alert.alert('Participante existe', 'Já existe um  participante na lista com esse nome.')
        }

        //add
        setParticipants(prevState => [...prevState, participantName]);
        //limpar
        setParticipantName('');
    }

    function handleParticipantRemove(name: String) {
        Alert.alert('Remover', `Deseja remover ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                sexta, 4 de novembro de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    keyboardType="default"
                    onChangeText={text => setParticipantName(text)}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}> 
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />

        </View>
    )
}