export type Message = {
   date: number,
   author: string,
   text: string,
}
export type User = {
   login: string,
   avatarUrl: string
}

export type chatListProps = {
   urlImage: string,
   name: string,
   id: string,
   user: string,
   date: number,
   lastMessageText: string 
}

export type messageListProps = {
   [key: string] : {
      users: User[],
      messages: Message[]
   }
 }

 export type ChatProps = {
   chatItem: { users: User[], messages: Message[] },
   addMessage: (value: string) => void
 }
 
 export type chatStateProps = {
   currentDate: number,
   author: string
 }