import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div>
      
    </div>
  );
};

export default Notification;