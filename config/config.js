 const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 8000,
 jwtSecret: process.env.JWT_SECRET || "I5aeDqp20NEFy21P", 
 mongoUri: process.env.MONGODB_URI ||"mongodb+srv://kakapuka677_db_user:I5aeDqp20NEFy21P@cluster0.gvbjh9v.mongodb.net/Portfolio"||
 process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config
