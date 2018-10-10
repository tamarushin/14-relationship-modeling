'use strict';

import mongoose from 'mongoose';

const gummyBearsSchema = mongoose.Schema({
  name: { type: String, required: true },
  roast: { type: String, required: true },
  gummyBears: { type: String, required: true },
});

export default mongoose.model('gummyBears', gummyBearsSchema);