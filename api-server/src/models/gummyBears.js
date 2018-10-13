'use strict';

import mongoose from 'mongoose';

const gummyBearsSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  flavor: { type: String, required: true },
});

export default mongoose.model('gummyBears', gummyBearsSchema);