const { getQueriesFrom } = require('@testing-library/nightwatch')
const { fireEvent } = require('@testing-library/dom')

module.exports = {

  async 'Demo test ecosia.org'(browser) {
    await browser.url('https://www.ecosia.org/')

    const { getByPlaceholderText } = getQueriesFrom(browser)

    const searchBox = await getByPlaceholderText(/search the web to plant trees.../i)

    await browser.setValue(searchBox, 'nightwatch')
    await fireEvent.submit(searchBox);

    await browser.end()
  }
}
