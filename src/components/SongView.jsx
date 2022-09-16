import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function SongView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ songData, setSongData ] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setSongData(resData.results)
        }
        fetchData()
    },[id]);

    const justSongs = songData.filter(entry => entry.wrapperType === 'track')

    const navButtons= () => (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate ('/')}>Home</button>
        </div>
    )

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    

    return (
        <div>
              <div>
                {songData.length > 0 ? 
                <h2>{songData[0].collectionName}</h2> : 
                <h2>Loading...</h2>}
                {navButtons()}
                {rendersongs}
            </div>
        </div>
    )

    }
export default SongView