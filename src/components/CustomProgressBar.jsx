import React from 'react';

const CustomProgressBar = ({ min, max }) => {
  const [value, setValue] = React.useState(0);

  const inc = () => {
    setValue((p) => p + 10);
  };

  const dec = () => {
    setValue((p) => p - 10);
  };

  React.useEffect(() => {
    if (value > max) setValue(0);
  }, [value]);

  return (
    <>
      <h1>Progress Bar</h1>
      <label>Downloading progress: </label>
      <progress id="file" value={value} max={max} />
      <button disabled={value >= max} onClick={inc}>
        +
      </button>
      <button onClick={dec} disabled={value <= 0}>
        -
      </button>
      <div>
        <input onChange={(e) => setValue(e.target.value)} type="text" />
      </div>
    </>
  );
};

export default CustomProgressBar;
