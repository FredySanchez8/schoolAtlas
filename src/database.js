import { connect } from "mongoose";
import { MONGODB_SB } from "./config";

(async () => {
    try {
        const db = await connect(MONGODB_SB);
        console.log("Database connected to", db.connection.name);
    } catch (error) {
        console.error(error); 
    }
})();