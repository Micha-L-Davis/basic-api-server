'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing a bad route', () => {
  test('Server responds with a status 404 to a GET request to an invalid route', async () => {
    const response = await request.get('/four-oh-four');

    expect(response.status).toEqual(404);
  });
});
