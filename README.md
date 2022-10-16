# astro_nav_menus

Live demo : https://astro-nav-menus.deno.dev/

Astro Theme that can scale for big documentation websites. Includes a top appbar for sections navigation, left tree menu for section pages and right tree menu for a page table of content.

Performance oriented, built with native astro components, no dependencies to any extenal framework, no virtual dom. Fully static with no client side rendering. Javascript is for minial manipulations connecting events and classes.
## Features
- astro components (.astro) html css js
- article content immediatly searchable with native browser search, no lazy loading or custom content cache manipulations
- Left Menu pages Tree Navigation
- Right Menu Table of Content
- Menus consist of Trees with unlimited depth and recursively expandable sections
- Menus can be opened, closed and resized by the user
- Menus are built by astro and seen as readable html by the client
- markdown 
  - Supports md and mdx
  - Right Menu ToC for src/pages markdown
  - Right Menu ToC for imported `import *` markdown
- Top menu must have href from items
- Submenu should not have href href to keep pages / directories distinction


# Dev
## Creation
```
pnpm create astro@latest
```
 - Name, Empty Project, No Typescript
 - move to root git repo
 - delete node_modules
```
pnpm install
pnpm astro add deno
```
 - add deno and server config to `astro.config.mjs`
 - prepare `.github/workflows/deploy.yml`

## Todos
- panzoom component
- gallery
- menu auto depth adjust 
  - current page depth always open
  - all level items or nothing
- menu depth slider or depth selector
- AppBar right float icons
- ssr mode signin with github
- pages types and icons
- open close on nav-resize click
- store nav menu width / prevent reset on same page reload
- left nav menu generation from getStaticPaths
- add href links icons to markdown

## Thoughts
- allow index pages but do not use them to keep consistent nav menu of folders/items
- adding interactive SVGs that can be styled with css is challenging
  - `svg.astro` uses the innerHTML fragment which breaks visibility of `style` tag no longer scoping imported SVG
  - import of `rightarrow.astro` still requires style to be either global or inline
  - Tree menu collapse transition :
    - display block/none does not animate the height
    - scaleY does not bring the height down to 0 due to remaining padding margin
    - height can be animated but must be set initially
    - max-height can be animated but must be set to max value which breaks the transition timing
    - max-height adjusting with js requires high complexity depending on state of expanded children hierarchy
    - clip also needs defined start stop
    - flex can also animate but then the flex container height must be set explicitely
# survey
Analysis of existing Themes for Astro, focus is on documentation
## astro docs
https://github.com/withastro/astro/tree/main/examples/docs

Advantages :

Official example, clean html structure, light and dark toggle, left side pages and right side Table Of Content.

Limitations :
 - react and preact dependencies, despite island architecture this can exclude potential use cases
 - Left Menu
   - handcoded `SIDEBAR` in `config.ts`
   - first level is map and not list so relying on ordered map
   - fixed 2 levels structure
 - ToC is dynamically parsing the DOM on client side, this reduces astro's advantage of zero js and server side generation and rendering
 - ToC does not take h1 and limited down to h4

## hello astro

https://github.com/hellotham/hello-astro

built upon astro-docs with differences :
 
 - advantage : right side ToC is not DOM client side like astro-docs but built with native astro component taking the `headings` Markdown Layout Prop https://docs.astro.build/en/guides/markdown-content/#markdown-layout-props

 - limitation: all svg integrations are either hardcoded or wrapped in images through svgimg

# License
- MIT
## icons
Apache License
- https://www.svgrepo.com/svg/19947/folders
- https://www.svgrepo.com/svg/400563/openfilefolder

