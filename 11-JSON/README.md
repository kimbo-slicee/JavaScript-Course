<p align="center">
<img src="../assets/images/json.png">
</p>
### JSON JavaScript Object Notation 
JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript
object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server
to the client, so it can be displayed on a web page, or vice versa). You'll come across it quite often, so in this
article, we give you all you need to work with JSON using JavaScript, including parsing JSON so you can access data
within it, and creating JSON.
### No, really, what is JSON?
JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.
JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue — JavaScript provides a global JSON object that has methods available for converting between the two
> [!NOTE]
> Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.
### JSON structure
As described above, JSON is a string whose format very much resembles JavaScript object literal format. You can
include the same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays,
booleans, and other object literals. This allows you to construct a data hierarchy, like so [JSON file Example](01-JSON.json)

### Other notes
1. JSON is purely a string with a specified data format — it contains only properties, no methods.
2. JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
3. Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like JSONLint.
4. JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be valid JSON.
5. Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.