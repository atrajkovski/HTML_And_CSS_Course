let language = "Javascript";

let message = `Let's learn ${language}  it's fun`;

console.log(message);

 let nrToStr = 10;
 nrToStr =  String(nrToStr);
 console.log(nrToStr, typeof (nrToStr));

 let strToNr = "20";
 strToNr = Number(strToNr);
 console.log(strToNr, typeof nrToStr);

 let strToBool = "any string will return true";
 strToBool = Boolean(strToBool);
 console.log(strToBool, typeof (strToBool));

 console.log("-----------------------");
 let nullToNr = null;
 nullToNr = Number(nullToNr);
 console.log(nullToNr, typeof (nullToNr));
 console.log("-----------------------");
 let str2ToNr = "";
 str2ToNr = Number(str2ToNr);
 console.log(str2ToNr, typeof (str2ToNr));