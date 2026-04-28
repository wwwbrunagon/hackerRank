####  Problem decomposition (how to think)
You are not “converting time”. You are:

1. Parsing a fixed-format string: `hh:mm:ssAM | PM`

2. Applying two deterministic rules:
  - `AM`: 
    - `12` → `00`
    - otherwise → keep hour

  - `PM`:
    - `12` → keep hour
    - otherwise → `hour + 12`

3. Reassembling into `HH:mm:ss`
