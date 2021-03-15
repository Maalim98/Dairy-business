let sheds = {
    'A': '',
    'B': '',
    'C': '',
    'D': ''}

const price_per_litre = 45;


function totalProduction() {
    sheds.A = parseInt(prompt("How many litres did shed A produce?"));
    sheds.B = parseInt(prompt("How many litres did shed B produce?"));
    sheds.C = parseInt(prompt("How many litres did shed C produce?"));
    sheds.D = parseInt(prompt("How many litres did shed D produce?"));
    for (const shed in sheds) {
        console.log(` Your total production in ${shed} is ${sheds[shed]} litres per day`);
    }
    let totalProduce = sheds.A + sheds.B + sheds.C +sheds.D;
    console.log(` Your Totalproduction is ${totalProduce} litres per day`);
    return sheds;
    
    
}
sheds = totalProduction();

function incomeOverTime(selling_price, time) {
    let shed_A_price = sheds.A * selling_price;
    let shed_B_price = sheds.B * selling_price;
    let shed_C_price = sheds.C * selling_price;
    let shed_D_price = sheds.D * selling_price;
    let daily_sales = shed_A_price + shed_B_price + shed_C_price + shed_D_price;     
    let weekly_sales = daily_sales * 7;
    let monthly_sales = weekly_sales * 4.345;
    let yearly_sales = weekly_sales * 52.143;

    if (time > 0 & time < 7) {
    console.log(`Total income for shed A is ${shed_A_price}`);
    console.log(`Total income for shed B is ${shed_B_price}`);
    console.log(`Total income for shed C is ${shed_C_price}`);
    console.log(`Total income for shed D is ${shed_D_price}`);
}
    else if (time === 7) {
    console.log(`total weekly production is ${weekly_sales}`);
}
    else if (time > 7 & time < 31) {
    console.log(`Total monthly production is ${monthly_sales}`);
}
    else if (time > 31 & time < 365) {
    console.log(`Total monthly production is ${monthly_sales}`);
}
    else {
    console.log(`Total yearly production is ${yearly_sales}`);
}



}

function leapYearSales(rate) {
    let shed_A_price = sheds.A * rate;
    let shed_B_price = sheds.B * rate;
    let shed_C_price = sheds.C * rate;
    let shed_D_price = sheds.D * rate;
    let daily_sales = shed_A_price + shed_B_price + shed_C_price + shed_D_price;     
    console.log(`Your income for January is ${daily_sales * 31}`);
    console.log(`Your income for February is ${daily_sales * 29}`);
    console.log(`Your income for March is ${daily_sales * 31}`);
    console.log(`Your income for April is ${daily_sales * 30}`);
    console.log(`Your income for May is ${daily_sales * 31}`);
    console.log(`Your income for June is ${daily_sales * 30}`);
    console.log(`Your income for July is ${daily_sales * 31}`);
    console.log(`Your income for August is ${daily_sales * 31}`);
    console.log(`Your income for September is ${daily_sales * 30}`);
    console.log(`Your income for October is ${daily_sales * 31}`);
    console.log(`Your income for November is ${daily_sales * 30}`);
    console.log(`Your income for December is ${daily_sales * 31}`);
    return 0;
}

incomeOverTime(price_per_litre, 366)
console.log(leapYearSales(price_per_litre))