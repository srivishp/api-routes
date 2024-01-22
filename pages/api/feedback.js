// localhost:3000/api/feedback

//* In any file inside api folder, we don't export any react components
// We create functions, called as handlers

//# Next JS will automatically execute this function for any incoming requests sent to /api/feedback
//? We can execute any server side code in the function. No code is exposed to client.
function handler(req, res) {
  res.status(200).json({ message: "This works!" });
}

export default handler;
