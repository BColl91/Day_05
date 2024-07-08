//Original
// let orderCount = 0;
// const takeOrder = (Topping1, Topping2) => {
//     console.log(`Pizza with ${Topping1} but not ${Topping2}. `);
//     orderCount++;
// }

// takeOrder("cheese", "beans");


//Refactored by chatGPT
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} but not ${topping2}.`);
//     orderCount++;
// };

// // Example usage:
// takeOrder("cheese", "beans");
// console.log(`Total orders: ${orderCount}`);
// takeOrder("pepperoni", "pineapple");
// takeOrder("mushrooms", "olives");

// console.log(`Total orders: ${orderCount}`); // Should output 3 after the above calls


