import React, {useRef} from 'react';

const SearchBar = ({onSearch}) => {
  const searchRef = useRef();
  const handleSearch = () => {
    const value = searchRef.current.value;
    // console.log(value)
    onSearch(value)
  }

  const handleClick = () => {
    handleSearch();
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div>
      <input ref={searchRef} type="search" className="search-input" placeholder="검색어를 입력해주세요." onKeyPress={handleKeyPress}/>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default SearchBar; 