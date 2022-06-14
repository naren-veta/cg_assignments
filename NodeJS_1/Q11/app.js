const fs = require('fs/promises');

async function readContentsArray() {
  const file_name = "./file.txt";
  let filehandle;
  try {
      filehandle = await fs.open(file_name, 'r');
      const data = await filehandle.readFile({ encoding: 'utf-8' });
    console.log(data)
  }
  catch (err) {
      console.log(err);
  }
  finally {
      await filehandle.close();
  }
}

readContentsArray();