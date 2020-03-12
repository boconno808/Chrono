import React from "react";
import request from "request";
import uuid from "uuid/v4";

const AzureAPI = () => {
    const key_var = process.env.TRANSLATOR_TEXT_SUBSCRIPTION_KEY;
    // if (!key_var) {
    //     throw new Error("Please set/export the following environment variable: " + key_var);
    // }
    const subscriptionKey = process.env.key_var;
    const endpoint_var = process.env.TRANSLATOR_TEXT_ENDPOINT;
    // if (!endpoint_var) {
    //     throw new Error("Please set/export the following environment variable: " + endpoint_var);
    // }
    const endpoint = process.env.endpoint_var;

    return (
        function translateText () {
            {options.map((options) =>
                let options = [{
                    method: "POST"},
                    {baseUrl: endpoint},
                    {url: "translate"{},
                    {qs: [{
                    "api-version": '3.0',
                    "o": ['de', 'it']
                    }]},
                    {headers: [{
                    "Ocp-Apim-Subscription-Key": subscriptionKey,
                    "Content-type": "application/json",
                    "X-ClientTraceId": uuid.uuidv4().toString()
                    }]},
                    {body: [{
                        "text": "Hello World!"
                    }]},
                    {json: true},
                ];
            )}
            let result = await requestTranslation(options);
            transData[key] = result[0].translations[0].text;
        }   
    )
    
}

export default AzureAPI;