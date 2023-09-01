import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}`)
    }
  return (
      <div className='home-page'>
          <form className='form' onSubmit={handleSubmit}>
              <div>
                  <label>Enter Room Code</label>
                  <input value={roomCode} onChange={e=>setRoomCode(e.target.value)} type='text' required placeholder='Enter Room Code'></input>
                  <button type='submit'>Submit</button> 
              </div>
          </form>
      
    </div>
  )
}

export default HomePage
