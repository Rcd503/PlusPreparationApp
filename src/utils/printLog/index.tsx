import {View, Text} from 'react-native';
import React from 'react';

const printLog = (...rest: any) => {
  if (__DEV__)
    console.log(`=============================== 

  ${rest}

  ===============================`);
  return null;
};

export default printLog;
