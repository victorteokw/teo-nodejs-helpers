// Function for fix transaction methods on transaction context
module.exports.fixTransactionCallback = function (prototype) {
    prototype.transaction = function(callback) {
        return this._transaction(function(e, ctx) {
            if (e != null) {
                throw e
            }
            return callback(ctx)
        })
    }
}
