import React from 'react';
import styles from '../../styles.css';

const dollarRangeTranslation = {
  $: 'under $10',
  $$: '$11-30',
  $$$: '$31-60',
  $$$$: 'above $61',
};

const PriceRange = (props) => {
  const { price } = props;
  const green = '27ae60';
  const colorArr = ['cccccc', 'cccccc', 'cccccc', 'cccccc'];
  for (let i = 0; i < price.length; i += 1) {
    colorArr[i] = green;
  }
  return (
    <div>
      <span style={{ display: 'flex' }}>
        {colorArr.map((dollar) => {
          const dollarString = `https://png.icons8.com/metro/50/${dollar}/us-dollar.png`;
          return <img src={dollarString} alt="Dollar Signs" style={styles.dollarSignStyling} />;
        })}
        <p style={styles.textMargin}>Price range</p>
        <p style={Object.assign({ fontWeight: 'bold' }, styles.textMargin)}>
          {dollarRangeTranslation[price]}
        </p>
      </span>
    </div>
  );
};

export default PriceRange;
