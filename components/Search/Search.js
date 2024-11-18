import React from 'react';
import style from './style';
import {TextInput, View, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useRef, useState} from 'react';
import {scaleFontSize} from '../../assets/styles/scaling';
import PropTypes from 'prop-types';

const Search = props => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput
      placeholder={props.placeholder}
        ref={inputRef}
        style={style.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder:'Search',
};

Search.proptypes = {
  onSearch: PropTypes.func,
  placeholder:PropTypes.string,
};

export default Search;
