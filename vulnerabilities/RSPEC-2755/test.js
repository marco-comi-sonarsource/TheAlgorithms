const libxmljs = require("libxmljs");
var fs = require('fs');
 
var xml = fs.readFileSync('xxe.xml', 'utf8');
var xsd = fs.readFileSync('xxe3.xsd', 'utf8');

// libxmljs
// to be compliant:
// substitute entities: noent: false (by default OK)
// network access: nonet: true (by default KO) but doesn't seem to have an impact in this library so we don't care

var xmlDoc = libxmljs.parseXmlString(xml, { noblanks: true, noent: true, nocdata: true }); // Noncompliant: noent set to true
console.log('print document1: %s', xmlDoc.toString());

var xsdDoc = libxmljs.parseXmlString(xsd); // Compliant: by default noent set to false
xmlDoc.validate(xsdDoc);

var xmlDoc = libxmljs.parseXmlString(xml, { noblanks: true, nonet: false, nocdata: true }); // Compliant: by default noent set to false
console.log('print document2: %s', xmlDoc.toString());

var xmlDoc = libxmljs.parseXmlString(xml, { nonet: true }); // Compliant: by default noent set to false
console.log('print document3: %s', xmlDoc.toString());


var xmlDoc = libxmljs.parseXml(xml, { noblanks: true, noent: true, nocdata: true });  // Noncompliant: noent set to true
console.log('print document12: %s', xmlDoc.toString());

var xsdDoc = libxmljs.parseXml(xsd); // Compliant: by default noent set to false
xmlDoc.validate(xsdDoc);

var xmlDoc = libxmljs.parseXml(xml, { noblanks: true, nonet: true, nocdata: true }); // Compliant: by default noent set to false
console.log('print document13: %s', xmlDoc.toString());

var xmlDoc = libxmljs.parseXml(xml, { nonet: true }); // Compliant: by default noent set to false
console.log('print document14: %s', xmlDoc.toString());


// parseHtmlString, it's HTML not XML so XXE has no impacts

var xmlDoc = libxmljs.parseHtmlString(xml, { noblanks: true, noent: true, nocdata: true }); // Compliant
console.log('print document4: %s', xmlDoc.toString());

var xmlDoc = libxmljs.parseHtmlString(xml, { noblanks: true, nonet: false, nocdata: true }); // Compliant
console.log('print document5: %s', xmlDoc.toString());

var xmlDoc = libxmljs.parseHtmlString(xml); // Compliant
console.log('print document6: %s', xmlDoc.toString());

var xmlDoc = libxmljs.parseHtmlString(xml, { nonet: true }); // Compliant
console.log('print document7: %s', xmlDoc.toString());


// parseHtmlFragment, it's HTML not XML so XXE has no impacts

var xmlDoc = libxmljs.parseHtmlFragment(xml, { noblanks: true, noent: true, nocdata: true });  // Compliant
console.log('print document8: %s', xmlDoc.toString());

var xmlDoc = libxmljs.parseHtmlFragment(xml, { noblanks: true, nonet: false, nocdata: true }); // Compliant
console.log('print document9: %s', xmlDoc.toString());

var xmlDoc = libxmljs.parseHtmlFragment(xml); // Compliant
console.log('print document10: %s', xmlDoc.toString());

var xmlDoc = libxmljs.parseHtmlFragment(xml, { nonet: true }); // Compliant
console.log('print document11: %s', xmlDoc.toString());



/*


// libxmljs2
var xmlDoc = libxmljs2.parseXmlString(xml, { noblanks: true, noent: true, nocdata: true });

var gchild = xmlDoc.get('//to');
 
console.log(gchild.text()); // prints "grandchild content"

console.dir(xmlDoc);
*/
