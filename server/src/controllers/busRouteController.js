export const createRoute = async (req, res) => {
  try {
    const route = await Route.create(req.body);
    res.status(201).json(route);
  } catch (error) {
    res.send(500).json({ message: "faild to create a route", error });
  }
};
