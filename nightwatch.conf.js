module.exports = {
    src_folders: ['tests'],
  
    webdriver: {
      start_process: true,
      port: 9515,
      server_path: "node_modules/.bin/chromedriver",
    },
  
    test_settings: {
      default: {
        desiredCapabilities : {
            browserName: "chrome"
        }
      }
    }
  };
  