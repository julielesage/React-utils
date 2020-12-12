export type HeaderType = {
  title: string
}

export type UserType = {
  firstname: string,
  lastname?: string,
  age?: number
}

export type UserListType = {
  users: UserType[],
  userNb: number,
}