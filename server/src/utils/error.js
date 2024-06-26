class CustomErrorHandler extends Error {    //extended the javaScript inbild error handler
    constructor(status, msg){
        super()
        this.status = status;
        this.message=msg;
    }

    static alreadyExist(message){
        return new CustomErrorHandler(409, message);
    }
    
    static unableToCreateUser(message){
        return new CustomErrorHandler(500, message);
    }

    static incorerctCredentials(message="Incorrect email or Password"){
        return new CustomErrorHandler(401, message);
    }
    
    static incorerctUser(message="User not found"){
        return new CustomErrorHandler(401, message);
    }
    
    static incorerctPassword(message="Incorrect Password"){
        return new CustomErrorHandler(401, message);
    }
    
    static unAuthorized(message="Access denies"){
        return new CustomErrorHandler(401, message);
    }

    static notFound(message="404 Not Found"){
        return new CustomErrorHandler(404, message);
    }

    static serverError(message="image uploading failed"){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToCreateHotel(message){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToUpdateHotel(message){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToDeleteHotel(message){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToFetchHotel(message){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToFindRoom(message="error!, unable to find and update a room"){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToCreateRoom(message="error!, unable to create a room, please try after some time"){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToDeleteRoom(message="error!, unable to delete a room, please try after some time"){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToFetchRoom(message){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToUpdateUser(message="unable to update user"){
        return new CustomErrorHandler(500, message);
    }
    
    static unableToDeleteUser(message="unable to delete user"){
        return new CustomErrorHandler(500, message);
    }

    static unableToSubscribe(message="unable to subscribe now"){
        return new CustomErrorHandler(400, message);
    }
    static alreadySubscrubed(message="Email Id already subscribed with us"){
        return new CustomErrorHandler(400, message);
    }
    static unableToSendOtp(messaage="OTP sending Failed."){
        return new CustomErrorHandler(500, messaage);
    }
}   

export default CustomErrorHandler;

