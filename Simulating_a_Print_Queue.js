// Queue Implementation
class Queue {
    constructor() {
        this.items = [];
    }

    // Add item to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove item from the queue (FIFO)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Peek at the front item
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print queue contents
    printQueue() {
        return this.items.map(job => `${job.name} (${job.pages} pages)`).join(", ");
    }
}


// Printer Queue Simulation

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    // Add a print job
    addJob(name, pages) {
        const job = { name, pages };
        this.queue.enqueue(job);
        console.log(`Added job: ${name} (${pages} pages)`);
    }

    // Process the next job
    processJob() {
        if (this.queue.isEmpty()) {
            console.log("No jobs to process.");
            return;
        }
        const job = this.queue.dequeue();
        console.log(`Processing job: ${job.name} (${job.pages} pages)`);
    }

    // Show all jobs in the queue
    showQueue() {
        if (this.queue.isEmpty()) {
            console.log("Queue is empty.");
        } else {
            console.log("Current queue:", this.queue.printQueue());
        }
    }
}

//  Testing the Solution
// Create printer queue
const printer = new PrinterQueue();

// Add jobs
printer.addJob("Alice", 5);
printer.addJob("Bob", 10);
printer.addJob("Charlie", 3);

// Show queue
printer.showQueue();

// Process jobs one by one
printer.processJob(); // Alice
printer.processJob(); // Bob

// Show queue after processing
printer.showQueue();

printer.processJob(); // Charlie
printer.processJob(); // No jobs left


// expected output 
/*
Added job: Alice (5 pages)
Added job: Bob (10 pages)
Added job: Charlie (3 pages)
Current queue: Alice (5 pages), Bob (10 pages), Charlie (3 pages)
Processing job: Alice (5 pages)
Processing job: Bob (10 pages)
Current queue: Charlie (3 pages)
Processing job: Charlie (3 pages)
No jobs to process.
*/ 