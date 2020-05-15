# NodePlzDemo
Rest endpoint for lookup of the city name corresponding to the german postal zip code
Local default port is 3000, results are json-style

Call http://localhost:3000/plz/<zipcode>

Example:

http://localhost:3000/plz/12357 --> {"plz":["Berlin"]}

http://localhost:3000/plz/01454 --> {"plz":["Radeberg","Wachau"]}

Rest endpoint for lookup of zip code(s) corresponding to a german city, case insensitive

Call http://localhost:3000/city/<city>
  
Browser encoding problems are automatically solved:

http://localhost:3000/city/N%C3%BCrnberg <--> http://localhost:3000/city/Nürnberg

Examples:

http://localhost:3000/city/ansbach

{"plz":["91522"]}

http://localhost:3000/city/Nürnberg

{"plz":["90402","90403","90408","90409","90411","90419","90425","90427","90429","90431","90439","90441","90443","90449","90451","90453","90455","90459","90461","90469","90471","90473","90475","90478","90480","90482","90489","90491"]}

Micro-profile health for service:

http://localhost:3000/health

{"outcome":"UP","checks":[{"name":"plz-city-files","state":"UP"}]}

or just try http://localhost:3000/ ;-)

For usage in ICP see dockerfile => set non-root user for running in ICP node = 999
