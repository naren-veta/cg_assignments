const fs = require("fs/promises");
async function readFiles() {
    const file_name = process.argv[2];
    let filehandle;
    try {
        filehandle = await fs.open(file_name, 'r');
        const data = await filehandle.readFile({ encoding: 'utf-8' });
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        await filehandle.close();
    }
}
readFiles();