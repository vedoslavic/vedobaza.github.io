
let getScore = () => {
    let rhymes = parseInt(document.getElementById("rhymes").value);
    let rhymesValue = document.getElementById("rhymesValue");
    rhymesValue.textContent = rhymes;

    let structure = parseInt(document.getElementById("structure").value);
    let structureValue = document.getElementById("structureValue");
    structureValue.textContent = structure;

    let style = parseInt(document.getElementById("style").value);
    let styleValue = document.getElementById("styleValue");
    styleValue.textContent = style;

    let individuality = parseInt(document.getElementById("individuality").value);
    let individualityValue = document.getElementById("individualityValue");
    individualityValue.textContent = individuality;

    let atmosphere = parseInt(document.getElementById("atmosphere").value);
    let atmosphereValue = document.getElementById("atmosphereValue");
    atmosphereValue.textContent = atmosphere;

    let trend = parseInt(document.getElementById("trend").value);
    let trendValue = document.getElementById("trendValue");
    trendValue.textContent = trend;

    let result = document.getElementById("result");

    let score = (rhymes + structure + style + individuality) * (1 + 0.1 * atmosphere) * (1 + 0.1 * trend);

    result.textContent = parseInt(score);
};

getScore();
