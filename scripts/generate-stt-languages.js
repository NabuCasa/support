#!/usr/bin/env node

import fs from "fs";
import path from "path";
import https from "https";

const DATA_DIR = path.join(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
  "_data"
);
const PY_URL =
  "https://raw.githubusercontent.com/NabuCasa/hass-nabucasa/main/hass_nabucasa/voice.py";
const OUT_FILE = path.join(DATA_DIR, "sttLanguages.json");

function fetchPythonFile(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function extractSTTLanguages(pyContent) {
  // Match: STT_LANGUAGES = [ ... ]
  const match = pyContent.match(/STT_LANGUAGES\s*=\s*(\[[\s\S]*?\])/);
  if (!match) return null;
  let arrText = match[1];
  // Replace single quotes with double quotes
  arrText = arrText.replace(/'/g, '"');
  // Remove trailing commas before closing bracket
  arrText = arrText.replace(/,\s*\]/g, "]");
  try {
    return JSON.parse(arrText);
  } catch (e) {
    return null;
  }
}

(async () => {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
  const pyContent = await fetchPythonFile(PY_URL);
  const sttLangs = extractSTTLanguages(pyContent);
  if (!sttLangs) {
    console.error("Could not extract STT_LANGUAGES from Python file.");
    process.exit(1);
  }
  fs.writeFileSync(OUT_FILE, JSON.stringify(sttLangs, null, 2));
  console.log("STT languages written to", OUT_FILE);
})();
