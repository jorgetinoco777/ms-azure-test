module.exports = async function(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            request: req.query,
            body: {
                date: new Date().toISOString
            }
        };
    }
};