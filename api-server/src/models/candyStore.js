'use strict';

import mongoose from 'mongoose';

const candyStoreSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  manager: { type: String, required: true },
  gummyBears: [{ type: mongoose.Schema.Types.ObjectId,ref: 'gummyBears' }],
});

export default mongoose.model('candyStores', candyStoreSchema);