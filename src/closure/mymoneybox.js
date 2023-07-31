/*function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MonyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(5);*/

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    };
    return countCoins;
};

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const monyBoxAna = moneyBox();
monyBoxAna(10);
monyBoxAna(20);
monyBoxAna(5);


