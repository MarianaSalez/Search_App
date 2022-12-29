import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {searchByName,cleanFilter} from '../redux/actions';
import {FiSearch} from 'react-icons/fi'
import style from './styles/Nav.module.css'

export default function Nav() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [searched,setSearched] =useState("")


  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleButton(e) {
    e.preventDefault();
    setSearched(name)
    dispatch(searchByName(name))
  }

  function cleanSearch(e) {
    e.preventDefault();
    setSearched("")
    dispatch(cleanFilter())
  }


return(<>
    <div className={style.nav}>
   <input className={style.nav_input} type='text' placeholder='...' onChange={(e) => handleChange(e)}/>
    <button className={style.nav_buttom_search} type='submit' onClick={(e) => handleButton(e)}><FiSearch/> Buscar</button>
     </div>

//Filter chip element

  {(searched.length>0)?
  <div className={style.nav_chipSpace}>
    <div className={style.nav_filterChip}>
    <p className={style.nav_p_chip}>{searched}</p><button className={style.nav_close_tag} onClick={(e) => cleanSearch(e)}>X</button>
    </div>
  </div>
:<></>}
  

</>
  )
  
}
