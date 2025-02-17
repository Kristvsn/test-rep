import crypto from 'node:crypto'
const baseURL = 'https://bookstore.demoqa.com/Account/v1'
const config = {
    headers: { 'Content-Type': 'application/json' }
}
describe('Auth', () => {
    it('Existed double', async () => {
        const response = await fetch(`${baseURL}/User`, {
            method: 'POST',
            body: JSON.stringify({
                userName: 'Kristina',
                password: '123GH!hgh'
            }),
            ...config
        })
        const data = await response.json()
        expect(response.status).toEqual(406)
        expect(data.message).toBe('User exists!')
        expect(data.code).toBe('1204')
    })
    it('Incorrect password', async () => {
        const response = await fetch(`${baseURL}/User`, {
            method: 'POST', 
            body: JSON.stringify({
                userName: 'Kristina',
                password: '123'
            }),
            ...config
        })
        const data = await response.json()
        expect(response.status).toEqual(400)
        expect(data.message).toBe(`Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.`)
        expect(data.code).toBe('1300')
    })
    it('Correct login', async () => {
        const response = await fetch(`${baseURL}/User`, {
            method: 'POST',
            body: JSON.stringify({
                userName: 'Kristina3' + crypto.randomInt(10, 1000),
                password: '123GNjhgjh!'
            }),
            ...config
        })
        const data = await response.json()
        expect(response.status).toEqual(201)
        expect(data.username).toBeDefined()
        expect(data).toHaveProperty('userID')
        expect(data).toHaveProperty('books')

        await fetch(`${baseURL}/User/${data.userID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    })
    it('Incorrect token', async () => {
        const response = await fetch(`${baseURL}/GenerateToken`, {
            method: 'POST',
            body: JSON.stringify({
                userName: 'Kris',
                password: '123GNjhgjh!'
            }),
            ...config
        })
        const data = await response.json()
        expect(response.status).toEqual(200)
        expect(data.result).toBe(`User authorization failed.`)
        expect(data.status).toBe('Failed')
        expect(data.token).toBe(null)
        expect(data.expires).toBe(null)
    })
    it('Correct token', async () => {
        const response = await fetch(`${baseURL}/GenerateToken`, {
            method: 'POST',
            body: JSON.stringify({
                userName: 'Kristina3',
                password: '123GNjhgjh!'
            }),
            ...config
        })
        const data = await response.json()
        expect(response.status).toEqual(200)
        expect(data.result).toBe(`User authorized successfully.`)
        expect(data.status).toBe('Success')
        expect(typeof data.token).toBe('string')
        expect(typeof data.expires).toBe('string')
    })
})