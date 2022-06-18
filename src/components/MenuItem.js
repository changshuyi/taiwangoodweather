import React, { useState } from 'react';

const MenuItem = (props) => {
  const { collectionItem } = props;
  const [isAdd, setIsAdd] = useState(false);
  const [contentItems, setContentItems] = useState();

  const openRecipe = (cardLink) => {
    setIsAdd(true);
  };

  return (
    <>
      <div className="flow-root"></div>
    </>
  );
};

export default MenuItem;
