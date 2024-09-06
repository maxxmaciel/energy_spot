import React, { useState } from 'react';
import { ComboBoxStyle } from './ComboBoxStyle';

type Props = {
  options: Record<string, string>[];
  onSelect: (value: string) => void;
  field: string;
};

const ComboBox: React.FC<Props> = ({ options, onSelect, field }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <>
      <ComboBoxStyle>
        <select value={selectedOption} onChange={handleSelect} className='select'>
          {options.map((option, index) => (
            <option key={index} value={option[field]} className='option'>
              {option[field]}
            </option>
          ))}
        </select>
      </ComboBoxStyle>
    </>
  );
};

export default ComboBox;
