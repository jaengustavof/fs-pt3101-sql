const { selectTrainers } = require('../../queries/trainers');
const errors = require('../../errors');

module.exports = db => async (req, res, next) =>{
    const result = await selectTrainers(db)();

    if(!result.ok){
        return next(errors[400])
    }

    res.status(200).json({
        success: true,
        data: result.data
    })
}