import React from 'react';

const styles = {
  padding: '10px',
  marginBottom: '20px',
};

const CustomInput = ({ setValue, value }) => {
  const onChangeHalder = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="">Enter any letter: </label>
        <input
          value={value}
          onChange={onChangeHalder}
          style={styles}
          type="text"
          placeholder="Start your search"
        />
      </div>
    </>
  );
};

export default CustomInput;
