'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing the route logger', () => {
  test('Logger accurately reports the route being accessed', async () => {
    const response = await request.get('/noodles');

    expect(response.error.path).toEqual('/noodles');
  });
});
