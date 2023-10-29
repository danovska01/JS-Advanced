function square(n = 5) {
    let string = "";
    
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) { 
            if (j < n - 1) {
                string += "* ";
            } else {
                string += '*';
            }
        }
      
        string += "\n";
    }
    
    console.log(string);
}

// Test the function with different sizes
square(); // Default size 5
square(3); // Custom size 3
square(7); // Custom size 7
