export interface IInputUser {
    title?:string,
    placeholder?:string,
    setPassword?(password:string):void
    setEmail?(email:string):void
    setUserName?(name:string):void
}