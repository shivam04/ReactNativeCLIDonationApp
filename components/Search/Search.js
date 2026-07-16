import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import style from './style';
import { Pressable, TextInput } from 'react-native';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from 'react';
import { scaleFontSize } from '../../assets/styles/scaling';
import PropTypes from 'prop-types';

const Search = ({ onSearch = () => { }, placeHolder = 'Search' }) => {

    const textInputRef = useRef(null);
    const [search, setSearch] = useState('');

    const handleFocus = () => {
        textInputRef.current.focus();
    }

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        onSearch(searchValue);
    }

    return (
        <Pressable style={style.searchInputContainer} onPress={handleFocus}>
            <FontAwesomeIcon
                icon={faSearch}
                color={'#25C0FF'}
                size={scaleFontSize(22)}
            />
            <TextInput
                placeholder={placeHolder}
                ref={textInputRef}
                style={style.searchInput}
                value={search}
                onChangeText={value => handleSearch(value)}
            />
        </Pressable>
    )
}

Search.propTypes = {
    onSearch: PropTypes.func,
    placeHolder: PropTypes.string
}

export default Search;