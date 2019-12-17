
## To run project:
**Note: MAke sure you have Node installed!**
### `npm i`
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
No aditional set required/

## Chalenges i faced:
1. API is not REST compatible... Geting data with POST is something new for me...
2. Somteimes API requires id, and in some cases team_id. That took me some time to figure this out.
3. API route /teams/games/new always returns 404 whatewher i do.
4. Instead of timestamp (11134234234) API is requiring something wery similiar to UTC with timezone?

## What else whould i do if this was Prod level application:

* Enable TS support
* Split components even more
* Enbled RXJS to support complex async calls

