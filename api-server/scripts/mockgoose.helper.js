import {
  Mockgoose,
} from 'mockgoose';
import mongoose from 'mongoose';

// WARNING: Give a LONG timeout because Travis runs slow
// due to Mongo
jest.setTimeout(60000);

const mockgoose = new Mockgoose(mongoose);

console.log('models.helper FTW');

export default {
  afterAll: (done) => {


    mongoose.disconnect().then(() => {
      console.log('disconnected');
      done();
    }).catch((err) => {
      console.error(err);
      done();
    });
    
  },

  beforeAll: done => {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect('mongodb://127.0.0.1/gummyBears').then(() => {
        done();
      });
    });
  },

  afterEach: done => {
    mockgoose.helper.reset().then(done);
  },
};