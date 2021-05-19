import React from 'react';
import { CardType } from '../functions/getDataFromContract/getDataFromContract';
import useTypedSelector from '../typedSelector';

const Result = () => {
  const groups = useTypedSelector((state) => state.groups);
  return (
    <div className="app__body">
      {groups.map((group) => (
        <div className="app__group group">
          <h3 className="group__title">{group.groupName}</h3>
          <div className="group__cards">

            {group.cards.map((card: CardType) => (
              <div className="group__card card">
                <span className="card__title">{card.name}</span>
                <span className="card__eth-rate">
                  $100/
                  {card.eth}
                  {' '}
                  ETH
                </span>
                <div className="card__bottom">
                  <span className="card__price">{card.usd}</span>
                  <span className="card__percent">
                    {' '}
                    {card.percentCange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="app__group group" />
    </div>
  );
};

export default Result;
