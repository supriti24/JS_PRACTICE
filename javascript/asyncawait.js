function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Supriti"), 5000);
    });
}

async function showName() {
    console.log("Wait >> ", name);
    const name = await fetchName(); // waits for promise to finish
    
}

console.log("Still waiting .. :");
showName();
