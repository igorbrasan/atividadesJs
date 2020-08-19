const user = {
    name: 'Igor',
    transactions: [],
    balance: 0,

};

function createTransaction(type, value){
    user.transactions.push( {'type': type, 'value': value, })
    if(type == 'credit'){
        user.balance = user.balance + value;
    }else if(type == 'debit'){
        user.balance = user.balance - value;

    }
}



function getHigherTransactionByType(type){
    let higher = [];
    for(let transaction of user.transactions){
        if(transaction.type == type){
            if(transaction.value>higher){
                higher = transaction;
            }
        }
    }
    console.log(higher)
}

function getAverageTransactionByType(type){
    let avg = 0;
    let count = 0;
    for(let transaction of user.transactions){
        if(transaction.type == type){
            count++;
            avg = avg + transaction.value;
        }
        avg = avg/count;
    }
    console.log(`Average value of ${type} transactions is ${avg}`);
}

function getAverageTransaction(){
    let avg = 0;
    let count = 0;
    for(let transaction of user.transactions){
            count++;
            avg = avg + transaction.value;
        }
        avg = avg/count;
    
    console.log(`Average value of all transactions is ${avg}`);
}

function getTransactionsCount(){
    let cCount = 0;
    let dCount = 0;
    for(let transaction of user.transactions){
        if(transaction.type == 'credit'){
            cCount++;
        }else if(transaction.type == 'debit'){
            dCount++;            
        }
    }
    console.log(`{ credit: ${cCount}, debit: ${dCount} }`);
}

createTransaction('credit', 250);
createTransaction('credit', 85);
createTransaction('credit', 85);
createTransaction('debit', 85);
createTransaction('debit', 0);
createTransaction('debit', 900);



console.table(user.transactions);
console.log(`Balance is ${user.balance}`);

getHigherTransactionByType('debit');
getHigherTransactionByType('credit');
getAverageTransactionByType('credit');
getAverageTransaction();
getTransactionsCount()