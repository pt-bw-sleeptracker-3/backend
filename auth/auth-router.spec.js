const server = require("../api/server.js");
const request = require("supertest");
const db = require('../data/db-config.js')

// beforeEach( () => {
//     return db.migrate.rollback()
//     .then( () => {
//         db.migrate.latest()
//     })
//     .then( () => {
//         db.seed.run()
//     })
// })


    test('should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('POST /api/auth/register', () => {
        it('should return 201', async () => {
            return await request(server).post('/api/auth/register')
            .send({ username: `user${Date.now().toString()}`,
                    password: `password${Date.now().toString()}`,
                    name: `name${Date.now().toString()}`,
                    email: `email${Date.now().toString()}@mail.com` })
                     expect(res.status).toBe(201)
        })
    })

    describe('POST /api/auth/register', () => {
        it('should return an object', async () => {
            const res = await request(server).post('/api/auth/register');
            expect(res.body).toEqual({})
        })
    })

    describe('POST /api/auth/login', () => {
        it('should return failed to login', async () => {
            return await request(server).post('/api/auth/login').send({ username: "hector", password: "password"})
            .set({ username: "hector", password: "password" })
            .then( res => {
                expect(res.body).toEqual({ message: "failed to login" })
            })     
        })
    })

    describe('POST /api/auth/login', () => {
        it('should return 403', async () => {
            const res = await request(server).post('/api/auth/login');
            expect(res.status).toBe(403)
        })
    })

    describe('POST /api/auth/login', () => {
        it('should return 500', async () => {
            return await request(server).post('/api/auth/login').send({ username: "hello", password: "world" })
            .set({ username: "hello", password: "world" })
            .then( res => {
                expect(res.status).toBe(500)
            })
        })
    });

    describe('POST /api/auth/login', () => {
        it('should return 400', async () => {
            return await request(server).get('/api/sleepdata')
            .then( res => {
                expect(res.status).toBe(400)
            })
        })
    });

    describe('POST /api/auth/login', () => {
        it('should return 500', async () => {
            return await request(server).post('/api/sleepdata/2').send({ date: '2/29/20', sleepStart: 11, sleepEnd: 24, moodMorning: 2, moodMidday: 2, moodNight: 4 })
            .then( res => {
                expect(res.status).toBe(500)
            })
        })
    });