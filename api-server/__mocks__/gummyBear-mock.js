
'use strict';

import gummyBears from '../src/models/gummyBears';

export default (dir) => {

  const fakeMongo = {
    find: () => Promise.resolve([]),
    findById: () => Promise.resolve({}),
    save: data => Promise.resolve(data),
    findByIdAndUpdate: () => Promise.resolve({}),
    findByIdAndDelete: () => Promise.resolve({}),
  };

  if (typeof dir !== 'string') {
    return {};
  }
  return {
    'foo': { default: fakeMongo },
    'gummyBears': { default: gummyBears },
  };
};

