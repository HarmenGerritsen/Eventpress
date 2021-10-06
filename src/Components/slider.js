import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '50%',
  },
  {
    value: 33,
    label: '100%',
  },
  {
    value: 66,
    label: '150%',
  },
  {
    value: 100,
    label: '200%',
  },
];

function valuetext(value) {
  return `${value}%`;
}

//function valueLabelFormat(value) {
//  return marks.findIndex((mark) => mark.value === value) + 1;
//}

export default function DiscreteSliderValues() {
  return (
    <Box vw={{ width: 10 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={33}
        //valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={33}
        //valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}