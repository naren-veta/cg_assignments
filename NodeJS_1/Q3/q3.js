const fs = require("fs/promises");

async function listOfFiles() {
    try {
        const files = await fs.readdir(__dirname, [{ encoding: "utf" }])

        for (const file of files) {

            let stat = await fs.stat(file);
            if (stat.isDirectory()) {
                console.log(`DIR:${file}`)
            }
            else if (stat.isFile()) {
                console.log(`File:${file}`)
            }
            else {
                console.log(`Unknow file`)
            }

        }
    } catch (error) {
        console.log(error)
    }
}
listOfFiles();