import React from 'react';
import { FormControl} from 'react-bootstrap';

import './search-box.css';

export const SearchBox = ({placeholder,handleChange}) => (
    <FormControl type="search"  placeholder={placeholder} className="mr-8" onChange={handleChange} />
)