export type User = {
    id: number,
    name: String,
}

export function getUsersAsync(): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: '山田 一郎' },
                { id: 2, name: '山田 二郎' },
                { id: 3, name: '山田 三郎' }
            ])
        }, 3000)
    })
}