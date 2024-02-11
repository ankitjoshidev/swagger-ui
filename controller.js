exports.getHelloMessage = async (req, res) => {
    try {
      return res.status(200).json({ message: "Hello" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error retrieving users' });
    }
  };
exports.getFullName = async (req, res) => {
    try {
      return res.status(200).json({ message: "Hello Full Name: "+req.query.firstname+" "+req.query.lastname });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error retrieving users' });
    }
  };
exports.getFullNameWithBody = async (req, res) => {
    try {
      return res.status(200).json({ message: "Hello Full Name: "+req.body.firstname+" "+req.body.lastname });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error retrieving users' });
    }
  };
  