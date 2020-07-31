import React from 'react';
import PropTypes from 'prop-types';

import Price from '../../elements/price/price';
import ListItem from '../../elements/list-item/list-item';

const ServiceInfo = ({title, priceList, upperText, list, lowerText, alignPrice}) => {
  let PriceListMap = priceList && (
    <div className="flex">
      {priceList.map((price, i) => (
        <Price key={i} padding={price.padding} price={price.price} text={price.text}/>
      ))}
    </div>
  );
  return (
    <div>
      {alignPrice === 'top' && PriceListMap}
      <div className="flex flex-wrap items-end mb-6 justify-between w-full">
        <h3 className="uppercase text-4xl">{title}</h3>
        {alignPrice === 'center' && PriceListMap}
      </div>
      {upperText && <div>{upperText}</div>}
      {list && <div className="mt-6">
        {list.title && <h4 className="text-primary font-semibold mb-2">{list.title}</h4>}
        {list.items.map((item, i) => (
          <ListItem key={i} text={item} />
        ))}
      </div>}
      {lowerText && <div className="mt-6">{lowerText}</div>}
      {alignPrice === 'bottom' && <div className="mt-6">{PriceListMap}</div>}
    </div>
  )
}; 


ServiceInfo.propTypes = {
  alignPrice: PropTypes.string,
  title: PropTypes.string,
  priceList: PropTypes.array,
  upperText: PropTypes.string,
  list: PropTypes.object,
  lowerText: PropTypes.string
}

export default ServiceInfo;