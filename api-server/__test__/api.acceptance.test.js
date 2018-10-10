
'use strict';

import supertest from 'supertest';
import server from '../src/app/app.js';
import modelsHelper from '../../../scripts/models.helper.js';
import gummyBears from '../../../src/models/gummyBears';

const mockRequest = supertest(server);

const API_URL = '/api/v1/gummyBears';

afterAll(modelsHelper.afterAll);
beforeAll(modelsHelper.beforeAll);
afterEach(modelsHelper.afterEach);

describe('api', () => {

  it('mockRequest should exist', () => {
    expect(mockRequest).toBeDefined();
  });

  it('get back empty array for find', () => {
    return mockRequest
      .get(API_URL)
      .then(results => {
        let coffees = JSON.parse(results.text);
        expect(coffees).toEqual([]);
      });
  });

  it('GET - test 200, returns a resource with a valid body', () => {
    return mockRequest
      .get(API_URL)
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('should return 400 bad request when no id was provided', () => {
    return mockRequest
      .get(API_URL)
      .catch(err => {
        expect(err.response.text).toBe('Bad Request');
        expect(err.status).toBe(400);
      });
  });

  it('should return 200 and contain response body for request made with valid id', () => {
    let model = { name: 'name', color: 'color', gummyBears: 'gummyBears' };
    return mockRequest
      .post(API_URL)
      .send(model)
      .then(data => {
        return mockRequest
          .get(`${API_URL}/${data.body._id}`)
          .then(response => {
            expect(response.body.name).toEqual(data.body.name);
          });
      });
  });

  it('should return 400 bad request when there is no body content or invalid body content', () => {
    return mockRequest
      .post(API_URL)
      .catch(err => {
        expect(err.response.text).toBe('Bad Request');
        expect(err.status).toBe(400);
      });
  });

  it('should respond with the body content', () => {
    let model = { name: 'name', color: 'color', gummyBears: 'gummyBears' };
    return mockRequest
      .post(API_URL)
      .send(model)
      .then(data => {
        expect(data.body.gummyBears).toBe('gummyBears');
      });
  });
});

describe('gummyBears model', () => {

  it('should create gummyBears', () => {
    return gummyBears
      .create({ name: 'name', color: 'color', gummyBears: 'gummyBears' })
      .then(gummyBears => {
        expect(gummyBears.name).toBe('name');
      });
  });

});