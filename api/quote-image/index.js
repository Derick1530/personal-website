// Query params:
// 1. text: Max length of 131 characters
// 2. theme: 'light' or 'dark'
// 3. template: 'basic' or 'thinking'

import chromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

import renderTemplate from './templates/renderTemplate'

module.exports = async (req, res) => {
  let text = req.query.text
  const theme = req.query.theme
  const template = req.query.template

  if (!text) {
    text = 'Having nothing, nothing can be shared.'
  }

  if (text.length > 131) {
    text = 'Sharing too much is a far greater fault than sharing too little.'
  }

  const html = renderTemplate(template, {
    theme,
    text
  })

  const options = process.env.AWS_REGION
    ? {
        args: chromium.args,
        executablePath: await chromium.executablePath,
        headless: chromium.headless
      }
    : {
        args: [],
        executablePath:
          process.platform === 'win32'
            ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
            : process.platform === 'linux'
              ? '/usr/bin/google-chrome'
              : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      }

  const browser = await puppeteer.launch(options)

  const page = await browser.newPage()

  await page.setViewport({
    width: 2400,
    height: 1260
  })

  await page.setContent(html, {
    waitUntil: ['load', 'domcontentloaded', 'networkidle0']
  })

  const file = await page.screenshot({
    type: 'png'
  })

  await browser.close()

  res.statusCode = 200
  res.setHeader('Content-Type', 'image/png')
  res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000')

  return res.end(file)
}
