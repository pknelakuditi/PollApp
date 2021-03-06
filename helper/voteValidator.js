/**
 * Created by pavan on 8/30/15.
 */
// voteValidator module
'use strict';


var voteValidator = function(poll, callback) {
    var err = false;


    if (poll === undefined) {
        err = 'undefined poll';
        return false;
    }
    if (typeof poll !== 'object') {
        err = 'invalid type';
        return false;
    }
    if (Object.keys(poll).length === 0) {
        err = 'poll cannot be empty';
        return false;
    }

    if (poll.length == 1) {
        err = 'should have only choices';
    }


    callback(err);

    if (err) {
        return false;
    }
    return true;
};


module.exports = voteValidator;