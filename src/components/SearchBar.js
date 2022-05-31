import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className='ui segment' style={{ marginTop: '10px' }}>
      <div className='ui form'>
        <form className='field' onSubmit={onSubmit}>
          <label>Video Search</label>
          <input type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
export default SearchBar;

