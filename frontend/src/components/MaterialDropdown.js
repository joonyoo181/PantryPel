// src/components/MaterialDropdown.js
import React, { useState } from 'react';
import {MenuItem, TextField } from '@mui/material';
import PropTypes from 'prop-types';

function MaterialDropdown({ options }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <TextField
            select
            label="Choose an option"
            value={selectedOption}
            onChange={handleSelectChange}
            variant="outlined"
            sx={{
                minWidth: 200,
                backgroundColor: 'white',
                marginTop: '20px',
                '.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#61dafb',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#21a1f1',
                },
                '.MuiSvgIcon-root': {
                    color: '#61dafb',
                },
            }}
        >
            {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    );
}

// Define PropTypes for type-checking
MaterialDropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MaterialDropdown;
