// сообщение в чате
export type Message = {
   date: {
      day: string,
      time: string,
   },
   author: string,
   text: string,
}

// чат
export type Chat = {
   urlImage: string,
   name: string,
   messages: Array<Message>,
};