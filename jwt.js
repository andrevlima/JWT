/**
 * use this to make a Base64 encoded string URL friendly, 
 * i.e. '+' and '/' are replaced with '-' and '_' also any trailing '=' 
 * characters are removed
 *
 * @param {String} str the encoded string
 * @returns {String} the URL friendly encoded String
 */
function Base64EncodeUrl(str){
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
}

/**
 * JWT
 * 
 * Receives a JWT and materializes it in an javascript object or vice versa
 */
var JWT = {
    parse: function(jwtStr) {
        var parts = jwtStr.split('.');

        return {
            header: JSON.parse(atob(parts[0])),
            payload: JSON.parse(atob(parts[1])),
            signature: parts[2]
        }
    },
    stringify: function(jwtObj) {
        var header = btoa(JSON.stringify(jwtObj.header));
        var payload = btoa(JSON.stringify(jwtObj.payload));
        var signature = jwtObj.signature;

        return [Base64EncodeUrl(header),Base64EncodeUrl(payload),signature].join('.');
    }
}

if(_Global_JWT_Name_) {
    window[_Global_JWT_Name_] = JWT;
} else {
    window.JWT = JWT;
}

