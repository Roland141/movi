import React from 'react'
import { useState } from 'react'
import { Content } from '../components/Content';
import { Search } from '@mui/icons-material';
import { useRef } from 'react';


export const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('movie')
  const input = useRef()
  const urlSearch = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&query=${search}&page=${1}`

  return (
    <div className='finder-padding'>
      <div className='finder'>
        <div className='searcher'>
          <input type="searchText" ref={input} className='outline-none max-w-72 w-full' />
          <button onClick={() => setSearch(input.current.value)} ><Search /></button>
        </div>
        <div>
          <button className={`${type == "movie" ? "border-b-2" : "border-b-0"} border-blue-500 transition-all duration-100`} onClick={() => setType('movie')}>SEARCH MOVIES</button>
          ‎ <button className={`${type == "tv" ? "border-b-2" : "border-b-0"} border-blue-500 transition-all duration-100`} onClick={() => setType('tv')}>SEARCH TV SERIES</button>
        </div>
      </div>
    
      {
        search == '' ?
          <div className='h-full w-full text-xl font-bold flex justify-center items-center'>

          </div>
          :
        
          <Content url={urlSearch} type={type} />
        
      }
    </div>
  )
}

