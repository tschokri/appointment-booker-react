import { launch } from "puppeteer";

(async () => {
  try {
    // Launch a headless browser with Puppeteer
    const browser = await launch();
    const page = await browser.newPage();

    // Navigate to the webpage to be scraped
    await page.goto("https://service.berlin.de/standorte/");

    // Extract data from the webpage
    const results = await page.$$eval(".topic-dls", (element) =>
      element
        .filter(
          (e) =>
            e.textContent.includes("Bürgeramt") ||
            e.textContent.includes("Bezirksamt")
        )
        .map((e) => e.textContent)
    );
    // Close the browser
    await browser.close();
    console.log(results);
    return results;
  } catch (error) {
    console.error("Error scraping data:", error);
  }
})();
