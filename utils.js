
function runAutomation(automationName, arguments) {
      const robot = UiPathRobot.init();

      robot.getProcesses()
      .then((processes) => {
        let statusHandler = (status) => {console.log('automation status -' + status)};
        let automatedProcess = processes.find(p => p.name.includes(automationName));

        automatedProcess.start(arguments).onStatus(statusHandler).then(() => {
          statusHandler("finished automation");
        }, err => {
          console.log(`Could not start automation ${automationName} error: ${err}`);
        })
      }, err => {
        console.log(`Could not find automation ${automationName} error ${err}`);
      });}


      function sendEmail(emailAddress) {
        runAutomation('Generate.Seahawks.Schedule', {'recipientEmail': emailAddress});
      }
