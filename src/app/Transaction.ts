import { Timestamp } from 'rxjs';
import { logging } from 'protractor';

export class Transaction{
    Transaction(){

    }
    
    transactionId : number;
    date : string;
    timeStamp : number;
    typeOfTransaction : string;
    transactionAmount : number;
    updatedBalance : number;
    fromAccountId: number;
    toAccountId : number;
    status : string;


}

 