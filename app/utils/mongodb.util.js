const { MongoClient} = require("mongodb")

class MongoDB {
    static connect = async (uri) => {
        if(this.cilent) return this.cilent;
        this.cilent = await MongoClient.connect(uri);
        return this.cilent;
    };
}

module.exports = MongoDB