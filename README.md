# Cushon ISA Assignment

For information about this repo see ./requirements

## Run

```bash
git clone https://github.com/chrisBRN/cushon.git

cd cushon
npm install
npm run dev
```

## Overview
This repo contains an example React application / code for a fictional ISA offering broadly inline with that of Cushon.

The focus is broadly UI-based, a lot of the code ended up being stubs or mocks related to the data/control flow.

The BE mocks introduce a faux delay to simulate network latency

The application is very very loosely responsive. 
This is unlikely to hold up to scrutiny, however, having only been tested at 1920x1080 and with a simulated iPhone SE (375x667) 

The application is largely untested, due to time constraints, but some example tests are included for the ISA helpers 'src/pages/ISA/helpers/__tests__'

## TODO
- finish testing framework scaffolding
  - add tests for React components and hooks
- move all copy / translations to a central file
- tidy up CSS to better use variables / theming
- consider generalising API hooks - or a different approach GQL / ReactQuery etc
- refactor Parent -> ISAListItem props to better isolate rendering logic from rendering details (i.e structure vs copy)
- use a better loading 'spinner'
- add general error handler
- and much much more...
