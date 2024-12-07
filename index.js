// Function for fix transaction methods on transaction context
module.exports.fixTransactionCallback = (prototype) => {
    prototype.transaction = function(callback) {
        return prototype._transaction(function(e, ctx) {
            if (e != null) {
                throw e
            }
            return callback(ctx)
        })
    }
}