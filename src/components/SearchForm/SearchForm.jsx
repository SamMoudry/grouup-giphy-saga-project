import {useDispatch} from 'react-redux';
import {useState} from 'react';

import GiphyList from '../GiphyList/GiphyList.jsx';


function SearchForm () {

    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = () => {
        event.preventDefault();
        console.log('Adding searchInput', searchInput);
        dispatch({type: 'GET_IMAGES', payload: searchInput});
        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Category" 
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <GiphyList />
        </div>
    );
}

export default SearchForm;