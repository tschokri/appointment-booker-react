import { launch } from "puppeteer";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 5500;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/bookappointment", (req, res) => {
  book(req.body.userData, req.body.appointmentData);
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
        appointmentData.location +
        "&anliegen[]=" +
        appointmentData.service +
        "&herkunft=1"
    );
  } catch (error) {
    console.error("Error scraping data:", error);
  }

  let appointmentBooked = false;
  let monthElement = selectElementContaining(appointmentData.month);
  while (!appointmentBooked) {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    let dayElement = selectElementContaining(appointmentData.day);
  }
}

const selectElementContaining = async (day) => {
  return await page.$x("//a[text()[contains(., '" + day + "')]]");
};
