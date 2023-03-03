import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
    const participants = ['Rodrigo', 'Vini', 'JHjose', 'Railan', 'Ana', 'lize', 'vick', 'jaque', 'mimi']

    function handleParticipantAdd() {

    }

    function handleParticipantRemove() {

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
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}> 
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant key={participant} name={participant} onRemove={handleParticipantRemove}/>
                    ))
                }
            </ScrollView>   

        </View>
    )
}