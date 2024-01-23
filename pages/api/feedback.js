// localhost:3000/api/feedback
import fs from "fs";
import path from "path";

//* In any file inside api folder, we don't export any react components
// We create functions, called as handlers

//# Next JS will automatically execute this function for any incoming requests sent to /api/feedback
//? We can execute any server side code in the function. No code is exposed to client.
function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    //* storing data in a file (feedback.json)
    //-> process.cwd() accesses the root directory of the project
    //# the args after that navigate to the file
    const filePath = path.join(process.cwd(), "data", "feedback.json");

    //* Using fs module to read and write(update) to the file
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    // writing data to file
    fs.writeFileSync(filePath, JSON.stringify(data));
    // sending status
    res.status(200).json({ message: "Success!", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "This works!" });
  }
}

export default handler;
