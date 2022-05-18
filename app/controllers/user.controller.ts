const allAccess = (req: any, res: any) => {
    res.status(200).send("Public Content.");
};
const userBoard = (req: any, res: any) => {
    res.status(200).send("User Content.");
};

export { allAccess, userBoard };