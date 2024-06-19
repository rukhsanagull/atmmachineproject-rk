#!/user/bin/env node
const myBalance = 20000;
const pinNumber = 654321;
import inquirer from "inquirer";
import chalk from "chalk";
const user = await inquirer.prompt([
    {
        name: "myPin",
        type: "number",
        message: "Enter your pin number"
    }
]);
if (user.myPin === pinNumber) {
    console.log(chalk.green("welcom to your acount"));
}
let atmMachine = await inquirer.prompt([
    {
        name: "action",
        type: "list",
        message: "please select an action",
        choices: ["check balance", "withdraw", "fastcash",]
    }
]);
if (atmMachine.action === "check balance") {
    console.log(chalk.blue("your balance is: " + myBalance));
}
else if (atmMachine.action === "withdraw") {
    let withdrawAmount = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount you want to withdraw"
        }
    ]);
    if (withdrawAmount.amount <= myBalance) {
        console.log(chalk.green("your new balance is: " + (myBalance - withdrawAmount.amount)));
        ;
    }
}
else if (atmMachine.action === "fastCash") {
    let fastCashAmount = await inquirer.prompt([
        {
            name: "cash",
            type: "list",
            message: "please select an amount",
            choices: ["500", "1000", "2000", "5000"]
        }
    ]);
    myBalance - fastCashAmount.cash;
    console.log(chalk.green("your new balance is: " + myBalance));
}
