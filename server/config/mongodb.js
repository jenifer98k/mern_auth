import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}/mern-auth`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Stop the app if DB connection fails
  }
};

// Event Listeners for Debugging
mongoose.connection.on("error", (err) => {
  console.error(`❌ MongoDB Connection Error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB Disconnected. Reconnecting...");
  connectDB();
});

export default connectDB;
