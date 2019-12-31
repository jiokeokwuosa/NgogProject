export const tokenConfig = (getState,fileupload=false) => {
        
        const token = getState().auth.token;
        const config = {
            headers:{
                           
            }
        }
        if(token){
            config.headers['token'] = token;
        }
        if (fileupload){
            config.headers['Content-Type'] = 'multipart/form-data';
        }
        return config;
}