import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";

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

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={handleParticipantRemove}/>
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