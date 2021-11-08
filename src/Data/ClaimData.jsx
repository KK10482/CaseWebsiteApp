const KEYS ={
    ClaimData:'ClaimData',
    Signature: 'Signature'
}

export function insertClaimData(data){
    localStorage.setItem(KEYS.ClaimData, JSON.stringify(data));
}

export function GetClaimData(){
    if (localStorage.getItem(KEYS.ClaimData == null))
        localStorage.setItem(KEYS.ClaimData, JSON.stringify([]));

    return JSON.parse(localStorage.getItem(KEYS.ClaimData));
}

export function insertSignature(data){
    localStorage.setItem(KEYS.Signature, data);
}

export function GetSignature(){
    if (localStorage.getItem(KEYS.Signature == null))
        localStorage.setItem(KEYS.Signature, '');
    return localStorage.getItem(KEYS.Signature);
}

export function ClearSignature(){
    localStorage.removeItem(KEYS.Signature);
}