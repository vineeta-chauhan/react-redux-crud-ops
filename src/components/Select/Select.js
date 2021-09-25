import React from 'react'

import styles from './select.module.css';


export default function Select(props) {
  const { onChange, options = [] } = props;
  return (
    <select className={styles.select} 
      
      onChange={onChange}
    >
      {options.map(ele => <option value={ele}>{ele}</option>)}
    </select>
  )
}
