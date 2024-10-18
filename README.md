# Commit Core

Organize everything

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation and Running](#Installation-and-Running)
- [Roadmap](#roadmap)
- [Bugs](#bugs)

## Description

This project attempts to organize all the things that overwhelm you.\
Be it a project, life goals, or even a simple to-do list.\

## Features

- There is a repository
- Repository has branches
- Branches have connections of various types
- Branches have different properties defining their behavior
- Commit changes to branches and see the changes reflected in the repository

## Installation and Running

```bash
npm install
```

```bash
npm run dev
```

## Roadmap

- [ ] **Navigation**
    - [ ] Navigation Panel
    - [x] Views Switcher
    - [ ] Back Button and history list to go back
- [ ] **Views**
    - [ ] Recursive View (branch in branch)
    - [ ] Size by Contribution Value
- [x] **Logic**
    - [x] Create update repo functions (for branches, connections, etc). They should return updated repo.
- [ ] **Add Scoring**
    - [ ] Implement simple commit
- [ ] **Create Function Diagram**
- [ ] **Branch Commit**
- [ ] **Add condition for branch to be committed**
- [ ] **Branch Priority Function**
- [ ] **Add Obsidian integration**
    - [ ] Dump to file
    - [ ] Read from file
    - [ ] Write to Daily Notes
- [ ] Show separately (or cleanup) branches that are not connected to anything
- [ ] **Approve branch removal when has connections to children or other entities**
    - [ ] Which type of connections is important?
    - [ ] Keep list fo branches that are not connected
    - [ ] Add Dialog for removal

## Bugs

- [x] **Setting main branch to other branch stops navigation**
- [ ] **Clean old logic**
- [ ] **Make connection, branches, etc a map?**
- [ ] **Is cleanup needed for connections for branches that don't exist?**
