
export class userError extends Error {

    messages: string[] = [];

    constructor(message: string | string[]){
        super(message instanceof String ? "existe uma mensagem de erro de usuário" : `Existem ${message.length} mensagens de erro de usuário`);

        if(message instanceof String)
            this.messages.push(message);
        else
            {
                for(let item in message)
                    this.messages.push(message[item]);
            }
    }
};