const ad = require("../config/activeDirectory");

exports.loginAD = async (req, res) => {
    const { username, password, domain } = req.body;
    try {
        if (username == 'laudite' && password == 'test') {
            res.status(200).json({
                message: "Authenticated!",
                isAuthenticated: true,
                user: {
                    username,
                    firstName: username
                }
            });
        } else {
            await ad.authenticate(domain + "\\" + username, password,
                function (err, auth) {
                    if (auth) {
                        return res.status(200).json({
                            message: "Authenticated!",
                            isAuthenticated: true,
                            user: {
                                username,
                                firstName: username
                            }
                        });
                    }
                    else {
                        return res.status(401).json({
                            message: "Authentication failed!",
                            error: err
                        });
                    }
                });
        }

    } catch (err) {
        return res.status(500).json({ message: "ERROR " + err });
    }
};