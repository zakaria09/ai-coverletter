import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request: NextRequest) {
  const { url } = await request.json();
  console.log(url)

  if (!url) return NextResponse.json('Please provide a url...');

  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true
  });
    const page = await browser.newPage()
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    })
    const jobDescription = await page.$('#jobDescriptionText')
    console.log(jobDescription)
    const screen = await page.screenshot();
    await browser.close()
    return new NextResponse(screen)
  } catch (err) {
    console.log('error', err)
    return NextResponse.json(err);
  }

}