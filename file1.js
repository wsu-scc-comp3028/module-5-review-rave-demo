import fs from 'fs/promises';

/**
 * Asynchronously reads data from the specified file path and returns the data.
 * @param {string} filePath - The path to the file to be read.
 * @returns {Promise<string>} The content of the file as a string.
 */
async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        return data;
    } catch (error) {
        console.error('Failed to read file:', error);
        throw error; // Re-throwing the error for further handling if necessary
    }
}
// Calling the function from a name async function for demontration
async function performFileRead() {
    try { 
        const data = await readFileAsync('./example.txt');
        // do something with the data - store it for longer
    } catch (error) {
        console.error('Error encounted:', error);
    }
}
performFileRead();