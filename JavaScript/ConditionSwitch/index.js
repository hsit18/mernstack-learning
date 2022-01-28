console.log("Loops...");

if (false) {
    console.log('passed');
} else if (false) {
    console.log('failed else');
}
else {
    console.log('failed');
}

// Voting App: Age is greater thanequal to 18 then Vote else go back

let age = 18;
if (age >= 18) {
    console.log("Eligible");
} else if (age === 17) {
    console.log('Currently not Eligible. Please comeback next year')
} else {
    console.log('not Eligible')
}

// Switch Case

switch (age) {
    case 17:
        console.log('!!!Currently not Eligible. Please comeback next year')
        break;
    case 19:
        console.log('You are Eligible.')
        break;

    case 18:
        console.log("Eligible");
        break;
    default:
        console.log('not Eligible')
        break
}