// Conditional types
type A = null;
type B = object;

type  X = A extends null ? true : false  // return true
type  Y = B extends null ? true : false  // return false
type  Z = A extends undefined ? true : B extends object ? true : false   // return true

interface RichMan {
    bike: string,
    car: string,
    phone: string
}

type CheckRich<T> = T extends keyof RichMan ? true : false

type HashValue = CheckRich<'bikes'>