import { Pressable } from 'react-native';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const BackButton = ({ onPress = () => { } }) => {

    return (
        <Pressable style={style.container} onPress={() => onPress()}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Pressable>
    );
}

export default BackButton;