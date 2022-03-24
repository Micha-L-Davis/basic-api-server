'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const { sequelize } = require('../models');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});


describe('Testing our REST API', () => {
  test('Should create a person', async () => {
    let response = await request.post('/people').send({
      name: 'test',
      age: 100,
      job: 'tester',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.age).toEqual(100);
    expect(response.body.job).toEqual('tester');
  });

  test('Should create a place', async () => {
    let response = await request.post('/places').send({
      name: 'test',
      county: 'testing',
      state: 'tester',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.county).toEqual('testing');
    expect(response.body.state).toEqual('tester');
  });

  test('Should read from people', () => {

  });

  test('Should read from places', () => {

  });

  test('Should delete a person', () => {

  });

  test('Should delete a place', () => {

  });

  test('Should update a person', () => {

  });

  test('Should update a place', () => {

  });
});
