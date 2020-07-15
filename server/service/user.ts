import { Request, Response, NextFunction } from "express";
import { check, sanitize, validationResult } from "express-validator";

export const welcomeMsg = (req: Request, res: Response) => {
    res.json({message:"Express Server"});
};

/**
 * POST /signup
 * Create a new account.
 */
export const postSignup = async (req: Request, res: Response, next: NextFunction) => {
    await check("email", "Email is not valid").isEmail().run(req);
    await check("password", "Password must be at least 4 characters long").isLength({ min: 4 }).run(req);
    await check("confirmPassword", "Passwords do not match").equals(req.body.password).run(req);
    await sanitize("email").normalizeEmail({ gmail_remove_dots: false }).run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({message:"Invalid fields"});
    }

   res.json({message:"sign up success"});

};