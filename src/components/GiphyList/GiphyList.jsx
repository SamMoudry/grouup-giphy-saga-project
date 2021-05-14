import {useSelector} from 'react-redux';

function GiphyList () {

    const gifs = useSelector(store => store.searchReducer)
    console.log(gifs);

    return (
        <div>
            { gifs.data ? 
                (
                    <div>
                        {gifs.data.map((gif) => {
                           return <img src={gif.images.original.url} key={gif.id}/>
                        })}
                    </div>
                ) : ''
            }
        </div>
    );
}

export default GiphyList;