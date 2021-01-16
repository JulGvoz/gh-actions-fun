const core = require('@actions/core')
const github = require('@actions/github')

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet')
    console.log(`Hello, ${nameToGreet}`)
    const time = (new Date()).toTimeString()
    core.setOutput("time", time)

    // get the json webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(payload)
} catch (err) {
    core.setFailed(err.message)
}