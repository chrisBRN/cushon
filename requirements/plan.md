# High Level Planning Document

Given the nature of the exercise, this document aims to provide a rough scratch pad for initial planning. It is highly likely that this document will become stale as work on the assignment progresses, and as such, this should not be seen as 'documentation' but more as an illustration of a thought-process. In a real-world production environment, this kind of planning would likely take place before starting or in temporary pseudocode.

## Initial Plan

1. choose 'form' of assigment, e.g., framework choice
2. initialise a private git repo to house assignment
3. sketch out the shape of necessary types / models
   - faux api response for user-info
     - consider consuming via URI params
   - faux api response for isa-info
     - move into context / hooks
4. get a basic UI up and running
   - reference color / theme from cushon site, see: https://cushon.co.uk/workplace-isa-and-savings
   - consider 'alternative' theme to diff workplace / retail ISA offering
   - render list of cards
     - filter based on user type
5. tidy up the UI and create some semblance of a working product
6. responsiveness updating / mobile
7. unit testing 
8. step back and 'sense-check' the solution 
9. tidy up / lint 
10. add relevant stakeholders to git repo / make public and share

## Initial Choices
1. NPM, ReactJS, TypeScript and Vite

- NPM: straightforward and well understood, for this assignment it does not make sense to focus on this area of the problem.

- Vite: provides an easy to get started 'create-react-app' which for this an assignment of this nature significantly reduces the problem space, so I can focus on the important parts

- TypeScript: whilst it is likely overkill for something of this scope, TS is useful for sketching out the various interfaces and helpful in avoiding time-sucking bugs / debugging

- ReactJS: ReactJS is widely used and well-understood, making it easy to demo and debug.
