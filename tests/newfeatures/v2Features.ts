function outputforfunctions(type: string, message: string) {
    console.log("Loading Output Functions...");
    setTimeout(() => {
        console.log(`[${type}] ${message}`);
    }, 1000);
}