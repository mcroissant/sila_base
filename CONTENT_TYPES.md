The following ContentTypes are officially supported by SiLA and MUST 
be handled properly:

<table>
  <tr>
    <td><b>ContentType</b></td>
    <td>Details</td>
  </tr>
  <tr>
    <td>[application/xml](https://www.iana.org/assignments/media-types/application/xml)</td>
    <td>
        For XML data, a ContentType of "application/xml" MUST be used.
        <br/> This ContentType can be applied to the SiLA Binary Type and 
        the SiLA String Type. If the SiLA Binary Type is used, 
        the character encoding MUST be [UTF-8](https://en.wikipedia.org/wiki/UTF-8).    
    </td>
  </tr>
  <tr>
   <td>[application/x-animl](https://www.animl.org)</td>
   <td>
       For AnIML data, a ContentType of "application/x-animl" MUST be used.
       In addition, it is RECOMMENDED to specify a "parameter" (according to "Syntax of 
       the Content-Type Header Field" from [RFC 2045](https://www.ietf.org/rfc/rfc2045.txt)) that identifies 
       the AnIML technique definition like this "technique={URI of the technique definition}".
       <br/> This ContentType can be applied to the SiLA Binary Type and 
       the SiLA String Type. If the SiLA Binary Type is used, the character 
       encoding MUST be [UTF-8](https://en.wikipedia.org/wiki/UTF-8).   
   </td>
  </tr>
  <tr>
     <td>[application/json](https://www.iana.org/assignments/media-types/application/json)</td>
     <td>
         For JSON data, a ContentType of "application/json" MUST be used.
         <br/> This ContentType can be applied to the SiLA Binary Type and the 
         SiLA String Type. If the SiLA Binary Type is used, the character encoding 
         MUST be [UTF-8](https://en.wikipedia.org/wiki/UTF-8). 
     </td>
    </tr>
</table>
    
