var configValue = require("./config.json");

module.exports = {
    getDbCnString : function(){
        return `mongodb://${configValue.username}:${configValue.password}@ds119984.mlab.com:19984/todos123`;
    }
}