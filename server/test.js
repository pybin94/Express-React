
import {google} from 'googleapis';
import key from './Analytics.json' assert { type: "json" };

const getAccessToken = () => {
    let jwtClient = new google.auth.JWT(
        key.client_email, null, key.private_key,
        ['https://www.googleapis.com/auth/analytics.readonly'], null);
        jwtClient.authorize((error, tokens) => {
    
        console.log("토큰", tokens)
        if (error) {
          console.log("[ERROR] getAccessToken", error);
          return;
        }
        let access_token = (tokens.access_token.substring(0, tokens.access_token.length - 793))
    });
}

getAccessToken()