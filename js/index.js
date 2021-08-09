// Iteration 1: Names and Input
const hacker1 = "Peter";
console.log (`The drivers name is ${hacker1}`)
const hacker2 = "Paulo";
console.log (`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow you both have equally long names, ${hacker1.length} characters`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

// Iteration 3: Loops

//3.1.
let driverNameWithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
    if (i > 0);
    driverNameWithSpaces = driverNameWithSpaces +hacker1[i] + " ";
}
    console.log(driverNameWithSpaces.toUpperCase());

//3.2.
    let navigatorNameBackwards = "";
    for (let i = hacker2.length -1; i >= 0; i--) {
        navigatorNameBackwards = navigatorNameBackwards + hacker2[i];
    }
    console.log(navigatorNameBackwards);

    //3.3.
    if (hacker1 > hacker2){
        console.log("The driver's name goes first.");
    } else if (hacker2 > hacker1){
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log ("What?! You both have the same name?");
    }

    //Bonus

    let Lorem = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus mollis urna, ac bibendum ipsum tristique nec. Aliquam nec velit fermentum, dapibus metus sed, ultricies est. Aliquam nec augue consequat, suscipit nibh vitae, ultrices elit. Mauris vel enim interdum, luctus risus at, consectetur velit. Maecenas commodo, leo at iaculis feugiat, magna justo lobortis tortor, ac consequat ante velit id turpis. Nam ante tortor, tincidunt vitae velit quis, cursus dapibus neque. Aenean sagittis urna quis vestibulum pellentesque  In aliquam risus eget velit hendrerit, pulvinar hendrerit magna pretium. Praesent posuere faucibus metus, quis feugiat nunc mattis mattis. Integer volutpat erat id nisi finibus fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur non cursus mauris, vitae vehicula quam. Pellentesque blandit tincidunt tristique. Donec pellentesque nulla ac gravida iaculis. Morbi diam sem, rutrum at neque sed, sollicitudin viverra tellus. Duis rutrum nec metus quis luctus. Pellentesque blandit in risus sed rhoncus. Praesent non blandit urna. Fusce mi purus, tempus ac nisi nec, tincidunt pellentesque est. Nunc ornare erat feugiat ultricies mattis. Nam sagittis, orci sit amet iaculis mattis, orci ligula elementum sapien, sed interdum augue tellus in lectus. Vivamus fringilla velit enim, ac pulvinar massa fermentum sit amet. Sed vulputate dolor scelerisque nunc sodales sagittis. Sed malesuada nisl a nisl porta tempus eu id lorem. Pellentesque vestibulum vestibulum lectus non venenatis. Quisque mollis accumsan magna non sollicitudin. Pellentesque lectus ante, scelerisque in erat vitae, efficitur lacinia massa. Duis condimentum urna ligula, sit amet tempor orci semper nec. Donec at imperdiet massa. Vestibulum efficitur ultricies ligula rhoncus scelerisque. Etiam finibus hendrerit libero, nec sollicitudin ipsum sagittis at. Phasellus a porttitor sapien, et iaculis metus. Aliquam id metus id orci tristique gravida. Sed a sapien et odio placerat faucibus. Praesent eros quam, laoreet et dignissim eget, blandit ac tellus.")
console.log(Lorem);

