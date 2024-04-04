// This section particularly focuses on the controlling all the functions 

const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) { // Generate the new short unique id that can be used.
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await URL.create({  /// Creating the new json objects. 
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {  /// this section will return the total numbers of clicks on th particular.
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {// Exporting modules
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
