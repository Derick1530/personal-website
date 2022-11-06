---
title: 3D Situation Fractal 
description: A visualization experiment illustrating my Situation Fractal concept
updatedAt: 2022-11-06
type: Thought
---

I have spent time [defining the word "problem"](/what-is-a-problem-4-months-later) on my own, and I believe there are 3 components required for a _problem_ to exist:

1. **Entity** <br>A person, place, thing, or idea that has a state
2. **Current state** <br>A current characteristic and/or circumstance of the entity
3. **Desired new state** <br>A desired new characteristic and/or circumstance of the entity

![Problem Diagram](/img/what-is-a-problem/problem-diagram.svg "Problem Diagram")

I used to think there were more, but I have eliminated components derived from the existence of others and merged a couple together.

Most notably, I thought of **Desire** and **New state** as separate ingredients required for a _problem_ to exist, but I have since consolidated them into **Desired new state** because _both_ are required.

---

## The Situation Fractal

Before I consolidated the ingredients of a _problem_, I conceptualized a fractal, or mesh network, of states an entity traverses through and called it the **Situation Fractal**.

The word _Situation_ is used to describe an entity's transition from its current state to a new state, and _Fractal_ is used to describe the chaining of an unlimited number of these identical transitions from the entity's current state.

![Situation Fractal](/img/what-is-a-problem/situation-fractal.svg "Situation Fractal")

---

## Visualizing a _problem_ in a 2D Situation Fractal

An entity's Situation Fractal does not contain **Desire** by default. Therefore, the entity transitions between states constantly with <u>no _problems_</u>. This is because a desire for a specific new state _(i.e. **Desired new state**)_ is required for a _problem_ to exist.

Here's a 2D visualization of what a _problem_ in an entity's Situation Fractal looks like.

![A Problem in the Situation Fractal](/img/what-is-a-problem/a-problem-in-the-situation-fractal.svg "A Problem in the Situation Fractal")

---

## Visualizing a _problem_ in a 3D Situation Fractal

I haven't been able to let go of the Situation Fractal idea and my mental 3D visualization of it, so I decided to experiment and recreate my 2D diagrams in 3D using a JS library called [3D force graph](https://github.com/vasturiano/3d-force-graph).

In the interactive 3D Situation Fractal embedded below, I depict a person wanting _(desire)_ their car _(entity)_, that is blue _(current state)_, to be red _(desired new state)_, however, their car could be many different colors _(other new states that make up the Situation Fractal)_.

Explore the 3D visualization by hovering over each node to see what they represent. You can also zoom into a particular node by clicking on it.

<iframe src="https://stackblitz.com/edit/3d-situation-fractal?embed=1&file=index.html&hideDevTools=1&hideExplorer=1&hideNavigation=1&theme=light&view=preview" title="Situation Fractal in 3D"></iframe>

Shew, you best believe this experiment is just the beginning...
