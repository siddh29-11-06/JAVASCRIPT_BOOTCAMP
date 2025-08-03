const fs = require(`fs/promises`);
async function processNames()
{
    const inputFilePath ="name.txt";
    const outputFilePath = "formatted_names.txt";
try
{
    console.log("Starting to process file...");
    const fileContent = await fs.readFile(inputFilePath, 'utf8');
    const names = fileContent.trim().split('\n');
    console.log(`Read ${names.length} names.`);

    const formattedNames = names.map(name => {
        const trimmedName = name.trim();
        return trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
    });

    const outputContent = formattedNames.join('\n');
    await fs.writeFile(outputFilePath, outputContent, 'utf8');

    console.log(`Successfully processed names and saved to ${outputFilePath}`);
}
catch(error)
{
    console.error("An error ccured during file processing:",error.message);
}
}
processNames();