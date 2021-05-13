import axios from 'axios';
import {useState} from 'react';

function SearchForm () {

    const [searchInput, setSearchInput] = useState('');
    const handleSubmit = () => {
        event.preventDefault();
        console.log('Adding searchInput', searchInput);

        axios.post('/api/search', {
            searchInput
        })
            .then (response => {
                console.log('Added successfully');
                //getGiphy
                setSearchInput('');
            })
            .catch( error => {
                alert(`Sorry. Things aren't working at the moment. Try again later`);
                console.log('Error adding search', error);
            });
    };

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