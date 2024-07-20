import jwt from "jsonwebtoken";
import { JWT_SECRET } from '../config/index.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token)
    if (!token) {
      return res.status(401).status({message:"You are not authenticated!"})
      // return next(createError(401, "You are not authenticated!"));
    }
  
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).status({message:"Token is not valid!"})
      req.user = user;
    });
    next();
};

export const verifyUser = (req, res, next) => {
    // calling verification token 
    verifyToken(req, res, next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.status(403).status({message:"You are not authorized!"});
      }
    });
};

export const verifyAdmin = (req, res, next) => {
    // calling verification token
    verifyToken(req, res, next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return res.status(403).status({message:"You are not authorized!"});
      }
    });
};