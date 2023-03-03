const getAllJobs = (req, res) => {
    res.send('get all Jobs')
}
const getJob = (req, res) => {
    res.send('get single Job')
}
const createJob = (req, res) => {
    res.send('create Job')
}
const updateJob = (req, res) => {
    res.send('update Job')
}
const deleteJob = (req, res) => {
    res.send('delete Job')
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }