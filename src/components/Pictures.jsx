import Picture from '../image/cat.png';

const PicCatStyles = {
  width: '100px',
  position: 'fixed',
  bottom: '23px',
  left: '18px',
};

const PicCat = () => {
  return (
    <>
      <img style={PicCatStyles} src={Picture} alt="" />
    </>
  );
};

export default PicCat;
