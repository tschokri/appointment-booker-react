import { launch } from "puppeteer";
import express from "express";
import cors from "cors";

const app = express();
const port = 5500;

app.use(cors());

app.get("/bookappointment", (req, res) => {
  book(req.headers["location"], req.headers["service"]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

async function book(userData, appointmentData) {
  try {
    // Launch a headless browser with Puppeteer
    const browser = await launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to the webpage to be scraped
    await page.goto(
      "https://service.berlin.de/terminvereinbarung/termin/tag.php?termin=1&dienstleister=" +
        location +
        "&anliegen[]=" +
        service +
        "&herkunft=1"
    );
    //await browser.close();
  } catch (error) {
    console.error("Error scraping data:", error);
  }
}
