export class User {
  constructor(
    public id: string = null,
    public email: string = null,
    public password: string = null,
    public name: string = null,
    public role: string = null,
    public subscription_type: string = null,
    public subscription_date: Date = null,
    public phone: string = null,
    public country: string = null,
    public city: string = null,
    public readonly updated_at: Date = new Date(),
    public readonly created_at: Date = new Date()
  ) { }
}

export class AuthorizationUser {
  constructor(
    public email: string,
    public password: string,
    public locationOrigin: string = null
  ) { }
}

export enum Role {
  User = 'ec87ad22945580e417e0a0bce03ac8727c31fb155526f56b62dc77f966c9c240',
  ProUser = '21bbc7077104e43b7cab09ac69163eea9b309753993dbc1809ee86bf2b6e96dc',
  Admin = '8db697c0efb4f919446a943ab70a52c23b0788db3f2452732541388009119ef3',
  ProAdmin = '43a9f9d3d872b89039167b9ea8879d0becc91b9c280035eb4e59ae478d5ded0d',
}
