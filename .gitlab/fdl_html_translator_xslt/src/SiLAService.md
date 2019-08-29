
# SiLA Feature: SiLA Service (SiLAService)

          
## SiLA Feature Commands

      
###  Get Feature Definition (GetFeatureDefinition)

  ** Description **
      Get all details on one Feature through the qualified Feature id.
###  Set Server Name (SetServerName)

  ** Description **
      Sets a human readable name to the Server Name property

## SiLA Feature Properties

      
###  Server Name (ServerName)

  ** Description **
      Human readable name of the SiLA Server.
###  Server Type (ServerType)

  ** Description **
      The type of Server this is. Is specified by the implementer of the server and not unique.
###  Server UUID (ServerUUID)

  ** Description **
      Globally unique identifier that identifies a SiLA Server. The Server UUID MUST
            be generated once and always remain the same.
###  Server Description (ServerDescription)

  ** Description **
      Description of the SiLA Server.
###  Server Version (ServerVersion)

  ** Description **
      Returns the version of the SiLA Server. A "Major" and a "Minor" version number (e.g. 1.0) MUST be provided,
            a Patch version number MAY be provided. Optionally, an arbitrary text, separated by an underscore MAY be appended, e.g. “3.19.373_mighty_lab_devices”
        
###  Server Vendor URL (ServerVendorURL)

  ** Description **
      Returns the URL to the website of the vendor or the website 
            of the product of this SiLA Server.
###  Implemented Features (ImplementedFeatures)

  ** Description **
      Returns a list of qualified Feature identifiers of all 
            implemented Features of this SiLA Server.
