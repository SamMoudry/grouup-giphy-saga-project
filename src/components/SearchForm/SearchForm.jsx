import {useDispatch} from 'react-redux';
import {useState} from 'react';

function SearchForm () {

    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        event.preventDefault();
        console.log('Adding searchInput', searchInput);
        dispatch({type: 'SET_SEARCH', payload: searchInput});
        setSearchInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            placeholer="Category" 
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;