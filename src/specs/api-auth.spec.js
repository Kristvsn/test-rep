const baseURL = 'https://bookstore.demoqa.com/Account/v1'
const config = {
    headers: { 'Content-Type': 'application/json' }
}

describe('Auth2', () => {
    it('auth try', async () => {
        const response = await fetch(`${baseURL}/Authorized`, {
            method: 'POST',
            body: JSON.stringify({
                userName: 'Kris',
                password: '123GH!hgh'
            }),
            ...config
        })
        const data = await response.json()
        expect(response.status).toEqual(404)
        expect(data.message).toBe('User not found!')
        expect(data.code).toBe('1207')
    })
    it('auth try2', async () => {
        const response = await fetch(`${baseURL}/Authorized`, {
            method: 'POST',
            body: JSON.stringify({
                userName: 'Kristina',
                password: '123GH!hgh'
            }),
            ...config
        })
        const data = await response.json()
        expect(response.status).toEqual(200)
        expect(data).toBe(false)
    })
    it('Delete user', async () => {
        const user=await createUser()
        const auth=await authUser()

        const {data,response} = await deleteUser(user.userID)
        expect(response.status).toEqual(401)
        // expect(data).toBe(false)
        expect(data.message).toBe('User not authorized!')
        expect(data.code).toBe('1200')
    })
})


async function deleteUser(userId) {
    const response = await fetch(`${baseURL}/User/${userId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            userName: 'Kristina5',
            password: '123GNjhgjh!'
        }),
        ...config
    })
    const data = await response.json()
    return {data,response}
    
}
async function createUser() {
    const response = await fetch(`${baseURL}/User`, {
        method: 'POST',
        body: JSON.stringify({
            userName: 'Kristina5',
            password: '123GNjhgjh!'
        }),
        ...config
    })
    const user = await response.json()
    return user
}
async function authUser(){
const response = await fetch(`${baseURL}/Authorized`, {
    method: 'POST',
    body: JSON.stringify({
        userName: 'Kristina5',
        password: '123GNjhgjh!'
    }),
    ...config
})
const data = await response.json()
return data}