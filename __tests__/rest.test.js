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

  test('Should read from people', async () => {
    let response = await request.get('/people').send();

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(1);
    expect(response.body[0].name).toEqual('test');
    expect(response.body[0].age).toEqual(100);
    expect(response.body[0].job).toEqual('tester');
  });

  test('Should read from places', async () => {
    let response = await request.get('/places').send();

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(1);
    expect(response.body[0].name).toEqual('test');
    expect(response.body[0].county).toEqual('testing');
    expect(response.body[0].state).toEqual('tester');
  });

  test('Should read a specific person', async () => {
    let response = await request.get('/people/1').send();

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('test');
    expect(response.body[0].age).toEqual(100);
    expect(response.body[0].job).toEqual('tester');
  });

  test('Should read a specific place', async () => {
    let response = await request.get('/places/1').send();

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('test');
    expect(response.body[0].county).toEqual('testing');
    expect(response.body[0].state).toEqual('tester');
  });

  test('Should delete a person', async () => {
    let response = await request.delete('/people/1');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(1);
  });

  test('Should delete a place', async () => {
    let response = await request.delete('/places/1');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(1);
  });

  test('Should update a person', async () => {
    let response = await request.put('/people/1').send({
      name: 'update',
    });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([0]);
  });

  test('Should update a place', async () => {
    let response = await request.put('/places/1').send({
      name: 'update',
    });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([0]);
  });
});
