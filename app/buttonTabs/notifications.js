import { Text, View, } from 'react-native';


import styles from "../../styles/NotificationsStyle";

export default function Agenda(){
    return(
        
        <View style={styles.container}>
           <View style={styles.header}>
            <Text>Notificações</Text>
            <Button title="Voltar" onPress={() => router.back()} />
           </View>
        </View>
    );
}